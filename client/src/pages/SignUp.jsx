import React from 'react'
import { FaMale, FaFemale, FaGenderless } from 'react-icons/fa'

const Signup = () => {
  return (
    <div className="flex justify-center items-center w-full my-5 px-4">
      <div className="flex flex-col items-center w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
        
        <h1 className="text-4xl text-blue-700 font-bold tracking-widest mb-6">
          Sign Up
        </h1>

        <form className="h-[450px] overflow-y-auto w-full flex flex-col gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
            />
            <span className="absolute right-4 top-4 text-gray-400 cursor-pointer">
              👁
            </span>
          </div>

          <input
            type="date"
            className="w-full h-12 px-4 bg-gray-50 rounded-md shadow text-gray-700 text-lg focus:outline-blue-400"
          />

       
{/* Gender Section - With Unicode Symbols */}
<div className="w-full mt-2 mb-4">
  <label className="block mb-1 text-gray-700 font-medium tracking-widest text-sm">
    GENDER
  </label>
  <div className="flex gap-6 items-center">
    {[
      { label: 'Male', symbol: '♂', color: 'text-blue-600' },
      { label: 'Female', symbol: '♀', color: 'text-pink-600' },
      { label: 'Other', symbol: '⚧', color: 'text-purple-600' },
    ].map(({ label, symbol, color }) => (
      <label key={label} className="flex items-center space-x-2 cursor-pointer">
        <input 
          type="radio" 
          name="gender"
          value={label.toLowerCase()}
          className="accent-blue-500"
        />
        <span className={text-xl ${color}}>{symbol}</span>
        <span className="text-gray-700 tracking-[4px] text-sm">
          {label}
        </span>
      </label>
    ))}
  </div>
</div>

          <input
            type="text"
            placeholder="Occupation"
            className="w-full h-14 px-4 bg-gray-50 rounded-md shadow placeholder:text-gray-400 text-gray-700 text-lg focus:outline-blue-400"
          />

          <button
            type="submit"
            className="self-center w-full max-w-[150px] bg-yellow-500 h-12 rounded-md shadow-md text-white font-semibold tracking-wider hover:bg-yellow-600 hover:shadow-lg transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup