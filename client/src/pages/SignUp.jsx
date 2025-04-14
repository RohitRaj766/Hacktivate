// Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { signupRequest } from '../redux/actions/userActions'; // adjust this path
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
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
      navigate,
    };

    setLoading(true);
    dispatch(signupRequest(payload));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
      <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default Signup;
