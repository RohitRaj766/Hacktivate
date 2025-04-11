import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaMars, FaVenus, FaGenderless } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    occupation: '',
    gender: '',
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    const payload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      dateofbirth: formData.dob,
      occupation: formData.occupation,
    };

    try {
      const res = await axios.post('http://localhost:5000/citizens/registration', payload);
      toast.success('Registration successful!');
      console.log(res.data);
      localStorage.setItem('userEmail', formData.email);
      navigate('/otp-verification');
    } catch (err) {
      const msg = err.response?.data?.error || 'Registration failed';
      toast.error(msg);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center w-full my-0 px-4 bg-gradient-to-br from-blue-100 to-yellow-100 py-10">
      <div className="flex flex-col items-center w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl text-blue-700 font-bold tracking-widest mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
              required
            />
            <span
              className="absolute right-4 top-4 text-gray-500 cursor-pointer text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
              required
            />
            <span
              className="absolute right-4 top-4 text-gray-500 cursor-pointer text-xl"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-gray-50 rounded-md shadow text-gray-700 text-lg focus:outline-blue-400"
            required
          />

          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
            required
          />

          <div className="w-full flex justify-between mt-2 mb-4">
            {[
              { label: 'Male', icon: <FaMars className="text-blue-600 text-lg" />, value: 'male' },
              { label: 'Female', icon: <FaVenus className="text-pink-600 text-lg" />, value: 'female' },
              { label: 'Other', icon: <FaGenderless className="text-purple-600 text-lg" />, value: 'other' },
            ].map(({ label, icon, value }) => (
              <label
                key={value}
                className="flex items-center space-x-2 cursor-pointer w-full justify-center"
              >
                <input
                  type="radio"
                  name="gender"
                  value={value}
                  checked={formData.gender === value}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                {icon}
                <span className="text-gray-700 tracking-[4px] text-sm">{label}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="self-center w-full max-w-[150px] bg-yellow-500 h-12 rounded-md shadow-md text-white font-semibold tracking-wider hover:bg-yellow-600 hover:shadow-lg transition-all"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        {/* Navigation to login page */}
        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;
