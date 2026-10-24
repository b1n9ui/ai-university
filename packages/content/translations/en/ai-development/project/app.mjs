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
    "Saved tasks could not be read. Writes are paused to preserve existing data. Restore from a valid backup.";
}
function render() {
  list.replaceChildren();
  for (const task of tasks) {
    const row = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `Complete: ${task.title}`);
    checkbox.addEventListener("change", () =>
      change(() => toggleTask(tasks, task.id)),
    );
    const title = document.createElement("span");
    title.textContent = task.title;
    title.className = task.done ? "done" : "";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Delete";
    remove.setAttribute("aria-label", `Delete: ${task.title}`);
    remove.addEventListener("click", () =>
      change(() => removeTask(tasks, task.id)),
    );
    row.append(checkbox, title, remove);
    list.append(row);
  }
  document.querySelector("#count").textContent =
    `${tasks.length} tasks · ${tasks.filter((t) => t.done).length} complete`;
}
function change(getNext, recovery = false) {
  try {
    if (!writable && !recovery)
      throw new Error("Writes are paused. Restore from a valid backup first");
    const next = getNext();
    localStorage.setItem(KEY, encodeTasks(next));
    tasks = next;
    writable = true;
    status.textContent = "Saved in this browser";
    render();
    return true;
  } catch (error) {
    status.textContent = `Not saved: ${error.message}`;
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
    ? "Backup created. Check that your browser downloaded it"
    : "Exported the visible list. Unreadable previous data is not included";
});
let importSequence = 0;
document.querySelector("#import").addEventListener("change", async (event) => {
  const sequence = ++importSequence;
  pending = null;
  restore.disabled = true;
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 1000000) throw new Error("Backup exceeds 1 MB");
    const candidate = decodeTasks(await file.text());
    if (sequence !== importSequence) return;
    pending = candidate;
    restore.disabled = false;
    status.textContent = `Validated ${pending.length} tasks. Choose Confirm replacement to overwrite the current list.`;
  } catch (error) {
    if (sequence === importSequence)
      status.textContent = `Backup not imported: ${error.message}`;
  }
});
restore.addEventListener("click", () => {
  if (pending && change(() => pending, true)) {
    pending = null;
    restore.disabled = true;
  }
});
render();
