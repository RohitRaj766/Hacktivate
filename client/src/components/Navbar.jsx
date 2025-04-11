import React from 'react'
import logo from '../assets/logo.png' // adjust the path if needed

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 inset-x-0 flex items-center justify-between px-8 py-5 shadow-md h-16 bg-white z-50">
        <div>
            <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div className="flex items-center gap-6">
            <div className="text-gray-600 mr-4">Preet Singh (Citizen)</div>
            <button className="px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm">
                LOGOUT
            </button>
        </div>
    </nav>
  )
}

export default Navbar
