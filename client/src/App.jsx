import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginCitizen from './components/auth/LoginCitizen';
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
import OnboardContractors from './pages/PoliticalParty/OnboardContractors';
import GovernanceDashboard from './pages/GovernanceDashboard'; // Election Commission Dashboard
// import ElectionProjects from './pages/ElectionCommission/ElectionProjects'; // Projects for Election Commission/?/
// import ManageParties from './pages/ElectionCommission/ManageParties'; // Manage political parties
// import ViewElections from './pages/ElectionCommission/ViewElections'; // View elections
import Landing from './components/Landing';
import LoginAdmin from './components/auth/LoginAdmin';
import LoginOfficer from './components/auth/LoginOfficer';
import SignupAdmin from './components/auth/SignupAdmin';
import SignupCitizen from './components/auth/SignupCitizen';
import SignupOfficer from './components/auth/SignupOfficer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/citizen/login" element={<LoginCitizen />} />
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/officer/login" element={<LoginOfficer />} />
      <Route path="/citizen/signup" element={<Signup />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/citizen/registration" element={<SignupCitizen />} />
      <Route path="/admin/registration" element={< SignupAdmin />} />
      <Route path="/officer/registration" element={<SignupOfficer />} />


      {/* Citizen Dashboard Routes */}
      <Route
        path="/citizen-dashboard"
        element={
          <ProtectedRoute role="citizen">
            <Chatbot />
            <CitizenDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<ActiveProjects />} />
        <Route path="bills" element={<Bills />} />
        <Route path="forum" element={<Forum />} />
        <Route path="raise-issue" element={<RaiseIssue />} />
      </Route>

      {/* Political Party Dashboard Routes */}
      <Route
        path="/political-dashboard"
        element={
          <ProtectedRoute role="political-party">
            <PoliticalPartyDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<ProjectList />} />
        <Route path="political-bills" element={<PoliticalPartyBills />} />
        <Route path="fund-management" element={<FundManagment />} />
        <Route path="create-project" element={<CreateProject />} />
        <Route path="onboard-contractors" element={<OnboardContractors />} />
      </Route>

      {/* Election Commission Dashboard Routes */}
      <Route
        path="/election-dashboard"
        element={
          <ProtectedRoute role="election-commission">
            <GovernanceDashboard />
          </ProtectedRoute>
        }
      >
        {/* <Route index element={<ElectionProjects />} /> */}
        {/* <Route path="manage-parties" element={<ManageParties />} /> */}
        {/* <Route path="view-elections" element={<ViewElections />} /> */}
      </Route>

      {/* Default Route (if the user is not logged in or tries to access an invalid route) */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
