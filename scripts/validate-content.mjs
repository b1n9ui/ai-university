import {programmingBooks,programmingStats} from "./programming-utils.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import assert from "node:assert/strict";
import Ajv from "ajv";
import katex from "katex";
import { validateMathNotation } from "./math-notation.mjs";
import {
  contentBooks,
  libraryLessons,
  walkStrings,
  root,
} from "./content-utils.mjs";
import { validateGuidance } from "../packages/visuals/guidance.mjs";
import {linearControls,linearFrame,linearDefaults} from '../packages/visuals/linear-algebra.mjs';
import {odeControls,odeFrame,odeDefaults} from '../packages/visuals/ode.mjs';
import {analysisControls,analysisFrame,analysisDefaults} from '../packages/visuals/analysis.mjs';
import {discreteControls,discreteFrame,discreteDefaults} from '../packages/visuals/discrete.mjs';
import {probabilityControls,probabilityFrame,probabilityDefaults} from '../packages/visuals/probability.mjs';
import { functions } from "../packages/visuals/math.mjs";
import {
  calculus2Controls,
  calculus2Frame,
  calculus2Defaults,
} from "../packages/visuals/calculus2.mjs";
import {
  calculus3Controls,
  calculus3Frame,
  calculus3Defaults,
} from "../packages/visuals/calculus3.mjs";
export function validateContent() {
  assert.equal(
    new Set(contentBooks.map((c) => c.book.id)).size,
    contentBooks.length,
    "Duplicate book ID",
  );
  const chapterIds = contentBooks.flatMap((c) =>
    c.book.chapters.map((ch) => ch.id),
  );
  assert.equal(
    new Set(chapterIds).size,
    chapterIds.length,
    "Duplicate chapter ID",
  );
  const schema = JSON.parse(
    fs.readFileSync(`${root}/schemas/learning-object.schema.json`),
  );
  const validate = new Ajv({ allErrors: true }).compile(schema);
  const ids = new Set(),
    questions = new Set(),
    byId = Object.fromEntries(libraryLessons.map((l) => [l.id, l])),
    order = libraryLessons.map((l) => l.id);
  let mathCount = 0;
  const checkMath = (obj, context) => {
    validateMathNotation(obj, context);
    walkStrings(obj, (s, key) => {
      assert(!/[\x00-\x08\x0b-\x1f]/.test(s), `${context}: control character`);
      assert(!/TODO|TBD|待补|lorem ipsum/i.test(s), `${context}: placeholder`);
      if (key === "latex") {
        katex.renderToString(s, {
          throwOnError: true,
          strict: "ignore",
          trust: false,
        });
        mathCount++;
      }
      for (const m of s.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g)) {
        katex.renderToString(m[1] ?? m[2], {
          throwOnError: true,
          strict: "ignore",
          trust: false,
        });
        mathCount++;
      }
    });
  };
  const addQuestion = (q) => {
    assert(!questions.has(q.id), `Duplicate question ${q.id}`);
    questions.add(q.id);
    assert(
      q.problem && q.answer && q.hint && q.solution.length,
      `Incomplete question ${q.id}`,
    );
    assert(q.difficulty >= 1 && q.difficulty <= 6);
  };
  for (const { book, allLessons, extra, directory } of contentBooks) {
    const sourceIds = new Set(book.sources.map((s) => s.id));
    for (const l of allLessons) {
      checkMath(l, l.id);
      validateGuidance(l);
      assert(validate(l), `${l.id}: ${JSON.stringify(validate.errors)}`);
      assert(!ids.has(l.id), `Duplicate lesson ${l.id}`);
      ids.add(l.id);
      assert(l.learningCheck.correctIndex < l.learningCheck.choices.length);
      if(l.learningCheck.responses)assert.equal(l.learningCheck.responses.length,l.learningCheck.choices.length,`${l.id}: option feedback must align with choices`);
      if(l.teaching.transferExerciseId)assert(l.practice.some(q=>q.id===l.teaching.transferExerciseId),`${l.id}: unknown transfer exercise`);
      assert(
        l.sources.every((id) => sourceIds.has(id)),
        `${l.id}: unknown source`,
      );
      if(l.interactiveVisual.kind==='analysis') {
        assert.equal(l.interactiveVisual.function,l.id);assert(analysisControls(l.id));analysisFrame(l.id,analysisDefaults(l.id));
      } else if(l.interactiveVisual.kind==='discrete') {
        assert.equal(l.interactiveVisual.function,l.id);assert(discreteControls(l.id));discreteFrame(l.id,discreteDefaults(l.id));
      } else if(l.interactiveVisual.kind==='probability') {
        assert.equal(l.interactiveVisual.function,l.id);
        assert(probabilityControls(l.id));probabilityFrame(l.id,probabilityDefaults(l.id));
      } else if(l.interactiveVisual.kind==='ode') {
        assert.equal(l.interactiveVisual.function,l.id);
        assert(odeControls(l.id));odeFrame(l.id,odeDefaults(l.id));
      } else if(l.interactiveVisual.kind==='linear-algebra') {
        assert.equal(l.interactiveVisual.function,l.id);
        assert(linearControls(l.id));linearFrame(l.id,linearDefaults(l.id));
      } else if (l.interactiveVisual.kind === "calculus3") {
        assert.equal(l.interactiveVisual.function, l.id);
        assert(calculus3Controls(l.id));
        calculus3Frame(l.id, calculus3Defaults(l.id));
      } else if (l.interactiveVisual.kind === "calculus2") {
        assert.equal(
          l.interactiveVisual.function,
          l.id,
          "Second-volume model must match its lesson",
        );
        assert(calculus2Controls(l.id), `${l.id}: missing controls`);
        calculus2Frame(l.id, calculus2Defaults(l.id));
      } else
        assert(
          functions[l.interactiveVisual.function],
          `${l.id}: missing visual function`,
        );
      assert(
        l.prerequisites.every((id) => byId[id]),
        `${l.id}: unknown prerequisite`,
      );
      for (const p of l.prerequisites)
        assert(
          order.indexOf(p) < order.indexOf(l.id),
          `Forward prerequisite ${p} -> ${l.id}`,
        );
      for (const q of l.practice) {
        addQuestion(q);
        assert(
          q.misconceptionTags.every((id) => l.misconceptionTags.includes(id)),
          `${q.id}: unknown misconception tag`,
        );
      }
    }
    const sorted = book.chapters.flatMap((ch, ci) =>
      ch.lessonIds.map((id, li) => {
        const l = byId[id];
        assert(l && l.chapterId === ch.id, `Broken chapter link ${id}`);
        assert.equal(l.number, `${ci + 1}.${li + 1}`);
        return id;
      }),
    );
    assert.deepEqual(sorted, book.lessonIds);
    assert.equal(new Set(sorted).size, sorted.length);
    const onDisk = fs
      .readdirSync(`${root}/${directory}`)
      .filter((p) => p.endsWith(".json"))
      .map((p) => p.slice(0, -5))
      .sort();
    assert.deepEqual(
      onDisk,
      [...book.lessonIds].sort(),
      "Unlisted lesson file",
    );
    assert.deepEqual(
      extra.reviews.map((r) => r.chapterId),
      book.chapters.map((c) => c.id),
    );
    checkMath(extra, book.id + " supplements");
    checkMath(book.chapters, book.id + " chapters");
    [...extra.exam, ...extra.reviews.flatMap((r) => r.questions)].forEach(
      addQuestion,
    );
    assert(
      extra.glossary.every((g) => book.lessonIds.includes(g.lessonId)),
      "Unlinked glossary",
    );
  }
  const visiting = new Set(),
    visited = new Set();
  function visit(id) {
    assert(!visiting.has(id), `Prerequisite cycle ${id}`);
    if (visited.has(id)) return;
    visiting.add(id);
    byId[id].prerequisites.forEach(visit);
    visiting.delete(id);
    visited.add(id);
  }
  ids.forEach(visit);
  const library = JSON.parse(
      fs.readFileSync(`${root}/packages/content/library.json`),
    ),
    libSchema = JSON.parse(
      fs.readFileSync(`${root}/schemas/library.schema.json`),
    );
  const validLibrary = new Ajv({ allErrors: true }).compile(libSchema);
  assert(validLibrary(library), JSON.stringify(validLibrary.errors));
  const areas = new Set(library.areas.map((a) => a.id));
  assert.equal(areas.size, library.areas.length);
  assert.equal(
    new Set(library.volumes.map((v) => v.id)).size,
    library.volumes.length,
  );
  const categories=new Set(library.categories.map(c=>c.id));
  assert.equal(categories.size,library.categories.length);
  library.areas.forEach(a=>assert(categories.has(a.categoryId)));
  library.volumes.forEach(v=>{
    assert(areas.has(v.areaId));
    assert.equal(v.categoryId, library.areas.find(a=>a.id===v.areaId).categoryId);
  });
  const published = library.volumes.filter((v) => v.status === "published");
  assert.deepEqual(
    published.map((v) => v.id).sort(),
    [...contentBooks.map((c) => c.book.id),...programmingBooks.map(c=>c.id)].sort(),
    "Published catalog must match complete books",
  );
  for (const volume of published) {
    const programming=programmingBooks.find(c=>c.id===volume.id);
    if(programming){
      assert.equal(programming.book.status,'published');
      assert.equal(volume.categoryId,'other');
      assert.equal(volume.route,`book/${programming.id}`);
      assert.deepEqual(volume.stats,programmingStats(programming));
      assert(volume.coverMark && !volume.coverFormula);
      continue;
    }
    assert.equal(volume.categoryId,'mathematics');
    const { book, allLessons, extra } = contentBooks.find(
      (c) => c.book.id === volume.id,
    );
    assert.equal(volume.route, `book/${book.id}`);
    assert.deepEqual(volume.stats, {
      chapters: book.chapters.length,
      lessons: allLessons.length,
      examples: allLessons.reduce((n, l) => n + l.workedExamples.length, 0),
      exercises:
        allLessons.reduce((n, l) => n + l.practice.length, 0) +
        extra.exam.length +
        extra.reviews.reduce((n, r) => n + r.questions.length, 0),
    });
    katex.renderToString(volume.coverFormula, {
      throwOnError: true,
      trust: false,
    });
  }
  return {
    publishedVolumes: published.length,
    programming: programmingBooks.reduce((s,c)=>{const v=programmingStats(c);for(const k of Object.keys(v))s[k]+=v[k];return s;},{chapters:0,lessons:0,examples:0,exercises:0}),
    chapters: contentBooks.reduce((n, c) => n + c.book.chapters.length, 0),
    sections: ids.size,
    examples: libraryLessons.reduce((n, l) => n + l.workedExamples.length, 0),
    exercises: questions.size,
    renderedFormulas: mathCount,
  };
}
if (path.resolve(process.argv[1] || "") === fileURLToPath(import.meta.url))
  console.log(JSON.stringify(validateContent(), null, 2));
