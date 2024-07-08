
const { createCustomError } = require('../errors/customError');
const ansyncWrapper = require('../middleware/asynWrapper')
const Task = require('../models/TaskModel')

const getAllTasks = ansyncWrapper(async (req, res) => {
  const allTasks = await Task.find({});
  res.status(200).json({ allTasks });
})

const createTask = ansyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task });
})

const getTask = ansyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404))
  }
  res.status(200).json({ task });
})

const updateTask = ansyncWrapper(async (req, res) => {
  const { id } = req.params.id
  const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true
  })

  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404))
  }
  res.status(200).json({ task })
})

const deleteTask = ansyncWrapper(async (req, res) => {
  const id = req.params.id
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return next(createCustomError(`No task with id: ${id}`, 404))
  }
  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}