import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import CitizenDashboard from './pages/CitizenDashboard';
import ActiveProjects from './pages/Citizen/ActiveProjects';
import Bills from './pages/citizen/Bills';
import Forum from './pages/Citizen/Forum';
import ProtectedRoute from './components/ProtectedRoute';
import RaiseIssue from './pages/citizen/RaiseIssue';
import PoliticalPartyDashboard from './pages/PoliticalPartyDashboard';
import OTPVerification from './pages/OtpVerification';
import ProjectList from './pages/PoliticalParty/ProjectList';
import PoliticalPartyBills from './pages/PoliticalParty/PoliticalPartyBills';
import FundManagment from './pages/PoliticalParty/FundManagment';
import CreateProject from './pages/PoliticalParty/CreateProject';
import Chatbot from './chatbot/Chatbot';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
     
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Chatbot/>
            <CitizenDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<ActiveProjects />} />
        <Route path="bills" element={<Bills />} />
        <Route path="forum" element={<Forum />} />
        <Route path="raise-issue" element={<RaiseIssue />} />
      </Route>

      <Route path="/political-dashboard" element={<PoliticalPartyDashboard />}>
        <Route index element={<ProjectList />} />
        <Route path="political-bills" element={<PoliticalPartyBills />} />
        <Route path="fund-management" element={<FundManagment />} />
        <Route path="create-project" element={<CreateProject />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
