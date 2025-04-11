import React from 'react'
import Navbar from '../src/components/Navbar'
import CitizenSidebar from '../src/components/CitizenSidebar'

const CitizenDashboard = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Area with top padding */}
      <div className="flex pt-16"> {/* pt-16 matches navbar height */}
        
        {/* Sidebar */}
        <div className="w-80 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto border-r border-gray-200">
          <CitizenSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default CitizenDashboard