import React from 'react';
import img from '../assets/images/istockphoto-1338889633-612x612.jpg'; // Add your image path here

const HeroPage = () => {
  return (
    <section className="hero-section bg-gradient-to-r from-red-500 to-red-100 text-black py-12 relative flex items-center justify-between">
      {/* Left content */}
      <div className="max-w-3xl mx-auto space-y-4 text-center px-6 md:text-left flex-1"> {/* Aligned left */}
        {/* Main Title */}
        <h2 className="text-4xl font-extrabold text-center text-black md:text-5xl leading-tight mb-4">
          MAHUA MEDANTA HOSPITAL
        </h2>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
            Your trusted 24/7 healthcare provider located at Mahua Vishnu Chowk. <br />
            We are committed to offering expert and compassionate care, ensuring your health is in the best hands.
          </p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Led by Dr. MD Anwar, offering a range of specialized medical services with the highest standards of care.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img src={img} alt="Exterior view of Mahua Medanta Hospital" className="max-w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default HeroPage;
