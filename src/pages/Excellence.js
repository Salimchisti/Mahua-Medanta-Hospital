import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import surgeryImg from '../assets/images/surgery.png';
import traumaImg from '../assets/images/joint.png';
import cardiologyImg from '../assets/images/cardiology.png';
import spinalImg from '../assets/images/spinal.png';
import emergencyImg from '../assets/images/critical-care-icon.png';
import urologyImg from '../assets/images/nephrology.png';

const ServiceCard = ({ service, index }) => {
  return (
    <div className="max-w-xs mx-auto bg-white text-black rounded-lg shadow-lg transition-all duration-300 hover:cursor-pointer">
      {service.link ? (
        <Link to={service.link}>
          <div className="p-6 text-center">
            <img 
              src={service.icon} 
              alt={service.title} 
              className="w-16 h-16 mx-auto transition-transform duration-300 hover:scale-125" // Increased scale on hover
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        </Link>
      ) : (
        <div className="p-6 text-center">
          <img 
            src={service.icon} 
            alt={service.title} 
            className="w-16 h-16 mx-auto transition-transform duration-300 hover:scale-125" // Increased scale on hover
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h2>
          <p className="text-gray-600 mt-2">{service.description}</p>
        </div>
      )}
    </div>
  );
};

const Excellence = () => {
  const services = [
    {
      title: 'General & Laparoscopic Surgery',
      icon: surgeryImg,
      description: 'Comprehensive general surgery and advanced laparoscopic procedures.',
    },
    {
      title: 'Trauma, Joint Replacement & Arthroscopy',
      icon: traumaImg,
      description: 'Expert care in trauma management, joint replacements, and arthroscopic surgeries.',
      link: '/orthopaedics',
    },
    {
      title: 'Cardiology & Cardiothoracic Surgery',
      icon: cardiologyImg,
      description: 'Advanced care for heart diseases and cardiovascular surgeries.',
      link: '/cardiology',
    },
    {
      title: 'Spinal Surgery & Neurology',
      icon: spinalImg,
      description: 'Leading treatments for spinal disorders and neurological conditions.',
      link: '/neurology',
    },
    {
      title: 'Emergency Medicine & Critical Care',
      icon: emergencyImg,
      description: '24/7 emergency and critical care services with highly skilled professionals.',
    },
    {
      title: 'Urology & Nephrology',
      icon: urologyImg,
      description: 'Expert urology and nephrology services for kidney and urinary conditions.',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Our Areas of Excellence</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Excellence;
