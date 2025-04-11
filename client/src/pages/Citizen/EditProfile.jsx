import React, { useState } from 'react';
import { FaMars, FaVenus, FaGenderless } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    dob: '',
    occupation: '',
    gender: '',
  });

  const [loading, setLoading] = useState(false);

  // Simulate pre-filled data
  const existingData = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    dob: '1995-08-15',
    occupation: 'Engineer',
    gender: 'male',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Updated details:', formData);
      toast.success('Profile updated successfully!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center w-full my-0 px-4 bg-gradient-to-br from-blue-100 to-yellow-100 py-10">
      <div className="flex flex-col items-center w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl text-blue-700 font-bold tracking-widest mb-6">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              name="firstname"
              placeholder={existingData.firstname}
              value={formData.firstname}
              onChange={handleChange}
              className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
            />
            <input
              type="text"
              name="lastname"
              placeholder={existingData.lastname}
              value={formData.lastname}
              onChange={handleChange}
              className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder={existingData.email}
            value={formData.email}
            onChange={handleChange}
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full h-12 px-4 bg-gray-50 rounded-md shadow text-gray-700 text-lg focus:outline-blue-400"
          />

          <input
            type="text"
            name="occupation"
            placeholder={existingData.occupation}
            value={formData.occupation}
            onChange={handleChange}
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
          />

          <div className="w-full flex justify-between mt-2 mb-4">
            {[ 
              { label: 'Male', icon: <FaMars className="text-blue-600 text-lg" />, value: 'male' },
              { label: 'Female', icon: <FaVenus className="text-pink-600 text-lg" />, value: 'female' },
              { label: 'Other', icon: <FaGenderless className="text-purple-600 text-lg" />, value: 'other' },
            ].map(({ label, icon, value }) => (
              <label key={value} className="flex items-center space-x-2 cursor-pointer w-full justify-center">
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
            className="self-center w-full max-w-[180px] bg-yellow-500 h-12 rounded-md shadow-md text-white font-semibold tracking-wider hover:bg-yellow-600 hover:shadow-lg transition-all"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EditProfile;
