import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginOfficerRequest } from '../../redux/officer/officerActions';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginOfficer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginOfficerRequest({ credentials, navigate }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-400 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-2xl p-10 animate-slideInLeft max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-6">Officer Portal</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <MdEmail className="absolute left-3 top-3.5 text-blue-400 text-xl" />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="relative">
            <RiLockPasswordLine className="absolute left-3 top-3.5 text-blue-400 text-xl" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full h-12 pl-10 pr-10 bg-gray-50 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-300"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-blue-400 text-xl cursor-pointer">
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <button type="submit" className="w-full h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginOfficer;
