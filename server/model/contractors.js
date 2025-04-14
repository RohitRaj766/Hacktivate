const mongoose = require('mongoose');

const ContractorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    trim: true
  },
  licenseNumber: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }
}, { timestamps: true });


const Constructors = mongoose.model('Contractor', ContractorSchema);
module.exports = Constructors;
