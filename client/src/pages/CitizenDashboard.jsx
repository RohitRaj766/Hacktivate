import React from "react";
import Navbar from "../components/common/Navbar";
import CitizenSidebar from "../components/dashboards/CitizenSidebar";
import { Outlet } from "react-router-dom";

const CitizenDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex pt-16">
        <div className="w-72 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto border-r border-gray-200">
          <CitizenSidebar />
        </div>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CitizenDashboard;
