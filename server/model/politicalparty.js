// model/politicalParty.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const politicalPartySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  // Ensuring no two parties have the same name
  },
  leader: {
    type: String,
    required: true,  // Name of the party's leader
  },
  founded: {
    type: Date,
    required: true,  // Date when the party was founded
  },
  ideologies: {
    type: [String],
    required: true,  // Ideologies followed by the party, e.g. "Democracy", "Socialism", etc.
  },
  password: {
    type: String,
    required: true,  // Password for authentication
  },
});

// Hash password before saving
politicalPartySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // only hash the password if it's being modified

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords (for login)
politicalPartySchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const PoliticalParty = mongoose.model("PoliticalParty", politicalPartySchema);

module.exports = PoliticalParty;
