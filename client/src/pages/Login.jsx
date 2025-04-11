import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginRequest } from '../actions/userActions';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, isLoading, error } = useSelector((state) => state.userauth);

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(credentials));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-yellow-100 px-4">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8 tracking-widest">
          LOGIN
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400 text-xl">
              <MdEmail />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full h-12 pl-10 pr-4 bg-gray-50 rounded-lg shadow-inner placeholder-gray-500 text-gray-700 tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-3.5 text-gray-400 text-xl">
              <RiLockPasswordLine />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full h-12 pl-10 pr-10 bg-gray-50 rounded-lg shadow-inner placeholder-gray-500 text-gray-700 tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400 cursor-pointer text-xl"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md font-semibold tracking-widest transition-all ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Processing...' : 'LOGIN'}
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{' '}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
