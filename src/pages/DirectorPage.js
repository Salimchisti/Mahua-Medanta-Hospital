import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import directorImage from '../assets/images/new-img.jpg'; // Correct import

const DirectorPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Heading with motion */}
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}  // Slightly slower animation
      >
        Meet Our Director
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-start md:space-x-12">
        {/* Director Image Section */}
        <motion.div
          className="w-[250px] h-[350px] md:w-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg mb-6 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}  // Adjusted to a slower speed
        >
          <img 
            src={directorImage} 
            alt="Dr. Mohammad Anwar" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Director Details Section with "Expand to the Right" Motion */}
        <motion.div
          className="text-left md:max-w-4xl flex flex-col justify-start md:ml-12 space-y-6" // Increased space between content and image
          initial={{ opacity: 0, x: 200 }} // Start from a higher x value to the right
          animate={{ opacity: 1, x: 0 }}   // Animate to the normal position (0)
          transition={{
            duration: 1.5, // Adjust duration for smoother transition
            delay: 0.5,    // Optional: slight delay to make the effect feel more natural
          }}  
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Dr. Mohammad Anwar</h3>
          <p className="text-lg text-gray-600 mb-4">Founder & Director | Mahua Medanta Hospital</p>
          <p className="text-gray-700 text-base mb-4">
            Dr. Mohammad Anwar is a dedicated medical professional with over 20 years of experience in the healthcare industry.
            As the Founder and Director of Mahua Medanta Hospital, he has played a pivotal role in establishing a state-of-the-art healthcare facility that prioritizes the well-being of the community through exceptional care and expertise.
          </p>
          <p className="text-gray-600 text-sm italic mb-4">
            "Our mission is to provide compassionate, patient-centered care with the highest standards of medical excellence."
          </p>
          <p className="text-gray-700 text-base mb-4 ">
            In addition to his medical leadership, Dr. Anwar is deeply committed to public service. He has recently been appointed as the General Secretary of the Bihar Pradesh Congress Minority Department. In this role, he strives to promote the values of the Indian National Congress, advocating for social justice and inclusive community engagement.
          </p>
          <p className="text-gray-700 text-base">
            Dr. Anwar believes in the power of compassionate care and active community involvement to create a brighter, more equitable future for all.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectorPage;
