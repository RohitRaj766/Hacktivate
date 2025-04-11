const express = require("express");
const router = express.Router();
const { saveProjects } = require("../controller/politicalController");

router.post("/projects", saveProjects);

module.exports = router;
