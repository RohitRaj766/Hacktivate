import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import CitizenDashboard from './pages/CitizenDashboard';
import ActiveProjects from './pages/Citizen/ActiveProjects';
import Bills from './pages/Citizen/Bills';
import Forum from './pages/Citizen/Forum';
import OTPVerification from './pages/OtpVerification';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      <Route path="/dashboard" element={<CitizenDashboard />}>
        <Route index element={<ActiveProjects />} />
        <Route path="bills" element={<Bills />} />
        <Route path="forum" element={<Forum />} />
        {/* <Route path="raise-issue" element={<RaiseIssue />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
