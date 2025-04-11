import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CitizenDashboard from './pages/CitizenDashboard'
import GovernanceDashboard from './pages/GovernanceDashboard'
import PartyDashboard from './pages/PartyDashboard'
import ActiveProjects from './pages/Citizen/ActiveProjects'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Login/>
    </>
 
  )
}

export default App