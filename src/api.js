const KEY = "week1-tasks:created";

const readCreated = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) ?? []; }
  catch { return []; }
};

export async function getTasks() {
  const res = await fetch("/tasks.json");
  if (!res.ok) throw new Error(`Could not load tasks (HTTP ${res.status})`);
  const seed = await res.json();
  return [...seed, ...readCreated()];
}

export async function getTask(id) {
  const tasks = await getTasks();
  return tasks.find((t) => String(t.id) === String(id)) ?? null;
}

export async function createTask(data) {
  const created = readCreated();
  const all = await getTasks();
  const id = Math.max(0, ...all.map((t) => t.id)) + 1;
  const task = { id, done: false, ...data };
  localStorage.setItem(KEY, JSON.stringify([...created, task]));
  return task;
}