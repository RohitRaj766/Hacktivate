const express = require("express");
const router = express.Router();
const { userMiddleware } = require("../middleware/authMiddleware");


const {
    registerUser,
    verifyOtp,
    loginUser,
    requestPasswordReset,
    resetPassword
} = require("../controller/citizensController");

router.post("/registration", registerUser);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);

module.exports = router;