import React from "react";
import Navbar from "../components/common/Navbar";
import GovernanceSidebar from "../components/dashboards/GoveranceSidebar";

const GovernanceDashboard = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex pt-16">
        {/* Sidebar Container */}
        <div className="w-72 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto border-r border-gray-200">
          <GovernanceSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default GovernanceDashboard;