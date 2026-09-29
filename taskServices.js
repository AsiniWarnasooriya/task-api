const repository = require("../repositories/taskRepository");

function getAllTasks() {
  return repository.findAll();
}

function getTask(id) {
  return repository.findById(Number(id));
}

function createTask(title) {
  if (typeof title !== "string" || !title.trim()) {
    throw new Error("Title is required");
  }

  return repository.create(title.trim());
}

function updateTask(id, changes) {
  const validChanges = {};

  if (changes.title !== undefined) {
    if (typeof changes.title !== "string" || !changes.title.trim()) {
      throw new Error("Title must be a non-empty string");
    }
    validChanges.title = changes.title.trim();
  }

  if (changes.completed !== undefined) {
    if (typeof changes.completed !== "boolean") {
      throw new Error("Completed must be true or false");
    }
    validChanges.completed = changes.completed;
  }

  return repository.update(Number(id), validChanges);
}

function deleteTask(id) {
  return repository.remove(Number(id));
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };