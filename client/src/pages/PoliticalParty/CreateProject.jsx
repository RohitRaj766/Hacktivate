import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    funds: '',
    startTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, funds, startTime } = formData;

    if (!name || !description || !funds || !startTime) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      // Replace this with your actual API endpoint
      const response = await fetch('http://localhost:5000/create-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to create project.');

      const result = await response.json();
      console.log('Project created:', result);
      toast.success('Project created successfully!');

      // Reset form
      setFormData({
        name: '',
        description: '',
        funds: '',
        startTime: '',
      });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while creating the project.');
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-10">Create a New Project</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-blue-500 shadow-lg rounded-xl p-8 max-w-5xl w-full mx-auto"
      >
        {/* Project Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-sm"
            placeholder="Enter project name"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm resize-none bg-blue-50"
            placeholder="Brief description of the project..."
          />
        </div>

        {/* Funds Allocated */}
        <div className="mb-6">
          <label htmlFor="funds" className="block text-sm font-semibold text-gray-700 mb-2">
            Funds Allocated (₹)
          </label>
          <input
            id="funds"
            name="funds"
            type="number"
            value={formData.funds}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-sm"
            placeholder="E.g. 500000"
          />
        </div>

        {/* Starting Time */}
        <div className="mb-8">
          <label htmlFor="startTime" className="block text-sm font-semibold text-gray-700 mb-2">
            Starting Time
          </label>
          <input
            id="startTime"
            name="startTime"
            type="datetime-local"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md"
          >
            Create Project
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default CreateProject;
