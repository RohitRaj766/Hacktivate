const bcrypt = require("bcryptjs");
const Citizens = require("../model/citizens");
const { generateOTP } = require('../utils');
const { sendMail } = require('../config/mailer');
const { generateToken } = require("../config/jwt");

let otpStore = {}; // In-memory store. Consider Redis or DB for production

// Register with OTP email verification
const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExists = await Citizens.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const otp = generateOTP();
    const expiry = Date.now() + 600000; // 10 minutes

    otpStore[email] = {
      otp,
      expiry,
      user: { firstname, lastname, email, password }
    };

    console.log(`Generated OTP for ${email}:`, otp); // for testing only
    await sendMail(email, otp);

    return res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// OTP Verification and Final User Creation
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }

    const otpData = otpStore[email];
    if (!otpData) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    if (Date.now() > otpData.expiry) {
      delete otpStore[email];
      return res.status(400).json({ error: 'OTP expired' });
    }

    if (otpData.otp !== otp) {
      console.log(otpData.otp)
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    const { firstname, lastname, password } = otpData.user;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Citizens({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    await newUser.save();
    delete otpStore[email];

    return res.status(201).json({ message: "User Registered Successfully" });

  } catch (error) {
    console.error("OTP Verification Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login Logic
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

    const token = generateToken(userExist._id);
    const { password: _, ...userWithoutPassword } = userExist.toObject();

    return res.status(200).json({
      message: "Login successful",
      LoggedInUser: userWithoutPassword,
      authtoken: token
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  verifyOtp,
  loginUser
};
