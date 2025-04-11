import React from 'react'

const ActiveProjects = () => {
  // Hardcoded active projects data
  const projects = [
    {
      name: 'Smart City Infrastructure',
      description: 'Developing IoT-enabled public utilities and traffic management systems across the city',
      sector: 'Infrastructure',
      state: 'Active',
      progress: 65,
      startDate: '2023-01-15'
    },
    {
      name: 'Rural Healthcare Initiative',
      description: 'Mobile medical units and telemedicine services for remote areas',
      sector: 'Healthcare',
      state: 'Active',
      progress: 40,
      startDate: '2023-03-01'
    },
    {
      name: 'Green Energy Parks',
      description: 'Installation of solar-powered community parks with charging stations',
      sector: 'Environment',
      state: 'On Hold',
      progress: 25,
      startDate: '2023-02-10'
    },
    {
      name: 'Digital Literacy Drive',
      description: 'Free computer education centers for senior citizens',
      sector: 'Education',
      state: 'Active',
      progress: 80,
      startDate: '2022-11-05'
    },
    {
      name: 'Urban Farming Network',
      description: 'Community vertical farming initiative in apartment complexes',
      sector: 'Agriculture',
      state: 'Active',
      progress: 55,
      startDate: '2023-04-20'
    },
    {
      name: 'Coastal Protection System',
      description: 'Erosion control and mangrove restoration project',
      sector: 'Environment',
      state: 'Completed',
      progress: 100,
      startDate: '2022-08-15'
    }
  ];

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
                  <span>{project.startDate}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full 
                      ${project.progress === 100 ? 'bg-blue-500' : 'bg-green-500'}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                  Edit Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActiveProjects