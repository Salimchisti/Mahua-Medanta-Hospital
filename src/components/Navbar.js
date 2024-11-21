import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import img from "../assets/images/LOGO1-removebg-preview.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    aadhar: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Callback request submitted");
    setIsModalOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between p-4 bg-white text-black shadow-lg">
      {/* Logo and Hospital Name */}
      <div className="flex items-center space-x-2">
        <img src={img} alt="Logo" className="w-10 h-10" />
        <h1 className="text-lg sm:text-2xl font-bold tracking-tight">
          MAHUA MEDANTA HOSPITAL
        </h1>
      </div>

      {/* Links for larger screens */}
      <div className="hidden sm:flex items-center space-x-6">
        <Link
          to="/LaparoscopyPage"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          Laparoscopy
        </Link>
        <Link
          to="/overview"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          About Us
        </Link>
        <Link
          to="/DirectorPage"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          Meet Our Director
        </Link>
        <Link
          to="/appointment"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
          Book an Appointment
        </Link>
        <Link
          to="/HealthBlog"
          className="text-black hover:text-blue-500 transition-colors duration-300"
        >
         Blog
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-300 flex items-center"
        >
          <MdPhoneInTalk className="mr-2 text-xl" />
          Request a Callback
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden focus:outline-none text-black text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 sm:hidden">
          <Link
            to="/LaparoscopyPage"
            onClick={closeMenu}
            className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300"
          >
            Laparoscopy
          </Link>
          <Link
            to="/overview"
            onClick={closeMenu}
            className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/DirectorPage"
            onClick={closeMenu}
            className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300"
          >
            Meet Our Director
          </Link>
          <Link
            to="/appointment"
            onClick={closeMenu}
            className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300"
          >
            Book an Appointment
          </Link>
          <Link
            to="/HealthBlog"
            onClick={closeMenu}
            className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300"
          >
            Blog
          </Link>
          <button
            onClick={() => {
              setIsModalOpen(true);
              closeMenu();
            }}
            className="block w-full px-4 py-2 bg-blue-300 text-black hover:bg-blue-500 transition-colors duration-300 flex items-center"
          >
            <MdPhoneInTalk className="mr-2 text-xl" />
            Request a Callback
          </button>
        </div>
      )}

      {/* Modal for Callback Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Request a Callback
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
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
                <label htmlFor="aadhar" className="block text-gray-700">
                  Aadhar Number
                </label>
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
                <label htmlFor="mobile" className="block text-gray-700">
                  Mobile Number
                </label>
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
                <label htmlFor="email" className="block text-gray-700">
                  Email ID
                </label>
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
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition-colors duration-300"
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
