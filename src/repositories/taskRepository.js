const tasks = [];
let nextId = 1;

function findAll() {
  return tasks;
}

function findById(id) {
  return tasks.find((task) => task.id === id);
}

function create(title) {
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  return task;
}

function update(id, changes) {
  const task = findById(id);
  if (!task) return null;

  Object.assign(task, changes);
  return task;
}

function remove(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
}

module.exports = { findAll, findById, create, update, remove };