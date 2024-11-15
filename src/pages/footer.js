import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Copyright Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2024 Mahua Medanta Hospital | All Rights Reserved</p>
        </div>
        
        {/* Contact Information */}
        <div className="text-center md:text-left">
          <p className="text-sm">Contact us: <a href="tel:+919876543210" className="hover:underline">+91 9934209796</a></p>
          <p className="text-sm">Email: <a href="mailto:contact@mahuamedanta.com" className="hover:underline">mahuamedantahospital@gmail.com</a></p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
        
        {/* Links Section */}
        <div className="text-center md:text-left text-sm space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          <a href="/faq" className="hover:underline">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
