import React from 'react';
import { motion } from 'framer-motion'; // For animation effects

// Replace this with the actual image path for the Emergency Care section
import emergencyImage from '../assets/images/EmergencyCarePage.jpg';

const EmergencyCarePage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <motion.img
          src={emergencyImage}
          alt="Emergency Care"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center bg-black bg-opacity-50">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Emergency Care</h1>
            <p className="mt-4 text-lg md:text-xl">
              Available 24/7 for Life-Threatening Emergencies
            </p>
          </div>
        </div>
      </div>

      {/* What is Emergency Care Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">What is Emergency Care?</h2>
        <p className="mt-4 text-lg md:text-xl">
          Emergency care is medical treatment provided to patients who are experiencing a medical emergency. It is available for acute illnesses, injuries, and life-threatening conditions. Our team of trained professionals is ready to provide immediate, life-saving interventions.
        </p>
      </div>

      {/* Types of Emergency Care Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Types of Emergencies We Handle</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Trauma Care</h3>
            <p className="mt-2 text-lg">
              Immediate care for patients with injuries caused by accidents, falls, or violence. We provide rapid treatment to stabilize patients.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Cardiac Emergencies</h3>
            <p className="mt-2 text-lg">
              Emergency care for heart-related emergencies, including heart attacks, arrhythmias, and severe chest pain. We offer quick interventions to save lives.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Stroke Care</h3>
            <p className="mt-2 text-lg">
              Fast treatment for stroke patients, including clot-busting medications and emergency surgical procedures to prevent long-term damage.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Respiratory Emergencies</h3>
            <p className="mt-2 text-lg">
              Care for patients with severe breathing problems, including asthma attacks, pneumonia, and other life-threatening respiratory issues.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Pediatric Emergencies</h3>
            <p className="mt-2 text-lg">
              Specialized emergency care for children, from accidents to fever, dehydration, and respiratory distress, handled by pediatric experts.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Poisoning & Overdose</h3>
            <p className="mt-2 text-lg">
              Emergency response for patients who have been poisoned or overdosed, including treatment for toxicity and potential antidote administration.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Our Emergency Care?</h2>
        <p className="mt-4 text-lg">
          Our emergency department is staffed with highly trained doctors, nurses, and emergency medical technicians available 24/7. We prioritize speed, precision, and compassionate care.
        </p>
        <ul className="mt-8 list-inside list-disc text-lg mx-auto max-w-4xl">
          <li>Round-the-clock availability for life-threatening situations.</li>
          <li>Fast response times with state-of-the-art medical equipment.</li>
          <li>Highly skilled professionals specializing in critical care.</li>
          <li>Patient-centered care that ensures comfort and safety.</li>
        </ul>
      </div>

      {/* Emergency Contact Information */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Contact Us in an Emergency</h2>
        <p className="mt-4 text-lg">
          If you or a loved one is experiencing a medical emergency, please do not hesitate to reach out. Our team is available 24/7 to assist you.
        </p>
        <div className="mt-8">
          <a href="tel:+1234567890" className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Call Emergency Line: +91 73197 99463
          </a>
        </div>
        <div className="mt-4">
          <a href="/ContactUs" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCarePage;
