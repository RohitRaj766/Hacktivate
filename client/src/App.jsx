import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CitizenDashboard from './pages/CitizenDashboard'
import GovernanceDashboard from './pages/GovernanceDashboard'
import PartyDashboard from './pages/PartyDashboard'
import ActiveProjects from './pages/Citizen/ActiveProjects'
import Login from './pages/Login'

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<CitizenDashboard />}>
    //       <Route index element={<ActiveProjects />} />
    //       <Route path="active-projects" element={<ActiveProjects />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <>
    <Login/>
    <CitizenDashboard/>
    <PartyDashboard/>
    <GovernanceDashboard/>
    <ActiveProjects/>

    </>
 
  )
}

export default App