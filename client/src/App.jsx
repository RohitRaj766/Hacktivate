import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import CitizenDashboard from './pages/CitizenDashboard';
import ActiveProjects from './pages/Citizen/ActiveProjects';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<CitizenDashboard />}>
        <Route index element={<ActiveProjects />} />
        {/* Other nested routes can go here */}
      </Route>
    </Routes>
  );
};

export default App;
