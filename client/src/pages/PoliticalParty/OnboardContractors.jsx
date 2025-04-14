import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateContractor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    licenseNumber: '',
    address: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, companyName, licenseNumber, address, description } = formData;
  
    if (!fullName || !email || !phone || !address) {
      toast.error('Please fill in all required fields.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/political/onboardcontractors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contractors: [formData] // ✅ Wrap formData in an array and key it as "contractors"
        }),
      });
  
      if (!response.ok) throw new Error('Failed to create contractor.');
  
      const result = await response.json();
      console.log('Contractor created:', result);
      toast.success('✅ Contractor created successfully!');
  
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        licenseNumber: '',
        address: '',
        description: '',
      });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while creating the contractor.');
    }
  };
  

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-10">Create a New Contractor</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-blue-500 shadow-lg rounded-xl p-8 max-w-4xl w-full mx-auto"
      >
        {/* Full Name */}
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="Enter full name"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="Contractor email"
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="Contact number"
          />
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="Optional"
          />
        </div>

        {/* License Number */}
        <div className="mb-6">
          <label htmlFor="licenseNumber" className="block text-sm font-semibold text-gray-700 mb-2">
            License Number
          </label>
          <input
            id="licenseNumber"
            name="licenseNumber"
            type="text"
            value={formData.licenseNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="Optional"
          />
        </div>

        {/* Address */}
        <div className="mb-6">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 bg-blue-50 text-sm"
            placeholder="Enter full address"
          />
        </div>

        {/* Description */}
        <div className="mb-8">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-4 bg-blue-50 text-sm resize-none"
            placeholder="Additional notes or description..."
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:from-blue-600 hover:to-indigo-700"
          >
            Create Contractor
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

export default CreateContractor;
