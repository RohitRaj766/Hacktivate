const mongoose = require('mongoose');

const citizensSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'] // restrict to valid values
  },
  occupation: {
    type: String,
    required: true,
    trim: true
  },
  dateofbirth: {
    type: Date, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'] 
  },
  password: {
    type: String,
    required: true
  }
});

const Citizens = mongoose.model('Citizens', citizensSchema, 'citizens');

module.exports = Citizens;
