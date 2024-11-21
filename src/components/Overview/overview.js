// src/components/overview.js
import React from 'react';

const Overview = () => {
  return (
    <div className="p-4 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center py-16 bg-green-600 text-white rounded-lg">
        <h1 className="text-4xl font-extrabold">Welcome to Mahua Medanta Hospital</h1>
        <p className="mt-4 text-xl font-semibold">Your Trusted Partner in Healthcare, Offering 24/7 Medical Services</p>
      </div>

      {/* Introduction Section */}
      <div className="mt-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800">Our Commitment to Your Health</h2>
        <p className="mt-4 text-lg text-gray-700">
          At Mahua Medanta Hospital, we provide top-notch healthcare services with a focus on patient care, safety, and well-being.
          Our dedicated team of professionals ensures that each patient receives personalized care tailored to their unique needs.
        </p>
      </div>

      {/* Core Services Highlight */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-green-800">Our Core Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-all">
            <h4 className="text-xl font-semibold text-green-600">Emergency Care</h4>
            <p className="mt-2 text-gray-700">Available 24/7 for urgent care and critical situations.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-all">
            <h4 className="text-xl font-semibold text-green-600">Surgical Services</h4>
            <p className="mt-2 text-gray-700">State-of-the-art surgical procedures performed by expert surgeons.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-all">
            <h4 className="text-xl font-semibold text-green-600">Pediatric Care</h4>
            <p className="mt-2 text-gray-700">Caring for children with a focus on comfort and well-being.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-all">
            <h4 className="text-xl font-semibold text-green-600">Maternity Services</h4>
            <p className="mt-2 text-gray-700">Comprehensive care for mothers, newborns, and families.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-800">
          Ready to receive high-quality healthcare? Get in touch with us to book an appointment or to speak with a specialist.
        </p>
        <a
          href="/appointment"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Overview;
