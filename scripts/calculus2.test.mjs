import test from "node:test";
import assert from "node:assert/strict";
import { contentBooks, libraryLessons } from "./content-utils.mjs";
import { validateGuidance } from "../packages/visuals/guidance.mjs";
import {
  calculus2Controls,
  calculus2Defaults,
  calculus2Frame,
  calculus2Playback,
  simpson,
  powerIntegral,
  taylorValue,
  eulerPath,
  odeModel,
} from "../packages/visuals/calculus2.mjs";
const near = (a, b, tol = 1e-8) =>
  assert(Math.abs(a - b) < tol, `${a} != ${b}`);
const second = contentBooks.find((c) => c.book.id === "calculus-2");
test("second volume is a complete independently indexed manuscript, not catalog placeholders", () => {
  assert.equal(second.book.chapters.length, 8);
  assert.equal(second.allLessons.length, 35);
  assert.equal(
    second.allLessons.reduce((n, l) => n + l.workedExamples.length, 0),
    72,
  );
  assert.equal(
    second.allLessons.reduce((n, l) => n + l.practice.length, 0) +
      second.extra.exam.length +
      second.extra.reviews.flatMap((r) => r.questions).length,
    179,
  );
  const ids = libraryLessons.map((l) => l.id);
  assert.equal(new Set(ids).size, 345);
  const questionIds = contentBooks
    .flatMap((c) => [
      ...c.allLessons.flatMap((l) => l.practice),
      ...c.extra.exam,
      ...c.extra.reviews.flatMap((r) => r.questions),
    ])
    .map((q) => q.id);
  assert.equal(new Set(questionIds).size, 1702);
  const sectionQuestions = new Set(
    second.allLessons.flatMap((l) => l.practice).map((q) => q.problem),
  );
  for (const q of [
    ...second.extra.exam,
    ...second.extra.reviews.flatMap((r) => r.questions),
  ])
    assert(
      !sectionQuestions.has(q.problem),
      "review must include new transfer tasks",
    );
});
test("all second-volume presets, slider endpoints and chart data stay in actual model domains", () => {
  for (const l of second.allLessons) {
    validateGuidance(l);
    const base = calculus2Defaults(l.id);
    const cases = [
      base,
      ...l.teaching.steps.map((s) => ({ ...base, ...s.preset })),
    ];
    for (const c of calculus2Controls(l.id))
      cases.push({ ...base, [c.key]: c.min }, { ...base, [c.key]: c.max });
    for (const p of cases) {
      const f = calculus2Frame(l.id, p);
      assert(f.stats.length >= 2);
      for (const row of [
        ...f.lines.flatMap((l) => l.points),
        ...f.dots,
        ...(f.area || []),
        ...f.field,
      ])
        assert(row.every(Number.isFinite), `${l.id}: invalid chart value`);
      assert(
        f.stats.every(
          (s) => !s.value.includes("NaN") && !s.value.includes("Infinity"),
        ),
        l.id,
      );
    }
  }
});
test("every automatic progression reaches an explicit legal endpoint and remains there", () => {
  for (const l of second.allLessons) {
    const seed = calculus2Defaults(l.id),
      middle = calculus2Playback(l.id, seed, 3),
      end = calculus2Playback(l.id, seed, 6),
      later = calculus2Playback(l.id, seed, 60);
    assert(!middle.done);
    assert(end.done);
    assert.deepEqual(end, later);
    const c = calculus2Controls(l.id).find((c) => c.key === end.key);
    assert(end.value === c.max || end.value === c.min);
    calculus2Frame(l.id, { ...seed, [end.key]: end.value });
    if (end.key === "h") assert(end.value > 0);
  }
});
test("numerical integration agrees with independent polynomial integrals and conservative error bounds", () => {
  for (const n of [2, 8, 32, 80]) {
    near(
      simpson((x) => x ** 3, 0, 1, n),
      0.25,
    );
    near(
      simpson((x) => 3 * x * x + 2 * x + 1, -1, 2, n),
      15,
    );
    const err = Math.abs(simpson(Math.exp, 0, 1, n) - (Math.E - 1));
    assert(err <= Math.E / (180 * n ** 4) + 1e-14);
  }
  assert.throws(() => simpson(Math.exp, 0, 1, 3));
});
test("improper integrals preserve distinct tail and singularity thresholds", () => {
  near(powerIntegral(1, 4, 2), 0.75);
  near(powerIntegral(0.01, 1, 0.5), 1.8);
  near(powerIntegral(1, Math.E, 1), 1);
  const tail = calculus2Frame("c2-improper-infinity", { c: 1, b: 40 }),
    spike = calculus2Frame("c2-improper-singular", { c: 1, h: 0.001 });
  assert.equal(tail.stats[1].value, "发散");
  assert.equal(spike.stats[1].value, "发散");
});
test("Taylor coefficients match derivatives and representative remainders", () => {
  near(taylorValue("taylor", 0.1, 2), 1.105);
  near(taylorValue("standard", 0.2, 3), 0.2 - 0.2 ** 3 / 6);
  near(taylorValue("binomial", 0.04, 2), 1.0198);
  for (const x of [-0.8, 0, 0.8])
    for (const m of [2, 6, 10]) {
      const err = Math.abs(Math.exp(x) - taylorValue("taylor", x, m));
      let fac = 1;
      for (let k = 1; k <= m + 1; k++) fac *= k;
      assert(
        err <= (Math.exp(Math.abs(x)) * Math.abs(x) ** (m + 1)) / fac + 1e-14,
      );
    }
});
test("Euler is a finite approximation, improves under refinement, and can be unstable for large steps", () => {
  for (const family of ["euler", "linear-ode", "separable"]) {
    const model = odeModel(family);
    const coarse = eulerPath(model.f, model.y0, model.end, 4).at(-1)[1],
      fine = eulerPath(model.f, model.y0, model.end, 80).at(-1)[1],
      exact = model.exact(model.end);
    assert(Math.abs(fine - exact) < Math.abs(coarse - exact));
    assert.notEqual(fine, exact);
  }
  assert.deepEqual(
    eulerPath((x, y) => -y, 1, 6, 2).map((p) => p[1]),
    [1, -2, 4],
  );
});
test("polar signed radius and swept area are kept separate from unique geometric area", () => {
  const full = calculus2Frame("c2-polar-calculus", { x: 2 * Math.PI });
  near(Number(full.stats[3].value), 1.5 * Math.PI, 1e-7);
  const rose = calculus2Frame("c2-polar", { x: Math.PI / 2 }, "rose");
  near(Number(rose.stats[0].value), -2);
  assert.match(rose.stats[3].label, /可重叠/);
});
test("selected antiderivatives and mass, pressure, geometry readouts agree with independent calculations", () => {
  const eps = 1e-5,
    derivative = (f, x) => (f(x + eps) - f(x - eps)) / (2 * eps);
  for (const x of [0.3, 0.8, 1.4]) {
    near(
      derivative((x) => Math.exp(x) * (x - 1), x),
      x * Math.exp(x),
      1e-7,
    );
    near(
      derivative((x) => -Math.cos(x) + Math.cos(x) ** 3 / 3, x),
      Math.sin(x) ** 3,
      1e-7,
    );
    near(
      derivative((x) => Math.log(x) - Math.log(x + 1) + 1 / (x + 1), x),
      1 / (x * (x + 1) ** 2),
      1e-7,
    );
  }
  const m = calculus2Frame("c2-moments", { c: 2 });
  near(Number(m.stats[0].value), 2);
  near(Number(m.stats[2].value), 7 / 12, 1e-8);
  const pressure = calculus2Frame("c2-pressure", { b: 3 });
  near(Number(pressure.stats[1].value), 44100);
  const cone = calculus2Frame("c2-surface", { c: 1 });
  near(Number(cone.stats[2].value), Math.PI * Math.sqrt(2), 1e-7);
  const sine = calculus2Frame("c2-trig-integrals", { n: 80 });
  near(Number(sine.stats[0].value), 2 / 3, 1e-7);
});
