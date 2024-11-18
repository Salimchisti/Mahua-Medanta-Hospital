import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Heading Section */}
      <div className="bg-white bg-opacity-90 p-6 sm:p-8 md:p-10 rounded-lg mb-8 sm:mb-10 lg:mb-12 w-full max-w-4xl mx-auto text-center shadow-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Our 24/7 Medical Services
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Comprehensive medical care for every situation, available at any hour.
        </p>
      </div>

      {/* Specialties Grid */}
      <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full px-4 sm:px-6 md:px-8 justify-items-center"
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  }}
>
  {/* Map through specialties */}
  {specialties.map((specialty, index) => (
    <motion.div
      key={specialty.name}
      className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 bg-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 25,
        duration: 1,
        delay: index * 0.4,
      }}
    >
      {/* Image Section */}
      <div
        className="h-40 md:h-48 lg:h-52 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${specialty.image})` }}
      ></div>

      {/* Text Section */}
      <div className="flex-grow flex flex-col justify-between p-4">
        <h4 className="font-semibold text-lg md:text-xl text-gray-800">
          {specialty.name}
        </h4>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          {specialty.description}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>

    </section>
  </Layout>
);

export default Specialities;
