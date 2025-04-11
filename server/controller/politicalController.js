const Project = require('../model/project');

const saveProjects = async (req, res) => {
  try {
    const projects = req.body.projects;
    const savedProjects = await Project.insertMany(projects);
    res.status(201).json({
      message: 'Projects saved successfully',
      data: savedProjects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving projects', error: error.message });
  }
};

module.exports = { saveProjects };
