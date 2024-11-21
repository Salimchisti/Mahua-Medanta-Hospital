import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import { motion } from 'framer-motion'; // Import motion from framer-motion
import img2 from '../assets/images/image2.jpg'; // Import img2 from your assets

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

  return (
    <div className="relative w-full overflow-hidden">
      {/* Container with a bigger height */}
      <div className="w-full h-[90vh] flex justify-center items-center">
        {/* Motion Image with transition effects */}
        <motion.img
          src={images[currentImage]}
          alt="Carousel"
          className="w-full h-full object-cover"
          key={currentImage} // Ensure the image transitions properly
          initial={{ opacity: 0, scale: 1.05 }} // Start with fade-out and slight scale
          animate={{ opacity: 1, scale: 1 }} // Fade in and reset scale
          exit={{ opacity: 0, scale: 1.05 }} // Fade-out with scale effect when changing
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth transition with ease-in-out
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

          {/* Show the options when 'Book an Appointment' is clicked */}
          <button
            onClick={() => setShowOptions(true)} // Inline function for the button click
            style={{ width: '200px' }}
            className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
          >
            Book Appointment
          </button>

          {showOptions && (
            <div className="mt-6 flex flex-col items-center">
              <button
                onClick={() => setShowOptions(false)}
                style={{ width: '200px' }}
                className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
              >
                Medicine Essentials
              </button>
              <button
                onClick={() => setShowOptions(false)}
                style={{ width: '200px' }}
                className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
              >
                Doctor Appointment
              </button>
              <button
                onClick={() => setShowOptions(false)}
                style={{ width: '200px' }}
                className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
              >
                Lab Test
              </button>
              <button
                onClick={() => setShowOptions(false)}
                style={{ width: '200px' }}
                className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
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
