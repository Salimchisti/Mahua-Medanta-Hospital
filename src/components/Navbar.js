import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";
import img from "../assets/images/LOGO1-removebg-preview.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="hidden sm:flex items-center space-x-6 h-16">
        <Link to="/" className="text-black hover:text-blue-500 transition-colors duration-300">
          Home
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <button className="text-black hover:text-blue-500 py-9 transition-colors duration-300">
            Services
          </button>
          <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
            <Link to="/LaparoscopyPage" className="block px-4 py-2 text-black hover:bg-blue-300">
              Laparoscopy
            </Link>
            <Link to="/Cardiology" className="block px-4 py-2 text-black hover:bg-blue-300">
              Cardiology
            </Link>
            <Link to="/Neurology" className="block px-4 py-2 text-black hover:bg-blue-300">
              Neurology
            </Link>
            <Link to="/Orthopaedics" className="block px-4 py-2 text-black hover:bg-blue-300">
              Orthopedics
            </Link>
            <Link to="/Specialities" className="block px-4 py-2 text-black hover:bg-blue-300">
              More Medical Services
            </Link>
          </div>
        </div>


        <Link to="/overview" className="text-black hover:text-blue-500 transition-colors duration-300">
          About Us
        </Link>
        <Link to="/HealthBlog" className="text-black hover:text-blue-500 transition-colors duration-300">
          Blog
        </Link>
        <Link to="/DirectorPage" className="text-black hover:text-blue-500 transition-colors duration-300">
          Carrier
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
          <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300">
            Home
          </Link>

          {/* Services Dropdown for Mobile */}
          <div className="relative group">
            <button className="block w-full text-left px-4 py-2 text-black hover:bg-blue-300">
              Services
            </button>
            <div className="pl-4">
              <Link to="/LaparoscopyPage" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300">
                Laparoscopy
              </Link>
              <Link to="/CardiologyPage" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300">
                Cardiology
              </Link>
              <Link to="/NeurologyPage" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300">
                Neurology
              </Link>
              <Link to="/OrthopedicsPage" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300">
                Orthopedics
              </Link>
            </div>
          </div>

          <Link to="/overview" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300">
            About Us
          </Link>
          <Link to="/HealthBlog" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300">
            Blog
          </Link>
          <Link to="/DirectorPage" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-blue-300 transition-colors duration-300">
            Carrier
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
              {/* Callback Form Fields */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-xl text-gray-600"
              >
                &times;
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
