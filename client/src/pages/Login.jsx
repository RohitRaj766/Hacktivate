import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../actions'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, isLoading, error } = useSelector(state => state.userauth)
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard') // Redirect to dashboard on successful login
//     }
//   }, [isAuthenticated, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginRequest(credentials))
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex justify-center items-center w-full my-5">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-4xl text-blue-700 font-bold font-primary tracking-widest truncate mb-6">
          LOGIN
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-start w-full max-w-md bg-white px-4 py-6 shadow rounded-md">
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={credentials.email}
            onChange={handleChange}
            className="w-full h-16 px-2 mt-3 mb-4 bg-gray-50 rounded shadow-sm placeholder:text-gray-500 placeholder:tracking-[4px] text-gray-600 tracking-[4px] font-primary text-lg focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={credentials.password}
            onChange={handleChange}
            className="w-full h-16 px-2 mt-3 mb-2 bg-gray-50 rounded shadow-sm placeholder:text-gray-500 placeholder:tracking-[4px] text-gray-600 tracking-[4px] font-primary text-lg focus:outline-none"
            required
          />

          {error && (
            <div className="w-full text-red-500 text-sm mb-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-yellow-500 h-10 rounded shadow-md text-gray-100 tracking-widest font-medium font-primary hover:bg-yellow-600 hover:shadow-lg transition-all mt-4 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Processing...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login