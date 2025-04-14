import React, { useEffect, useState } from 'react';

const BUDGET_ARRAY = [500000, 1000000, 1500000, 2000000, 3000000];
const FUNDING_ARRAY = [200000, 400000, 600000, 800000, 1000000];
const USD_TO_INR = 83;

const ActiveProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/citizens/projects');
        const result = await response.json();
        const activeProjects = result.data.filter(project => project.state === 'Active');

        const projectsWithRandomBudget = activeProjects.map(project => {
          const randomBudget = BUDGET_ARRAY[Math.floor(Math.random() * BUDGET_ARRAY.length)];
          const randomFunding = FUNDING_ARRAY[Math.floor(Math.random() * FUNDING_ARRAY.length)];

          return {
            ...project,
            budget: randomBudget * USD_TO_INR,
            funding: randomFunding * USD_TO_INR
          };
        });

        setProjects(projectsWithRandomBudget);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="p-8 text-gray-700 text-lg">Loading projects...</div>
    );
  }

  if (selectedProject) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <button
          className="text-blue-600 mb-4 inline-flex items-center cursor-pointer"
          onClick={handleBack}
        >
          &larr; Back to Projects
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedProject.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{selectedProject.description}</p>

            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Start Date</span>
                <span>{new Date(selectedProject.startDate).toISOString().split('T')[0]}</span>
              </div>

              {/* Removed progress bar */}

              <div className="space-y-4 mt-6">
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Budget</span>
                  <span>{selectedProject.budget ? `₹${selectedProject.budget.toLocaleString()}` : 'N/A'}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Funding</span>
                  <span>{selectedProject.funding ? `₹${selectedProject.funding.toLocaleString()}` : 'N/A'}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Remaining Budget</span>
                  <span>{selectedProject.budget && selectedProject.funding ? `₹${(selectedProject.budget - selectedProject.funding).toLocaleString()}` : 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Active Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-semibold px-3 py-1 rounded-full 
                  ${project.sector === 'Healthcare' ? 'bg-pink-100 text-pink-800' :
                    project.sector === 'Environment' ? 'bg-green-100 text-green-800' :
                    project.sector === 'Education' ? 'bg-blue-100 text-blue-800' :
                    project.sector === 'Agriculture' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'}`}>
                  {project.sector}
                </span>
                <span className={`text-sm font-medium 
                  ${project.state === 'Active' ? 'text-green-600' :
                    project.state === 'Completed' ? 'text-blue-600' :
                    'text-yellow-600'}`}>
                  {project.state}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                {project.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Start Date</span>
                  <span>{new Date(project.startDate).toISOString().split('T')[0]}</span>
                </div>
                {/* Removed progress bar */}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <button
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                  onClick={() => handleViewDetails(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveProjects;
