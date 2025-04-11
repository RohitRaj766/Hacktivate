import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, isLoading, error } = useSelector((state) => state.userauth);

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 tracking-wider">
          LOGIN
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={credentials.email}
            onChange={handleChange}
            required
            className="w-full h-12 px-4 bg-gray-50 rounded shadow-sm placeholder-gray-500 text-gray-700 tracking-wide focus:outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={credentials.password}
            onChange={handleChange}
            required
            className="w-full h-12 px-4 bg-gray-50 rounded shadow-sm placeholder-gray-500 text-gray-700 tracking-wide focus:outline-none"
          />

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white rounded shadow-md font-semibold tracking-widest transition-all ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Processing...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
