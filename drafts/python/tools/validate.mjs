import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import Ajv from 'ajv';
const root = new URL('../', import.meta.url);
const read = async path => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const book = await read('book.json');
const schema = await read('learning-object.schema.json');
const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);
// The supplemental question schema uses the shared definitions only.
const checkQuestion = ajv.compile({ $id: `${schema.$id}/supplement`, definitions: schema.definitions, $ref: '#/definitions/question' });
const sources = new Set(book.sources.map(source => source.id));
assert.equal(sources.size, book.sources.length, 'duplicate source');
assert.equal(book.status, 'contribution-draft');
assert.equal(book.provenance.author, 'AI-generated');
assert.equal(book.provenance.humanReviewed, false);
assert.equal(book.chapters.length, 5);
for (const source of book.sources) {
  assert(new URL(source.url).hostname === 'docs.python.org', `non-primary source ${source.id}`);
  assert(source.purpose.length > 0);
}
const ids = book.chapters.flatMap(chapter => chapter.lessons);
assert.equal(ids.length, 20);
assert.equal(new Set(ids).size, ids.length, 'duplicate lesson');
assert.deepEqual((await readdir(new URL('lessons/', root))).sort(), ids.map(id => `${id}.json`).sort(), 'unregistered lesson file');
const seen = new Set();
const allIds = new Set(ids);
let examples = 0, practices = 0;
for (const [chapterIndex, chapter] of book.chapters.entries()) {
  assert.equal(chapter.id, `chapter-${chapterIndex + 1}`);
  assert.equal(chapter.lessons.length, 4);
  for (const [index, id] of chapter.lessons.entries()) {
    const lesson = await read(`lessons/${id}.json`);
    assert(validate(lesson), `${id}: ${ajv.errorsText(validate.errors)}`);
    assert.equal(lesson.id, id);
    assert.equal(lesson.chapterId, chapter.id);
    assert.equal(lesson.number, `${chapterIndex + 1}.${index + 1}`);
    assert.equal(lesson.provenance.version, book.version);
    assert.equal(lesson.provenance.humanReviewed, false);
    const visual = lesson.interactiveVisual;
    assert.equal(new Set(visual.controls.map(c => c.name)).size, visual.controls.length);
    for (const control of visual.controls) {
      assert(control.defaultIndex < control.values.length, `${id}: invalid control default`);
      assert(visual.codeTemplate.includes(`{{${control.name}}}`), `${id}: unused control`);
    }
    const names = [...visual.codeTemplate.matchAll(/\{\{([a-z][a-z0-9_]*)\}\}/g)].map(m => m[1]);
    assert(names.every(name => visual.controls.some(c => c.name === name)), `${id}: missing control`);
    assert.equal(lesson.learningCheck.feedback.length, 3);

    for (const prerequisite of lesson.prerequisites) assert(seen.has(prerequisite), `non-earlier prerequisite ${id}: ${prerequisite}`);
    for (const source of lesson.sources) assert(sources.has(source), `missing source ${source}`);
    const tags = new Set(lesson.commonMistakes.map(item => item.id));
    assert.equal(tags.size, lesson.commonMistakes.length);
    assert.deepEqual([...tags].sort(), [...lesson.misconceptionTags].sort());
    for (const practice of lesson.practice) {
      assert(!allIds.has(practice.id), `duplicate ID ${practice.id}`);
      allIds.add(practice.id);
      for (const tag of practice.misconceptionTags) assert(tags.has(tag), `unknown misconception tag ${tag}`);
    }
    assert(!/\bTODO\b|\bTBD\b|待补充|占位文本/.test(JSON.stringify(lesson)), `${id}: placeholder`);
    examples += lesson.workedExamples.length;
    practices += lesson.practice.length;
    seen.add(id);
  }
}
const supplements = await read('supplements.json');
assert.equal(supplements.chapterReviews.length, 5);
assert.equal(supplements.exam.length, 4);
for (const [index, review] of supplements.chapterReviews.entries()) {
  assert.equal(review.chapterId, book.chapters[index].id);
  assert.equal(review.questions.length, 2);
}
const questions = [...supplements.chapterReviews.flatMap(review => review.questions), ...supplements.exam];
for (const item of questions) {
  assert(checkQuestion(item), `${item.id}: ${ajv.errorsText(checkQuestion.errors)}`);
  assert(!allIds.has(item.id), `duplicate ID ${item.id}`);
  allIds.add(item.id);
}
assert.equal(new Set(supplements.glossary.map(item => item.term)).size, supplements.glossary.length);
for (const item of supplements.glossary) assert(item.term.length && item.definition.length);
console.log(`Python draft: ${ids.length} lessons, ${examples} worked examples, ${practices} exercises, ${questions.length} review/exam questions; schema and prerequisites valid.`);
