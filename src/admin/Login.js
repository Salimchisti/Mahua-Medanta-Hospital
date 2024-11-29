import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimg from '../assets/images/loginimg.webp'; // Import image

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      // Set authentication status to true
      localStorage.setItem('isAuthenticated', 'true');
      console.log('Login successful, redirecting to admin dashboard...');
      navigate('/admin'); // Redirect to admin dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${loginimg})`, // Set the background image for the whole screen
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 w-full mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 w-full rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
