const express = require("express");
const router = express.Router();
const { userMiddleware } = require("../middleware/authMiddleware");


const {
    loginUser,
    // requestPasswordReset,
    // resetPassword
} = require("../controller/governanceController");

router.post("/login", loginUser);
// router.post('/request-password-reset', requestPasswordReset);
// router.post('/reset-password', resetPassword);

module.exports = router;