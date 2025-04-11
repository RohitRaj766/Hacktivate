// Updated Navbar.js (no changes needed)
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 inset-x-0 flex items-center justify-between px-8 py-5 shadow-md h-16 bg-white z-50">
        <div className="font-bold text-xl">LOGO</div>
        <div className="flex items-center gap-6">
            <div className="text-gray-600 mr-4">NAME | CITIZEN</div>
            <button className="px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm">
                LOGOUT
            </button>
        </div>
    </nav>
  )
}

export default Navbar
