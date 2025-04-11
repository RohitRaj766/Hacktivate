const bcrypt = require("bcryptjs");
const Citizens = require("../model/citizens");
const Project = require("../model/project");
const { generateOTP } = require("../utils");
const { sendMail, sendMailpasswordreset } = require("../config/mailer");
const { generateToken } = require("../config/jwt");

let otpStore = {};

const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, gender, occupation, dateofbirth } = req.body;

    if (!firstname || !lastname || !email || !password || !gender || !occupation || !dateofbirth) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExists = await Citizens.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const otp = generateOTP();
    const expiry = Date.now() + 10 * 60 * 1000;

    otpStore[email] = {
      otp,
      expiry,
      user: { firstname, lastname, email, password, gender, occupation, dateofbirth }
    };

    await sendMail(email, otp);

    return res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Check if email and OTP are provided
    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }

    // Check if OTP exists in the otpStore
    const otpData = otpStore[email];
    if (!otpData) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Check if OTP has expired
    if (Date.now() > otpData.expiry) {
      delete otpStore[email];  // Delete expired OTP from store
      return res.status(400).json({ error: "OTP expired" });
    }

    // Check if the OTP matches
    if (otpData.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Extract user information from otpData
    const { firstname, lastname, password, gender, occupation, dateofbirth } = otpData.user;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new Citizens({
      firstname,
      lastname,
      email,
      gender,
      occupation,
      dateofbirth,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    // Delete OTP from the store after successful registration
    delete otpStore[email];

    // Respond with success message
    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExist = await Citizens.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ error: "Citizen Not Found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = await generateToken(userExist._id);
    const { password: _, ...userWithoutPassword } = userExist.toObject();

    return res.status(200).json({
      message: "Login successfull",
      LoggedInUser: userWithoutPassword,
      authtoken: token
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Citizens.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const token = generateTokenPasswordChange();
    const expiry = Date.now() + 5 * 60 * 1000;

    otpStore[email] = { token, expiry };

    const resetLink = `localhost:5000/citizens/reset-password/${token}`; // need to change this link for live project.
    await sendMailpasswordreset(email, resetLink);

    return res.status(200).json({ message: "Password reset link sent to email" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, email, newPassword } = req.body;

    const resetData = otpStore[email];
    if (!resetData || resetData.token !== token || Date.now() > resetData.expiry) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Citizens.updateOne({ email }, { password: hashedPassword });

    delete otpStore[email];

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find() || "hello hello"; // Fetch all projects from DB

    console.log('Fetched Projects:', projects); // Print to console

    return res.status(200).json({ data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};



const generateTokenPasswordChange = () => {
  return Math.random().toString(36).substring(2, 15);
};

module.exports = {
  registerUser,
  verifyOtp,
  loginUser,
  requestPasswordReset,
  resetPassword,
  getProjects
};
