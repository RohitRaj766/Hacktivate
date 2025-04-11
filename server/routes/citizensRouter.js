const express = require("express");
const router = express.Router();
const { userMiddleware } = require("../middleware/authMiddleware");


const {
    registerUser,
    verifyOtp,
    loginUser,
    requestPasswordReset,
    resetPassword,
    getProjects
} = require("../controller/citizensController");

router.post("/registration", registerUser);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
router.get('/projects', getProjects);

module.exports = router;