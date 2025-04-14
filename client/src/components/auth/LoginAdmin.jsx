import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginAdminRequest } from '../../redux/admin/adminActions';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginAdminRequest({ credentials, navigate }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-400 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl p-10 shadow-2xl animate-scaleIn max-w-md w-full">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6 tracking-wider">Admin Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <MdEmail className="absolute left-3 top-3.5 text-red-400 text-xl" />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 shadow-inner focus:ring-2 focus:ring-red-300 outline-none"
            />
          </div>

          <div className="relative">
            <RiLockPasswordLine className="absolute left-3 top-3.5 text-red-400 text-xl" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full h-12 pl-10 pr-10 rounded-lg bg-gray-50 shadow-inner focus:ring-2 focus:ring-red-300 outline-none"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-red-400 text-xl cursor-pointer">
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <button type="submit" className="w-full h-12 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
