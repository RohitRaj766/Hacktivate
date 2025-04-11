const mongoose = require('mongoose');

const electioncommissionSchema = new mongoose.Schema({
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

const ElectionCommission = mongoose.model('Electioncommission', electioncommissionSchema, 'electioncommision');

module.exports = ElectionCommission;
