import { readFile, readdir } from "node:fs/promises";
import assert from "node:assert/strict";
import Ajv from "ajv";
const root = new URL("../", import.meta.url);
const read = async (p) => JSON.parse(await readFile(new URL(p, root), "utf8"));
const book = await read("book.json"),
  schema = await read("learning-object.schema.json"),
  supplements = await read("supplements.json");
const validate = new Ajv({ allErrors: true }).compile(schema);
const ids = book.chapters.flatMap((c) => c.lessons);
assert.equal(ids.length, 18);
assert.equal(new Set(ids).size, ids.length);
assert.deepEqual(
  (await readdir(new URL("lessons/", root))).sort(),
  ids.map((id) => id + ".json").sort(),
);
assert.equal(book.provenance.humanReviewed, false);
const sourceIds = new Set(book.sources.map((s) => s.id));
assert.equal(sourceIds.size, book.sources.length);
for (const source of book.sources) {
  assert.ok(source.purpose);
  assert.equal(new URL(source.url).protocol, "https:");
}
let prior = [];
let choices = 0;
let examples = 0;
let exercises = 0;
for (const [ci, chapter] of book.chapters.entries())
  for (const [li, id] of chapter.lessons.entries()) {
    const lesson = await read("lessons/" + id + ".json");
    assert.ok(validate(lesson), `${id}: ${JSON.stringify(validate.errors)}`);
    assert.equal(lesson.id, id);
    assert.equal(lesson.chapterId, chapter.id);
    assert.equal(lesson.number, `${ci + 1}.${li + 1}`);
    assert.equal(lesson.provenance.version, book.version);
    for (const p of lesson.prerequisites)
      assert.ok(prior.includes(p), `${id}: prerequisite must occur earlier`);
    for (const s of lesson.sources)
      assert.ok(sourceIds.has(s), `${id}: unknown source ${s}`);
    assert.equal(
      new Set(lesson.practice.map((p) => p.id)).size,
      lesson.practice.length,
    );
    for (const q of [lesson.learningCheck, ...lesson.interactiveVisual.steps]) {
      assert.ok(q.choices[q.correctIndex]);
      choices++;
    }
    assert.ok(
      !/TODO|TBD|PLACEHOLDER|待补充|待编写/.test(JSON.stringify(lesson)),
    );
    if (lesson.interactiveVisual.kind === "prompt")
      assert.ok(lesson.promptTemplate);
    examples += lesson.workedExamples.length;
    exercises += lesson.practice.length;
    prior.push(id);
  }
assert.equal(supplements.chapterReviews.length, book.chapters.length);
for (const [i, review] of supplements.chapterReviews.entries()) {
  assert.equal(review.chapterId, book.chapters[i].id);
  assert.ok(review.questions.length >= 2);
}
for (const q of [
  ...supplements.chapterReviews.flatMap((r) => r.questions),
  ...supplements.exam,
]) {
  for (const k of ["problem", "hint", "answer"])
    assert.ok(typeof q[k] === "string" && q[k].length);
  assert.ok(q.solution.length >= 3);
}
assert.ok(supplements.exam.length >= 4);
assert.ok(supplements.glossary.length >= 25);
assert.equal(
  new Set(supplements.glossary.map((g) => g.term)).size,
  supplements.glossary.length,
);
assert.equal(supplements.projectPlan.length, 4);
console.log(
  `AI development: ${ids.length} lessons, ${examples} examples, ${exercises} exercises, ${choices} checks/scenario steps; sources, prerequisites and schema valid.`,
);
