import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginCitizenRequest } from '../../redux/citizen/citizenActions';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginCitizen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginCitizenRequest({ credentials, navigate }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl p-10 shadow-xl animate-fadeIn max-w-md w-full">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6 tracking-wide">Citizen Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <MdEmail className="absolute left-3 top-3.5 text-green-400 text-xl" />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 shadow-inner focus:ring-2 focus:ring-green-300 outline-none"
            />
          </div>

          <div className="relative">
            <RiLockPasswordLine className="absolute left-3 top-3.5 text-green-400 text-xl" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full h-12 pl-10 pr-10 rounded-lg bg-gray-50 shadow-inner focus:ring-2 focus:ring-green-300 outline-none"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-green-400 text-xl cursor-pointer">
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <button type="submit" className="w-full h-12 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCitizen;
