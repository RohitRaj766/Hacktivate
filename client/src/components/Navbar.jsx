import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../actions/userActions'; // make sure this exists

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT from localStorage
    dispatch(logoutUser()); // Optional: Clear redux auth state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="fixed w-full top-0 inset-x-0 flex items-center justify-between px-8 py-5 shadow-md h-16 bg-white z-50">
      <div className="font-bold text-xl">LOGO</div>
      <div className="flex items-center gap-6">
        <div className="text-gray-600 mr-4">NAME | CITIZEN</div>
        <button
          onClick={handleLogout}
          className="px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
        >
          LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
