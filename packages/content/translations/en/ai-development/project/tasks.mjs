export const MAX_TITLE = 80;
export const MAX_TASKS = 200;
export function validateTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length > MAX_TASKS)
    throw new Error("Invalid list format or more than 200 tasks");
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
      throw new Error("The list contains an invalid record");
    ids.add(task.id);
  }
  return tasks;
}
export function addTask(tasks, title, id) {
  validateTasks(tasks);
  if (typeof title !== "string") throw new Error("Enter text");
  const clean = title.trim();
  if (!clean) throw new Error("Write a learning task first");
  if (clean.length > MAX_TITLE) throw new Error("Use at most 80 UTF-16 code units");
  if (tasks.length >= MAX_TASKS) throw new Error("Save at most 200 tasks");
  const next = [...tasks, { id, title: clean, done: false }];
  return validateTasks(next);
}
export function toggleTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("Task not found");
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : { ...task },
  );
}
export function removeTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("Task not found");
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
    throw new Error("Unsupported backup version or format");
  return validateTasks(data.tasks);
}
