import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userauth.user);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    navigate('/login');
  };

  console.log(user);

  return (
    <nav className="fixed w-full top-0 inset-x-0 flex items-center justify-between px-8 py-5 shadow-md h-16 bg-white z-50">
      <div className="font-bold text-xl">LOGO</div>
      <div className="flex items-center gap-6">
        <div className="text-gray-600 mr-4">
         Hi, {user ? `${user?.firstname} ${user?.lastname}` : 'Loading...'}
        </div>
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
