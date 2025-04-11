const express = require("express");
const router = express.Router();
const { userMiddleware } = require("../middleware/authMiddleware");


const {
    registerUser,
    verifyOtp,
    loginUser,
    requestPasswordReset,
    resetPassword,
    getProjects,
    raiseIssue,
    getAllIssues
} = require("../controller/citizensController");

router.post("/registration", registerUser);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
router.get('/projects', getProjects);
router.post('/raise-issue', raiseIssue);
router.get('/getall-issue', getAllIssues);

module.exports = router;