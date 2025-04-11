import React, { useEffect, useState } from 'react';

const dummyProjects = [
  {
    name: "Green Valley Plantation",
    description: "A sustainable reforestation initiative targeting degraded lands.",
    sector: "Environment",
    startDate: "2024-01-15",
    state: "Active",
    progress: 75,
    fundAllocated: "₹4.1 Cr"
  },
  {
    name: "Rural Healthcare Access",
    description: "Mobile clinics and digital health services in rural areas.",
    sector: "Healthcare",
    startDate: "2023-10-10",
    state: "Completed",
    progress: 100,
    fundAllocated: "₹9.8 Cr"
  },
  {
    name: "Smart Classrooms Initiative",
    description: "Equipping government schools with smart learning tools.",
    sector: "Education",
    startDate: "2023-12-01",
    state: "Abandoned",
    progress: 15,
    fundAllocated: "₹7 Cr"
  },
  {
    name: "AgriBoost",
    description: "Tech-driven solutions and training for small-scale farmers.",
    sector: "Agriculture",
    startDate: "2024-02-20",
    state: "Active",
    progress: 55,
    fundAllocated: "₹3.3 Cr"
  },
  {
    name: "Clean Water for All",
    description: "Installation of water purification systems in rural schools.",
    sector: "Healthcare",
    startDate: "2023-11-05",
    state: "Active",
    progress: 65,
    fundAllocated: "₹2.5 Cr"
  },
  {
    name: "E-Library Expansion",
    description: "Digitizing local libraries and increasing public access to e-books.",
    sector: "Education",
    startDate: "2024-03-01",
    state: "Completed",
    progress: 100,
    fundAllocated: "₹1.2 Cr"
  },
  {
    name: "EcoCity Waste Management",
    description: "Modernizing urban waste disposal and recycling methods.",
    sector: "Environment",
    startDate: "2023-08-20",
    state: "Abandoned",
    progress: 25,
    fundAllocated: "₹7.8 Cr"
  },
  {
    name: "Organic Farming Hub",
    description: "Support for organic farming cooperatives in semi-urban zones.",
    sector: "Agriculture",
    startDate: "2024-01-10",
    state: "Active",
    progress: 33,
    fundAllocated: "₹5 Cr"
  },
  {
    name: "Emergency Response Drone Network",
    description: "Deploying drones for emergency deliveries in remote areas.",
    sector: "Healthcare",
    startDate: "2024-04-01",
    state: "Active",
    progress: 10,
    fundAllocated: "₹12 Cr"
  },
  {
    name: "Urban Tree Plantation Drive",
    description: "A project to plant 100,000 trees in major metro areas.",
    sector: "Environment",
    startDate: "2023-09-01",
    state: "Completed",
    progress: 100,
    fundAllocated: "₹5.5 Cr"
  }
];

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setProjects(dummyProjects);
    }, 1000);
  }, []);

  if (projects.length === 0) {
    return (
      <div className="p-8 text-gray-700 text-lg">Loading projects...</div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Project List</h1>

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
                      project.state === 'Abandoned' ? 'text-red-500' :
                        'text-gray-500'}`}>
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
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Fund Allocated</span>
                  <span>{project.fundAllocated}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${project.progress === 100 ? 'bg-blue-500' : 'bg-green-500'}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                  View Details
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer">
                  Edit Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
