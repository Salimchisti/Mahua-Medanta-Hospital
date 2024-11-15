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
    <section className="min-h-screen flex flex-col justify-center items-center p-8">
      {/* Heading Section */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg mb-12 w-full max-w-4xl mx-auto text-center shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-800">Our 24/7 Medical Services</h2>
        <p className="mt-4 text-xl text-gray-600">
          Comprehensive medical care for every situation, available at any hour.
        </p>
      </div>

      {/* Specialties Grid */}
      <div className="text-center mb-8 w-full">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Specialities:</h3>
      </div>

      {/* Container for grid of specialties */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.6, // Slightly faster delay between each card's animation
            },
          },
        }}
      >
        {/* Map through specialties */}
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.name}
            className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              duration: 1,
              delay: index * 0.4,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Card with Hover Effect */}
            <button
              className="w-full h-52 bg-cover bg-center bg-no-repeat transform transition-transform duration-300 hover:scale-110"
              style={{ backgroundImage: `url(${specialty.image})`, objectFit: 'cover' }}
            ></button>

            {/* Specialty Name and Description */}
            <div className="bg-white p-4 text-center rounded-b-lg shadow-lg">
              <h4 className="font-semibold text-lg text-gray-800">{specialty.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{specialty.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  </Layout>
);

export default Specialities;
