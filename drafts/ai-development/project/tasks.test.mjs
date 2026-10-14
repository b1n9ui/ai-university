import test from "node:test";
import assert from "node:assert/strict";
import {
  addTask,
  toggleTask,
  removeTask,
  encodeTasks,
  decodeTasks,
} from "./tasks.mjs";
const first = [{ id: "a", title: "练习 Git", done: false }];
test("添加清理两端空白且不修改原数组", () => {
  const next = addTask(first, "  写需求  ", "b");
  assert.equal(next[1].title, "写需求");
  assert.deepEqual(first, [{ id: "a", title: "练习 Git", done: false }]);
});
test("空输入和全空格都拒绝", () => {
  for (const s of ["", "   ", "\n\t"]) assert.throws(() => addTask([], s, "x"));
});
test("标题 80 与 81 的边界", () => {
  assert.equal(addTask([], "a".repeat(80), "a")[0].title.length, 80);
  assert.throws(() => addTask([], "a".repeat(81), "a"));
});
test("允许相同标题但 ID 必须不同", () => {
  assert.equal(addTask(first, "练习 Git", "b").length, 2);
  assert.throws(() => addTask(first, "另一个", "a"));
});
test("切换两次恢复原值，其他项不变", () => {
  const list = addTask(first, "写需求", "b");
  const once = toggleTask(list, "a");
  assert.equal(once[0].done, true);
  assert.deepEqual(once[1], list[1]);
  assert.deepEqual(toggleTask(once, "a"), list);
});
test("按 ID 删除，重复标题不会一并删除", () => {
  assert.deepEqual(removeTask(addTask(first, "练习 Git", "b"), "a"), [
    { id: "b", title: "练习 Git", done: false },
  ]);
});
test("未知 ID 拒绝", () => {
  assert.throws(() => toggleTask(first, "missing"));
  assert.throws(() => removeTask(first, "missing"));
});
test("含完成状态的清单备份往返一致", () => {
  const list = toggleTask(addTask(first, "写需求", "b"), "b");
  assert.deepEqual(decodeTasks(encodeTasks(list)), list);
});
test("空清单可以备份", () => {
  assert.deepEqual(decodeTasks(encodeTasks([])), []);
});
test("坏 JSON、错误版本、额外字段均拒绝", () => {
  for (const s of [
    "{",
    "null",
    "[]",
    '{"version":2,"tasks":[]}',
    '{"version":1,"tasks":[],"extra":true}',
  ])
    assert.throws(() => decodeTasks(s));
});
test("坏记录整份拒绝，不接受部分有效数据", () => {
  for (const bad of [
    { id: "b", title: " ", done: false },
    { id: "b", title: "x", done: "false" },
    { id: "a", title: "重复 ID", done: false },
    { id: "b", title: "x", done: false, extra: 0 },
  ])
    assert.throws(() =>
      decodeTasks(JSON.stringify({ version: 1, tasks: [...first, bad] })),
    );
});
test("200 项可保存，第 201 项拒绝", () => {
  const many = Array.from({ length: 200 }, (_, i) => ({
    id: String(i),
    title: "计划",
    done: false,
  }));
  assert.equal(decodeTasks(encodeTasks(many)).length, 200);
  assert.throws(() => addTask(many, "多一项", "x"));
});
test("看似 HTML 的标题仍然是普通文本", () => {
  const title = "<img src=x onerror=alert(1)>";
  assert.equal(addTask([], title, "a")[0].title, title);
});
