const mongoose = require('mongoose');

const citizensSchema = new mongoose.Schema({
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

const Citizens = mongoose.model('Citizens', citizensSchema, 'citizens');

module.exports = Citizens;
