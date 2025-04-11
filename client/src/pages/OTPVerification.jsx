import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      email: email,
      otp: otp,
    };

    try {
      const res = await axios.post('http://localhost:5000/citizens/verify-otp', payload);
      toast.success('OTP verified successfully!');
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      const msg = err.response?.data?.error || 'OTP verification failed';
      toast.error(msg);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-yellow-100 to-blue-100">
      <div className="flex flex-col items-center w-full max-w-xl bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl text-blue-700 font-extrabold tracking-widest mb-8">
          OTP Verification
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="self-center w-full max-w-[150px] bg-yellow-500 h-12 rounded-md shadow-md text-white font-semibold tracking-wider hover:bg-yellow-600 hover:shadow-lg transition-all"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default OTPVerification;
