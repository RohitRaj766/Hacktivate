import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { signupRequest } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const SignupCitizen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    occupation: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const payload = {
      userType: 'citizen',
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      dateofbirth: formData.dob,
      occupation: formData.occupation,
      navigate,
    };

    setLoading(true);
    dispatch(signupRequest(payload));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05a987] to-[#003e4d] p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#05a987]">Citizen Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="input"
            />
            <input
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="input"
            />
          </div>

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="input"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="input"
            />
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="input"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
              className="input"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <input
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
            required
            className="input"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#05a987] hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>

      {/* Tailwind custom input class */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid #d1d5db;
            background-color: #f9fafb;
            transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          }

          .input:focus {
            outline: none;
            border-color: #05a987;
            box-shadow: 0 0 0 3px rgba(5, 169, 135, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default SignupCitizen;
