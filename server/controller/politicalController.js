const Project = require('../model/project');
const Contractor = require('../model/contractors'); // Make sure this matches your model file

// Save multiple projects
const saveProjects = async (req, res) => {
  try {
    const projects = req.body.projects;

    if (!Array.isArray(projects) || projects.length === 0) {
      return res.status(400).json({ message: 'No projects provided for saving.' });
    }

    const savedProjects = await Project.insertMany(projects);

    res.status(201).json({
      message: 'Projects saved successfully',
      data: savedProjects,
    });
  } catch (error) {
    console.error('Error saving projects:', error);
    res.status(500).json({ message: 'Error saving projects', error: error.message });
  }
};

// Onboard multiple contractors
const onboardContractors = async (req, res) => {
  try {
    const contractors = req.body.contractors;

    if (!Array.isArray(contractors) || contractors.length === 0) {
      return res.status(400).json({ message: 'No contractors provided for onboarding.' });
    }

    const savedContractors = await Contractor.insertMany(contractors);

    res.status(201).json({
      message: 'Contractors onboarded successfully',
      data: savedContractors,
    });
  } catch (error) {
    console.error('Error onboarding contractors:', error);
    res.status(500).json({ message: 'Error onboarding contractors', error: error.message });
  }
};

module.exports = {
  saveProjects,
  onboardContractors,
};
