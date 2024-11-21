import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Link } from 'react-router-dom'; // Import Link for navigation
import heropage from '../assets/images/heropage.png';

const HeroPage = () => {
  return (
    <section className="hero-section text-black py-12 flex items-center justify-between space-x-6">
      {/* Left content with image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and move to position
        transition={{ duration: 1.5 }} // Duration for the motion effect
        viewport={{ once: true }} // Trigger animation only once when it comes into view
      >
        <motion.img
          src={heropage} // Provide your image path here
          alt="Hospital Image"
          className="max-w-xs h-auto object-cover rounded-lg" // Reduced size with max-w-xs
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Center content with details */}
      <motion.div
        className="flex-1 text-center px-6"
        initial={{ opacity: 0, y: 50 }} // Start below screen
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and move to position
        transition={{ duration: 1.5 }} // Duration for the motion effect
        viewport={{ once: true }} // Trigger animation only once when it comes into view
      >
        <h2 className="text-4xl font-extrabold text-black md:text-5xl leading-tight mb-4">
          MAHUA MEDANTA HOSPITAL
        </h2>

        <div className="space-y-4">
          <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
            Your trusted 24/7 healthcare provider located at Mahua Vishnu Chowk. <br />
            We are committed to offering expert and compassionate care, ensuring your health is in the best hands.
          </p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Led by Dr. MD Anwar, offering a range of specialized medical services with the highest standards of care.
          </p>
        </div>
      </motion.div>

      {/* Right content with buttons */}
      <motion.div
        className="flex-1 max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4"
        initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
        whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and move to position
        transition={{ duration: 1.5 }} // Duration for the motion effect
        viewport={{ once: true }} // Trigger animation only once when it comes into view
      >
        <h3 className="text-2xl font-semibold text-center text-black mb-6">Explore Our Services</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Button 1 - General Consultation */}
          <Link to="/GeneralSurgery">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
            >
              General Consultation
            </motion.button>
          </Link>

          {/* Button 2 - Emergency Care */}
          <Link to="/EmergencyCarePage">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none transition duration-300"
            >
              Emergency Care
            </motion.button>
          </Link>

          {/* Button 3 - Speciality Services */}
          <Link to="/Specialities">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none transition duration-300"
            >
              Speciality Services
            </motion.button>
          </Link>

          {/* Button 4 - Book Appointment */}
          <Link to="/appointment">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none transition duration-300"
            >
              Book Appointment
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroPage;
