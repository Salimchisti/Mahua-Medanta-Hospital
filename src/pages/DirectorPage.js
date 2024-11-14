import React from 'react';
import directorImage from '../assets/images/director.jpg'; // Correct import

const DirectorPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet Our Director</h2>

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        {/* Director Image */}
        <div className="w-[250px] h-[350px] md:w-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg mb-6 md:mb-0 md:ml-8">
          <img 
            src={directorImage} 
            alt="Dr. Mohammad Anwar" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Director Details */}
        <div className="text-center md:text-left md:max-w-[500px]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Dr. Mohammad Anwar</h3>
          <p className="text-lg text-gray-600 mb-4">Founder & Director | Mahua Medanta Hospital</p>
          <p className="text-gray-700 text-base mb-4">
            Dr. Mohammad Anwar is a seasoned medical professional with over 20 years of experience in the healthcare industry.
            As the Founder and Director of Mahua Medanta Hospital, he has been instrumental in establishing a state-of-the-art healthcare facility that serves the community with utmost care and expertise.
          </p>
          <p className="text-gray-600 text-sm italic">
            "Our mission is to provide compassionate, patient-centered care with the highest standards of medical excellence."
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorPage;
