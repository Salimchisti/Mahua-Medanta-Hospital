import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPhoneInTalk } from 'react-icons/md';
import img from '../assets/images/Caduceus.png';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Callback request submitted');
    setIsModalOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between p-4 bg-secondary text-black shadow-lg">
      <div className="flex items-center space-x-2">
        <img src={img} alt="Caduceus Icon" className="w-10 h-10" />
        <h1 className="text-lg sm:text-2xl font-bold tracking-tight">MAHUA MEDANTA HOSPITAL</h1>
      </div>

      {/* Hamburger icon for mobile, moved to the right */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden focus:outline-none text-white text-2xl ml-auto"
      >
        ☰
      </button>

      {/* Menu Links for larger screens */}
      <div className={`flex-col sm:flex-row sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 absolute top-16 left-0 w-full sm:w-auto bg-transparent sm:bg-transparent sm:static z-50`}>
        {/* Laparoscopy Link */}
        <Link to="/LaparoscopyPage">
          <button className="px-4 sm:px-6 py-2 text-white hover:bg-blue-600 focus:outline-none transition-colors duration-300">
            Laparoscopy
          </button>
        </Link>

        {/* Overview Link */}
        <Link to="/overview">
          <button className="px-4 sm:px-6 py-2 text-white hover:bg-blue-600 focus:outline-none transition-colors duration-300">
            Overview
          </button>
        </Link>

        {/* Director Link */}
        <Link to="/DirectorPage">
          <button className="px-4 sm:px-6 py-2 text-white hover:bg-blue-600 focus:outline-none transition-colors duration-300">
            Meet Our Director
          </button>
        </Link>

        {/* Request a Callback */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 sm:px-6 py-2 text-white hover:bg-blue-600 focus:outline-none transition-colors duration-300 flex items-center"
        >
          <MdPhoneInTalk className="mr-2 text-xl" />
          Request a Callback
        </button>
      </div>

      {/* Modal for Callback Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Request a Callback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 border-2 border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="aadhar" className="block text-gray-700">Aadhar Number</label>
                <input
                  type="text"
                  id="aadhar"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                  placeholder="Enter your Aadhar number"
                  className="w-full p-3 border-2 border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full p-3 border-2 border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 border-2 border-gray-300 rounded-md text-black"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-black rounded-lg hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-xl text-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
