const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    enum: ['Active', 'On Hold', 'Completed'],
  },
  progress: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  startDate: {
    type: Date,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema,'project');

module.exports = Project;
