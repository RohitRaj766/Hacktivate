import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contractors = [
  { id: 1, name: 'ABC Infra Ltd.' },
  { id: 2, name: 'BuildRight Contractors' },
  { id: 3, name: 'GreenLine Constructions' },
  { id: 4, name: 'UrbanRise Engineers' },
];

const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sector: '',
    state: '',
    startDate: '',
    contractor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, sector, state, startDate, contractor } = formData;

    if (!name || !description || !sector || !state || !startDate || !contractor) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/political/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          description,
          sector,
          state,
          startDate,
          contractor,
        }),
      });

      if (!response.ok) throw new Error('Failed to create project.');

      const result = await response.json();
      console.log('Project created:', result);
      toast.success('🎉 Project created successfully!');

      setFormData({
        name: '',
        description: '',
        sector: '',
        state: '',
        startDate: '',
        contractor: '',
      });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while creating the project.');
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-10">Create a New Political Project</h1>

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
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
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
            className="w-full border border-gray-300 rounded-lg p-4 bg-blue-50 text-sm resize-none"
            placeholder="Brief description of the project..."
          />
        </div>

        {/* Sector */}
        <div className="mb-6">
          <label htmlFor="sector" className="block text-sm font-semibold text-gray-700 mb-2">
            Sector
          </label>
          <input
            id="sector"
            name="sector"
            type="text"
            value={formData.sector}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="e.g. Healthcare"
          />
        </div>

        {/* State */}
        <div className="mb-6">
          <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
            Status
          </label>
          <input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="e.g. In Progress, Completed"
          />
        </div>

        {/* Start Date */}
        <div className="mb-6">
          <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
            Start Date
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
          />
        </div>

        {/* Contractor Dropdown */}
        <div className="mb-8">
          <label htmlFor="contractor" className="block text-sm font-semibold text-gray-700 mb-2">
            Select Contractor
          </label>
          <select
            id="contractor"
            name="contractor"
            value={formData.contractor}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
          >
            <option value="">-- Choose Contractor --</option>
            {contractors.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:from-blue-600 hover:to-indigo-700"
          >
            Create Project
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default CreateProject;
