const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  issueText: {
    type: String,
    required: true,
    trim: true,
  },
  party: {
    type: String,
    required: true,
    enum: ['Congress', 'BJP', 'AAP', 'CPI'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Issue = mongoose.model('Issue', issueSchema, 'issues');

module.exports = Issue;
