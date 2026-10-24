import test from "node:test";
import assert from "node:assert/strict";
import {
  addTask,
  toggleTask,
  removeTask,
  encodeTasks,
  decodeTasks,
} from "./tasks.mjs";
const first = [{ id: "a", title: "Practice Git", done: false }];
test("Adding trims surrounding whitespace without mutating the input", () => {
  const next = addTask(first, "  Write requirements  ", "b");
  assert.equal(next[1].title, "Write requirements");
  assert.deepEqual(first, [{ id: "a", title: "Practice Git", done: false }]);
});
test("Reject empty and whitespace-only input", () => {
  for (const s of ["", "   ", "\n\t"]) assert.throws(() => addTask([], s, "x"));
});
test("Title-length boundary at 80 and 81", () => {
  assert.equal(addTask([], "a".repeat(80), "a")[0].title.length, 80);
  assert.throws(() => addTask([], "a".repeat(81), "a"));
});
test("Allow duplicate titles but require distinct IDs", () => {
  assert.equal(addTask(first, "Practice Git", "b").length, 2);
  assert.throws(() => addTask(first, "Another task", "a"));
});
test("Toggling twice restores the value and leaves other tasks unchanged", () => {
  const list = addTask(first, "Write requirements", "b");
  const once = toggleTask(list, "a");
  assert.equal(once[0].done, true);
  assert.deepEqual(once[1], list[1]);
  assert.deepEqual(toggleTask(once, "a"), list);
});
test("Delete by ID without deleting tasks with duplicate titles", () => {
  assert.deepEqual(removeTask(addTask(first, "Practice Git", "b"), "a"), [
    { id: "b", title: "Practice Git", done: false },
  ]);
});
test("Reject unknown IDs", () => {
  assert.throws(() => toggleTask(first, "missing"));
  assert.throws(() => removeTask(first, "missing"));
});
test("Backup round trip preserves tasks and completion state", () => {
  const list = toggleTask(addTask(first, "Write requirements", "b"), "b");
  assert.deepEqual(decodeTasks(encodeTasks(list)), list);
});
test("Allow backups of an empty list", () => {
  assert.deepEqual(decodeTasks(encodeTasks([])), []);
});
test("Reject malformed JSON, unsupported versions, and extra fields", () => {
  for (const s of [
    "{",
    "null",
    "[]",
    '{"version":2,"tasks":[]}',
    '{"version":1,"tasks":[],"extra":true}',
  ])
    assert.throws(() => decodeTasks(s));
});
test("Reject the whole list if any record is invalid", () => {
  for (const bad of [
    { id: "b", title: " ", done: false },
    { id: "b", title: "x", done: "false" },
    { id: "a", title: "Duplicate ID", done: false },
    { id: "b", title: "x", done: false, extra: 0 },
  ])
    assert.throws(() =>
      decodeTasks(JSON.stringify({ version: 1, tasks: [...first, bad] })),
    );
});
test("Allow 200 tasks and reject the 201st", () => {
  const many = Array.from({ length: 200 }, (_, i) => ({
    id: String(i),
    title: "Task",
    done: false,
  }));
  assert.equal(decodeTasks(encodeTasks(many)).length, 200);
  assert.throws(() => addTask(many, "One more task", "x"));
});
test("HTML-looking titles remain plain text", () => {
  const title = "<img src=x onerror=alert(1)>";
  assert.equal(addTask([], title, "a")[0].title, title);
});
