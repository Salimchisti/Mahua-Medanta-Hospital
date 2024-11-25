import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left p-5">

        {/* MediCare Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Mahua Medanta Hospital</h2>
          <p className="text-sm mb-4">Providing quality healthcare services</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100045598476727" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/overview" className="hover:underline">About Us</a></li>
            <li><a href="/Doctors" className="hover:underline">Medical Experts</a></li>
            <li><a href="/health-blog" className="hover:underline">Blog</a></li>
            <li><a href="/appointment" className="hover:underline">Carrier</a></li>

          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm">📞 <a href="tel:+919876543210" className="hover:underline">+91 73197 99463</a></p>
          <p className="text-sm">📧 <a href="mailto:info@healthcare.com" className="hover:underline">mahuamedantahospital@gmail.com</a></p>
          <p className="text-sm">📍 Patel Bhavan Vishnu Chauk, Mahua</p>
        </div>

        {/* Disclaimer Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
          <p className="text-sm">
            The information provided on this website is for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website. 
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-white text-center text-sm pt-4">
        &copy; 2024 Mahua Medanta hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
