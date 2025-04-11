const bcrypt = require("bcryptjs");
const Citizens = require("../model/citizens");
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

    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }

    const otpData = otpStore[email];
    if (!otpData) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    if (Date.now() > otpData.expiry) {
      delete otpStore[email];
      return res.status(400).json({ error: "OTP expired" });
    }

    if (otpData.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const { firstname, lastname, password, gender, occupation, dateofbirth } = otpData.user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Citizens({
      firstname,
      lastname,
      email,
      gender,
      occupation,
      dateofbirth,
      password: hashedPassword
    });

    await newUser.save();
    delete otpStore[email];

    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
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

    const resetLink = `localhost:5000/citizens/reset-password/${token}`;
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

const generateTokenPasswordChange = () => {
  return Math.random().toString(36).substring(2, 15);
};

module.exports = {
  registerUser,
  verifyOtp,
  loginUser,
  requestPasswordReset,
  resetPassword
};
