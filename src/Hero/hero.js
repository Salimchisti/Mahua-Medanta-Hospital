import React, { useState, useEffect } from 'react';
import img2 from '../assets/images/image2.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showOptions, setShowOptions] = useState(false); // To control visibility of the options
  const images = [img2]; // Array of image paths

  // Automatically change the image every 5 seconds (if you have more than one image)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]); // Add images.length as a dependency

  const handleBookAppointment = () => {
    setShowOptions(true); // Show the options when the button is clicked
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Container with a bigger height */}
      <div className="w-full h-[90vh] flex justify-center items-center">
        {/* Carousel Image with adjusted size */}
        <img
          src={images[currentImage]}
          alt="Carousel"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>



      {/* Overlay for Text */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
        <div className="text-white p-6 rounded-lg">
          <p className="mt-4 text-lg md:text-xl font-semibold text-center">
            Your trusted 24/7 healthcare provider located at Mahua Vishnu Chowk
          </p>
          <p className="mt-2 text-sm md:text-base text-center">
            Led by Dr. MD Anwar, offering expert care for all your medical needs.
          </p>

          <button
            onClick={handleBookAppointment}
            className="mt-6 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none transition-colors duration-300"
          >
            Book an Appointment
          </button>

          {/* Show the options when 'Book an Appointment' is clicked */}
          {showOptions && (
            <div className="mt-6">
              <button
                onClick={() => setShowOptions(false)} // Optional: hide options after selecting
                className="w-full mb-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Medicine Essentials
              </button>
              <button
                onClick={() => setShowOptions(false)} // Optional: hide options after selecting
                className="w-full mb-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Doctor Appointment
              </button>
              <button
                onClick={() => setShowOptions(false)} // Optional: hide options after selecting
                className="w-full mb-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Lab Test
              </button>
              <button
                onClick={() => setShowOptions(false)} // Optional: hide options after selecting
                className="w-full mb-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Insurance
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
