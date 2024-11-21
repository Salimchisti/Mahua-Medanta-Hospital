import React from 'react';
import { motion } from 'framer-motion'; // For animation effects

// Replace this with the actual image path
import surgeryImage from '../assets/images/GeneralSurgery.jpg';

const GeneralSurgeryPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <motion.img
          src={surgeryImage}
          alt="General Surgery"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center bg-black bg-opacity-50">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold">General Surgery</h1>
            <p className="mt-4 text-lg md:text-xl">
              Expert Care for Surgical Procedures
            </p>
          </div>
        </div>
      </div>

      {/* About General Surgery Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">What is General Surgery?</h2>
        <p className="mt-4 text-lg md:text-xl">
          General surgery is a broad specialty that focuses on the surgical treatment of a wide variety of conditions, primarily in the abdominal region, but also involving the endocrine system, soft tissues, and more. General surgeons are experts in both minor and major surgeries, including diagnostic, therapeutic, and reconstructive procedures.
        </p>
      </div>

      {/* Types of Surgeries Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Common Procedures in General Surgery</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Appendectomy</h3>
            <p className="mt-2 text-lg">
              An appendectomy is the surgical removal of the appendix, often performed to treat appendicitis, an inflammation of the appendix.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Cholecystectomy</h3>
            <p className="mt-2 text-lg">
              This procedure involves the removal of the gallbladder, often due to gallstones or inflammation, and is commonly performed laparoscopically.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Hernia Repair</h3>
            <p className="mt-2 text-lg">
              Hernia repair is a surgery to correct a bulging of organs or tissues through a weakened area in the abdominal wall.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Laparoscopic Surgery</h3>
            <p className="mt-2 text-lg">
              A minimally invasive surgery performed with small incisions, often used for gallbladder removal, colon resections, and other abdominal procedures.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Bariatric Surgery</h3>
            <p className="mt-2 text-lg">
              Bariatric surgery involves surgical weight-loss procedures that reduce the size of the stomach to promote weight loss.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Thyroid Surgery</h3>
            <p className="mt-2 text-lg">
              Thyroid surgery is used to remove part or all of the thyroid gland, typically due to cancer, nodules, or hyperthyroidism.
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Get in Touch with Our Surgeons</h2>
        <p className="mt-4 text-lg">Our expert general surgeons are ready to help you. Whether you need a consultation or are seeking treatment, contact us today.</p>
        <a href="/contact" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Book a Consultation
        </a>
      </div>
    </div>
  );
};

export default GeneralSurgeryPage;
