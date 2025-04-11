const bcrypt = require("bcryptjs");
const Governance = require("../model/governance");
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

module.exports = {
  loginUser,
};
