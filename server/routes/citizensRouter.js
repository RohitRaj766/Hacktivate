const express = require("express");
const router = express.Router();
const { userMiddleware } = require("../middleware/authMiddleware");


const {
    registerUser,
    verifyOtp,
    loginUser
} = require("../controller/citizensController");

router.post("/registration", registerUser);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);

module.exports = router;