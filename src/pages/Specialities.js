import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Layout from '../components/Layout';
import burnImage from '../assets/images/burn.jpg';  
import poisonImage from '../assets/images/toxic.jpg';
import gynecologyImage from '../assets/images/gynecology.jpg';
import fractureImage from '../assets/images/Fracture.jpg';
import traumaImage from '../assets/images/traumatic.jpg';
import emergencyImage from '../assets/images/EmergencyR.jpg';
import pediatricImage from '../assets/images/pediatricImage.jpg';
import surgeryImage from '../assets/images/Surgery.jpg';
import medicineImage from '../assets/images/medicineImage.jpg';
import criticalCareImage from '../assets/images/criticalCareImage.jpg';

const specialties = [
  { name: 'Burn Treatment', image: burnImage, description: 'Comprehensive care for burn injuries' },
  { name: 'Poisoning and Toxicology', image: poisonImage, description: 'Emergency treatment for poisoning cases' },
  { name: 'Gynecology, Obstetrics, and Maternity', image: gynecologyImage, description: 'Specialized care for women\'s health' },
  { name: 'Fracture Management', image: fractureImage, description: 'Advanced bone fracture care' },
  { name: 'Trauma and Injury Care', image: traumaImage, description: 'Emergency care for injuries' },
  { name: 'Emergency Response', image: emergencyImage, description: 'Immediate medical care during emergencies' },
  { name: 'Pediatric Care', image: pediatricImage, description: 'Expert care for children\'s health' },
  { name: 'General Surgery', image: surgeryImage, description: 'Surgical care for various conditions' },
  { name: 'Internal Medicine', image: medicineImage, description: 'Comprehensive internal health care' },
  { name: 'Critical Care Units', image: criticalCareImage, description: 'Care for critically ill patients' },
];

const Specialities = () => (
  <Layout>
    <section className="min-h-screen flex flex-col justify-center items-center">
      {/* Heading Section */}
      <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-10 w-full">
        <h2 className="text-3xl font-bold text-white text-center">Our 24/7 Medical Services</h2>
        <p className="mt-4 text-xl text-white text-center">
          Comprehensive medical care for every situation, available at any hour.
        </p>
      </div>

      {/* Specialties Grid */}
      <div className="text-center mb-8 w-full">
        <h3 className="text-3xl font-bold text-white mb-6">Our Specialities:</h3>
      </div>

      {/* Container for grid of specialties */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.7, // Slower delay between each card's animation (0.7s)
            },
          },
        }}
      >
        {/* Map through specialties */}
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.name}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and slide from below
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{
              type: 'spring',  // Spring-based transition for smoothness
              stiffness: 120,  // Reduced stiffness for a slower effect
              damping: 35,     // Increased damping for smoother deceleration
              duration: 1.2,   // Increased duration for slower animation speed
              delay: index * 0.4, // Sequential delay based on the card's index (e.g., 0, 0.4, 0.8, ...)
            }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the card is visible while scrolling
          >
            {/* Card with Hover Effect */}
            <button
              className="w-full h-52 bg-cover bg-center bg-no-repeat transform transition-transform duration-300 hover:scale-110"
              style={{ backgroundImage: `url(${specialty.image})`, objectFit: 'contain' }}
            ></button>

            {/* Specialty Name and Description */}
            <div className="bg-white p-3 text-center">
              <h4 className="font-semibold text-sm text-gray-800">{specialty.name}</h4>
              <p className="text-xs text-gray-600 mt-2">{specialty.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  </Layout>
);

export default Specialities;
