const express = require("express");
const router = express.Router();
const { userMiddleware } = require("../middleware/authMiddleware");


const {
    loginUser,
    onboardPoliticalParty,
    // requestPasswordReset,
    // resetPassword
} = require("../controller/governanceController");

router.post("/login", loginUser);
router.post('/onboardpoliticalparty', onboardPoliticalParty);
// router.post('/reset-password', resetPassword);

module.exports = router;