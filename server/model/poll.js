const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  context: {
    type: String,
    required: true,
    trim: true
  },
  totalFunds: {
    type: Number,
    required: true
  },
  fundDistribution: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Governance' // optional if created by admin/governance user
  }
});

module.exports = mongoose.model('Poll', pollSchema);
