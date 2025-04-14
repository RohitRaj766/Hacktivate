const express = require("express");
const router = express.Router();
const { saveProjects, onboardContractors } = require("../controller/politicalController");

router.post("/projects", saveProjects);
router.post("/onboardcontractors", onboardContractors);

module.exports = router;
