import { test } from "node:test";
import assert from "node:assert/strict";
import {
  functions,
  integrate,
  secant,
  newton,
  epsilonDelta,
  arcLength,
} from "../packages/visuals/math.mjs";
import { validateContent } from "./validate-content.mjs";
const near = (a, b, tol = 1e-7) =>
  assert(Math.abs(a - b) < tol, `${a} differs from ${b}`);
test("entire manuscript is linked, schema valid, formula-renderable and acyclic", () => {
  const result = validateContent();
  assert.equal(result.sections, 345);
  assert.equal(result.exercises, 1696);
  assert.equal(result.examples, 702);
  assert.equal(result.publishedVolumes, 11);
  assert.equal(result.chapters, 71);
});
test("canonical derivatives agree with independent central differences", () => {
  for (const [id, s] of Object.entries(functions)) {
    for (const x of [0.4, 0.8, 1.3]) {
      if (id === "circle" && x >= 2) continue;
      const numeric = (s.f(x + 1e-5) - s.f(x - 1e-5)) / 2e-5;
      near(s.d(x), numeric, 1e-4);
    }
  }
});
test("removable holes stay undefined, with matching one-sided limits", () => {
  assert(Number.isNaN(functions.hole.f(1)));
  near(functions.hole.f(1 - 1e-6), 2, 2e-6);
  near(functions.hole.f(1 + 1e-6), 2, 2e-6);
  assert(Number.isNaN(functions.sinc.f(0)));
  near(functions.sinc.f(1e-6), 1);
});
test("secants approach the derivative from both sides", () => {
  for (const h of [1e-4, -1e-4])
    near(secant(functions.square.f, 2, h), 4, 0.00011);
  assert(Number.isNaN(secant(functions.square.f, 1, 0)));
});
test("epsilon-delta guarantee holds throughout the chosen interval", () => {
  for (const e of [0.001, 0.2, 1, 10]) {
    const d = epsilonDelta(e);
    for (let i = 1; i < 200; i++) {
      const x = 2 - d + (2 * d * i) / 200;
      assert(Math.abs(x * x - 4) < e);
    }
  }
});
test("Riemann sums converge and left/right bounds are honest", () => {
  const f = functions.square.f;
  near(integrate(f, 0, 1, 2, "right"), 5 / 8);
  near(integrate(f, 0, 1, 2, "left"), 1 / 8);
  assert(integrate(f, 0, 1, 40, "left") < 1 / 3);
  assert(integrate(f, 0, 1, 40, "right") > 1 / 3);
  near(integrate(f, 0, 1, 1000), 1 / 3, 1e-6);
  near(
    integrate((x) => 2 * x + 1, 0, 2, 2, "trapezoid"),
    6,
  );
});
test("signed areas differ from distance", () => {
  near(
    integrate((x) => x - 1, 0, 3),
    1.5,
  );
  near(
    integrate((x) => Math.abs(x - 1), 0, 3, 6000),
    2.5,
    1e-6,
  );
  near(
    integrate((x) => x, -2, 2),
    0,
  );
});
test("FTC accumulator derivative agrees with the original function", () => {
  const A = (x) => integrate((z) => z * z, 0, x, 4000);
  near((A(0.7 + 1e-5) - A(0.7 - 1e-5)) / 2e-5, 0.49, 1e-6);
});
test("independent geometry and physical application checks", () => {
  near(
    integrate((x) => x - x * x, 0, 1),
    1 / 6,
    1e-6,
  );
  near(
    integrate((x) => Math.PI * x, 0, 1),
    Math.PI / 2,
  );
  near(
    integrate((x) => 2 * Math.PI * x ** 3, 0, 1, 5000),
    Math.PI / 2,
    1e-7,
  );
  near(
    integrate((x) => 100 * x, 0, 0.2),
    2,
  );
  near(
    integrate((x) => x * (1 + x), 0, 2) / integrate((x) => 1 + x, 0, 2),
    7 / 6,
    1e-6,
  );
});
test("Newton handles valid roots and zero derivatives", () => {
  const s = functions["square-minus-two"];
  const result = newton(s.f, s.d, 1);
  near(result.rows.at(-1).next, Math.sqrt(2));
  assert(newton(s.f, s.d, 0).error);
  const cycle = newton(
    (x) => x ** 3 - 2 * x + 2,
    (x) => 3 * x * x - 2,
    0,
    2,
  );
  near(cycle.rows[0].next, 1);
  near(cycle.rows[1].next, 0);
});
test("arc polylines converge to a separate analytic integral", () => {
  const f = functions.arc.f,
    target = (2 / 3) * (2 * Math.sqrt(2) - 1);
  assert(arcLength(f, 0, 1, 80) > arcLength(f, 0, 1, 4));
  near(arcLength(f, 0, 1, 5000), target, 1e-7);
});
test("comparison examples distinguish a jump from a hole, and a corner from a tangent", () => {
  const jump = functions.jump;
  assert(Number.isNaN(jump.f(1)));
  near(jump.f(1 - 1e-6), 1);
  near(jump.f(1 + 1e-6), 3);
  const corner = functions.absolute;
  near(corner.f(-1e-6), corner.f(1e-6));
  near(secant(corner.f, 0, -0.001), -1);
  near(secant(corner.f, 0, 0.001), 1);
  assert(Number.isNaN(corner.d(0)));
  near(corner.d(-0.5), (corner.f(-0.5 + 1e-5) - corner.f(-0.5 - 1e-5)) / 2e-5);
});
