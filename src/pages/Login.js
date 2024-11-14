// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check for empty fields
    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    // Mock validation - In real-world, you'd call your authentication API here
    if (email === 'user@example.com' && password === 'password123') {
      navigate('/');  // Navigate to home page after successful login
    } else {
      setError('Invalid credentials');  // Display error for incorrect credentials
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-black">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
