import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RaiseIssue = () => {
  const [issueText, setIssueText] = useState('');
  const [party, setParty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!issueText || !party) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/citizens/raise-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          issueText: issueText,
          party: party,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit issue.');
      }

      const result = await response.json();
      console.log('Issue submitted:', result);
      toast.success('Issue submitted successfully!');
      setIssueText('');
      setParty('');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while submitting the issue.');
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-10">Raise an Issue</h1>

      <form 
        onSubmit={handleSubmit}
        className="bg-white border-2 border-blue-500 shadow-lg rounded-xl p-8 max-w-5xl w-full mx-auto"
      >
        <div className="mb-6">
          <label htmlFor="issueText" className="block text-sm font-semibold text-gray-700 mb-2">
            Describe Your Issue
          </label>
          <textarea
            id="issueText"
            value={issueText}
            onChange={(e) => setIssueText(e.target.value)}
            rows="6"
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm resize-none bg-blue-50"
            placeholder="Clearly explain the issue you want to raise..."
          />
        </div>

        <div className="mb-8">
          <label htmlFor="party" className="block text-sm font-semibold text-gray-700 mb-2">
            Addressed To
          </label>
          <div className="w-52">
            <select
              id="party"
              value={party}
              onChange={(e) => setParty(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
            >
              <option value="" disabled>Select party</option>
              <option value="Congress">Congress</option>
              <option value="BJP">BJP</option>
              <option value="AAP">AAP</option>
              <option value="CPI">CPI</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md"
          >
            Submit Issue
          </button>
        </div>
      </form>
      
      <ToastContainer />
    </div>
  );
};

export default RaiseIssue;
