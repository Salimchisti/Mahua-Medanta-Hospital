import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import img from '../assets/images/istockphoto-1338889633-612x612.jpg'; // Add your image path here

const HeroPage = () => {
  return (
    <section className="hero-section bg-secondary text-black py-12 relative flex items-center justify-between">
      {/* Left content with scroll motion */}
      <motion.div
        className="max-w-3xl mx-auto space-y-4 text-center px-6 md:text-left flex-1"
        initial={{ opacity: 0, x: -100 }}  // Start off-screen to the left
        whileInView={{ opacity: 1, x: 0 }}  // Animate to full opacity and move to position
        transition={{ duration: 1.5 }}  // Duration for the motion effect
        viewport={{ once: true }}  // Trigger animation only once when it comes into view
      >
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
      </motion.div>

      {/* Right Image with scroll motion */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 0.8 }}  // Start with small scale and invisible
        whileInView={{ opacity: 1, scale: 1 }}  // Animate to full opacity and scale up
        transition={{ duration: 1.5 }}  // Duration for the image animation
        viewport={{ once: true }}  // Trigger animation only once when it comes into view
      >
        <img src={img} alt="Exterior view of Mahua Medanta Hospital" className="max-w-full h-auto object-cover" />
      </motion.div>
    </section>
  );
};

export default HeroPage;
