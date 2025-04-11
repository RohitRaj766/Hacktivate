const mongoose = require('mongoose');

const politicalSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  }
});

const Political = mongoose.model('Political', politicalSchema, 'political');

module.exports = Political;
