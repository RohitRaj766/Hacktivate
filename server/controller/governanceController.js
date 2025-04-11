const bcrypt = require("bcryptjs");
const Governance = require("../model/governance");
const PoliticalParty = require("../model/politicalparty");
const { generateToken } = require("../config/jwt");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExist = await Governance.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ error: "Governance user not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = await generateToken(userExist._id);
    const { password: _, ...userWithoutPassword } = userExist.toObject();

    return res.status(200).json({
      message: "Governance login successfull",
      LoggedInUser: userWithoutPassword,
      authtoken: token
    });
  } catch (error) {
    console.error("Governance login error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const onboardPoliticalParty = async (req, res) => {
    try {
      const { name, leader, founded, ideologies, password } = req.body;
  
      // Validation
      if (!name || !leader || !founded || !ideologies || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      // Check if the party already exists
      const existingParty = await PoliticalParty.findOne({ name });
      if (existingParty) {
        return res.status(400).json({ error: "Political party already exists" });
      }
  
      // Create the new political party
      const newParty = new PoliticalParty({
        name,
        leader,
        founded,
        ideologies,
        password, // Will be hashed via model pre-save hook
      });
  
      await newParty.save();
  
      // Exclude password from response
      const { password: _, ...partyWithoutPassword } = newParty.toObject();
  
      return res.status(201).json({
        message: "Political party onboarded successfully",
        politicalParty: partyWithoutPassword,
      });
    } catch (error) {
      console.error("Error onboarding political party:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = {
  loginUser,
  onboardPoliticalParty
};
