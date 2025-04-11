import React from 'react'

const Signup = () => {
  return (
    <div className="flex justify-center items-center w-full my-5">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-2xl text-blue-700 font-bold font-primary tracking-wide truncate">
          SIGNUP
        </h1>

        <div className="h-[400px] overflow-y-auto overflow-x-hidden flex flex-col w-full mt-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <form className="flex flex-col items-start w-full">
            {/* Full Name */}
            <input
              type="text"
              placeholder="FULL NAME"
              className="w-[95%] h-16 px-2 mt-3 mb-4 bg-gray-50 rounded shadow-sm placeholder:text-gray-500 placeholder:tracking-[4px] text-gray-600 tracking-[4px] font-primary text-lg focus:outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="EMAIL"
              className="w-[95%] h-16 px-2 mt-3 mb-4 bg-gray-50 rounded shadow-sm placeholder:text-gray-500 placeholder:tracking-[4px] text-gray-600 tracking-[4px] font-primary text-lg focus:outline-none"
            />

            {/* Password Section */}
            <div className="passwordField relative w-full">
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-[95%] h-16 px-2 mt-3 mb-4 bg-gray-50 rounded shadow-sm placeholder:text-gray-500 placeholder:tracking-[4px] text-gray-600 tracking-[4px] font-primary text-lg focus:outline-none"
              />
              <span className="passwordToggleIcon absolute right-3 top-[52px] text-gray-500 cursor-pointer">
                👁️
              </span>
            </div>

            {/* Small Inputs Row */}
            <div className="smallForm flex justify-between w-full">
              <input
                type="date"
                className="smallInputField w-[46%] h-12 pl-2 mt-3 mb-4 mr-5 bg-gray-50 rounded shadow-sm placeholder:text-gray-500 placeholder:tracking-[4px] text-gray-600 tracking-[4px] font-primary text-lg focus:outline-none"
              />
              
              <div className="flex gap-4 items-center w-[46%] mt-3">
                {['Male', 'Female', 'Other'].map((gender) => (
                  <label key={gender} className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="gender"
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 tracking-[4px]">{gender}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Occupation */}
            <input
              type="text"
              placeholder="OCCUPATION"
              className="w-[95%] h-16 px-2 mt-3 mb-4 bg-gray-50 rounded shadow-sm placeholder:text-gray-500 placeholder:tracking-[4px] text-gray-600 tracking-[4px] font-primary text-lg focus:outline-none"
            />

            <button
              type="submit"
              className="w-full max-w-36 bg-yellow-500 h-10 rounded shadow-md text-gray-100 tracking-widest font-medium font-primary hover:bg-yellow-600 hover:shadow-lg transition-all mt-4"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup