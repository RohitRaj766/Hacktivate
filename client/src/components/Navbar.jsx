import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userFromRedux = useSelector((state) => state.userauth.user);

  // Only read from localStorage if Redux has no user
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const user = userFromRedux || storedUser.LoggedInUser;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className="fixed w-full top-0 inset-x-0 flex items-center justify-between px-8 py-5 shadow-md h-16 bg-white z-50">
      <div className="font-bold text-xl">LOK MANCH</div>
      <div className="flex items-center gap-6">
        <div className="text-gray-600 mr-4">
          Hi, {user ? `${user.firstname} ${user.lastname}` : 'Loading...'}
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
