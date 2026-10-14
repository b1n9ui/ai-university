import {
  addTask,
  toggleTask,
  removeTask,
  encodeTasks,
  decodeTasks,
} from "./tasks.mjs";
const KEY = "learning-list-v1";
const form = document.querySelector("#form");
const input = document.querySelector("#title");
const list = document.querySelector("#list");
const status = document.querySelector("#status");
const restore = document.querySelector("#restore");
let tasks = [];
let writable = true;
let pending = null;
try {
  const raw = localStorage.getItem(KEY);
  if (raw !== null) tasks = decodeTasks(raw);
} catch {
  writable = false;
  status.textContent =
    "无法读取已保存的清单。已暂停写入，避免覆盖旧数据；你可以通过备份恢复。";
}
function render() {
  list.replaceChildren();
  for (const task of tasks) {
    const row = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `完成：${task.title}`);
    checkbox.addEventListener("change", () =>
      change(() => toggleTask(tasks, task.id)),
    );
    const title = document.createElement("span");
    title.textContent = task.title;
    title.className = task.done ? "done" : "";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "删除";
    remove.setAttribute("aria-label", `删除：${task.title}`);
    remove.addEventListener("click", () =>
      change(() => removeTask(tasks, task.id)),
    );
    row.append(checkbox, title, remove);
    list.append(row);
  }
  document.querySelector("#count").textContent =
    `${tasks.length} 项计划 · ${tasks.filter((t) => t.done).length} 项已完成`;
}
function change(getNext, recovery = false) {
  try {
    if (!writable && !recovery)
      throw new Error("写入已暂停，请先从有效备份恢复");
    const next = getNext();
    localStorage.setItem(KEY, encodeTasks(next));
    tasks = next;
    writable = true;
    status.textContent = "已保存到此浏览器";
    render();
    return true;
  } catch (error) {
    status.textContent = `未保存：${error.message}`;
    render();
    return false;
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (change(() => addTask(tasks, input.value, crypto.randomUUID())))
    input.value = "";
  input.focus();
});
document.querySelector("#export").addEventListener("click", () => {
  const url = URL.createObjectURL(
    new Blob([encodeTasks(tasks)], { type: "application/json" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "learning-list-backup.json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = writable
    ? "备份已生成，请确认浏览器已下载"
    : "已导出当前可见清单；读取失败的旧数据不在此备份中";
});
let importSequence = 0;
document.querySelector("#import").addEventListener("change", async (event) => {
  const sequence = ++importSequence;
  pending = null;
  restore.disabled = true;
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 1000000) throw new Error("备份文件超过 1 MB");
    const candidate = decodeTasks(await file.text());
    if (sequence !== importSequence) return;
    pending = candidate;
    restore.disabled = false;
    status.textContent = `已检查 ${pending.length} 项。点击“确认替换”才会覆盖当前清单。`;
  } catch (error) {
    if (sequence === importSequence)
      status.textContent = `备份未导入：${error.message}`;
  }
});
restore.addEventListener("click", () => {
  if (pending && change(() => pending, true)) {
    pending = null;
    restore.disabled = true;
  }
});
render();
