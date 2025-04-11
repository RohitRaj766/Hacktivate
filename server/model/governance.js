const mongoose = require('mongoose');

const governanceSchema = new mongoose.Schema({
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

const Governance = mongoose.model('Governance', governanceSchema, 'governance');

module.exports = Governance;
