const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Must Provide a Task Name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Task', TaskSchema);
