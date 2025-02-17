const express = require('express');
const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask)

module.exports = router