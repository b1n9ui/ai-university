export const MAX_TITLE = 80;
export const MAX_TASKS = 200;
export function validateTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length > MAX_TASKS)
    throw new Error("清单格式错误或超过 200 项");
  const ids = new Set();
  for (const task of tasks) {
    if (
      !task ||
      typeof task !== "object" ||
      Array.isArray(task) ||
      Object.keys(task).sort().join(",") !== "done,id,title" ||
      typeof task.id !== "string" ||
      !task.id ||
      ids.has(task.id) ||
      typeof task.title !== "string" ||
      !task.title.trim() ||
      task.title !== task.title.trim() ||
      task.title.length > MAX_TITLE ||
      typeof task.done !== "boolean"
    )
      throw new Error("清单包含无效记录");
    ids.add(task.id);
  }
  return tasks;
}
export function addTask(tasks, title, id) {
  validateTasks(tasks);
  if (typeof title !== "string") throw new Error("请输入文字");
  const clean = title.trim();
  if (!clean) throw new Error("请先写一项学习计划");
  if (clean.length > MAX_TITLE) throw new Error("最多 80 个 UTF-16 代码单元");
  if (tasks.length >= MAX_TASKS) throw new Error("最多保存 200 项");
  const next = [...tasks, { id, title: clean, done: false }];
  return validateTasks(next);
}
export function toggleTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("找不到这一项");
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : { ...task },
  );
}
export function removeTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("找不到这一项");
  return tasks.filter((task) => task.id !== id);
}
export function encodeTasks(tasks) {
  validateTasks(tasks);
  return JSON.stringify({ version: 1, tasks });
}
export function decodeTasks(text) {
  const data = JSON.parse(text);
  if (
    !data ||
    Array.isArray(data) ||
    typeof data !== "object" ||
    Object.keys(data).sort().join(",") !== "tasks,version" ||
    data.version !== 1
  )
    throw new Error("备份版本或格式不支持");
  return validateTasks(data.tasks);
}
