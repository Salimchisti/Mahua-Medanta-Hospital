import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import img2 from '../assets/images/image2.jpg';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const images = [img2];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full h-[90vh] flex justify-center items-center">
        <motion.img
          src={images[currentImage]}
          alt="Carousel"
          className="w-full h-full object-cover"
          key={currentImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
        <div className="text-white p-6 rounded-lg">
          <p className="mt-4 text-lg md:text-xl font-semibold text-center">
            Your trusted 24/7 healthcare provider located at Mahua Vishnu Chowk
          </p>
          <p className="mt-2 text-sm md:text-base text-center">
            Led by Dr. MD Anwar, offering expert care for all your medical needs.
          </p>

          <button
            onClick={() => setShowOptions(!showOptions)}
            style={{ width: '200px' }}
            className="mb-2 mt-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
          >
            Book Appointment
          </button>

          {showOptions && (
            <div className="mt-2 flex flex-col items-center">
              <button
                onClick={() => navigate('/MedicineEssentials')}
                style={{ width: '200px' }}
                className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
              >
                Medicine Essentials
              </button>
              <button
                onClick={() => navigate('/DoctorAppointment')}
                style={{ width: '200px' }}
                className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
              >
                Doctor Appointment
              </button>
              <button
                onClick={() => navigate('/LabTestBooking')}
                style={{ width: '200px' }}
                className="mb-2 px-4 py-2 text-white bg-blue rounded-lg hover:bg-primary"
              >
                Lab Test
              </button>
              <button
                onClick={() => navigate('/InsurancePlans')}
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
