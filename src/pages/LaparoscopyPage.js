import React from 'react';

// Import images with the correct relative paths and extensions
import Image1 from '../assets/images/Laparoscopyimg2.jpg';
import Image2 from '../assets/images/Laparoscopyimg3.jpg';

const LaparoscopyPage = () => {
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-900">Laparoscopy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Laparoscopy is a minimally invasive surgery using small incisions, a laparoscope (camera with a light), and specialized instruments. It is commonly used in gynecology, urology, and general surgery.
        </p>
      </header>

      {/* Two-column layout for text and images */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text content on the left */}
        <div className="flex-1">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Procedure Details:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Small Incisions:</strong> Typically 2–4 small cuts (0.5–1 cm) in the abdomen.</li>
              <li><strong>Laparoscope:</strong> Flexible tube with a camera transmitting high-definition images to a monitor.</li>
              <li><strong>Carbon Dioxide Insufflation:</strong> Gas inflates the abdomen for better visibility.</li>
              <li><strong>Surgical Instruments:</strong> Specialized tools are used for the surgery through small incisions.</li>
              <li><strong>General Anesthesia:</strong> Most procedures are performed under general anesthesia.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Benefits of Laparoscopy:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Smaller Incisions:</strong> Less trauma to the body, leading to faster healing.</li>
              <li><strong>Reduced Pain:</strong> Smaller cuts result in less pain and less need for pain medication.</li>
              <li><strong>Faster Recovery:</strong> Shorter hospital stays and quicker return to normal activities.</li>
              <li><strong>Lower Risk of Infection:</strong> Smaller incisions reduce infection risk.</li>
              <li><strong>Cosmetic Advantage:</strong> Smaller scars that fade over time.</li>
              <li><strong>Reduced Blood Loss:</strong> Laparoscopy reduces bleeding compared to traditional surgery.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Common Uses:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Gynecology:</strong> Treatment for conditions like endometriosis, ovarian cysts, and fibroids.</li>
              <li><strong>General Surgery:</strong> Gallbladder removal, appendectomy, and hernia repair.</li>
              <li><strong>Urology:</strong> Kidney procedures, prostate biopsies, and kidney stone treatment.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Advantages Over Open Surgery:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Less Trauma:</strong> Smaller incisions mean less damage to surrounding tissues.</li>
              <li><strong>Improved Precision:</strong> High-definition camera provides better visualization for precision.</li>
              <li><strong>Fewer Complications:</strong> Reduced risk of infection, blood clots, and other complications.</li>
              <li><strong>Faster Recovery:</strong> Quick return to daily activities with less pain and downtime.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Limitations:</h2>
            <p className="text-lg text-gray-700 ml-6">
              Some surgeries may not be suitable for laparoscopy, especially complex or emergency procedures. Additionally, laparoscopic surgery requires specialized training for the surgeon to ensure safety and effectiveness.
            </p>
          </section>
        </div>

        {/* Image content on the right */}
        <div className="flex-1 space-y-6 md:space-y-8">
          <img
            src={Image1}
            alt="Laparoscopy Procedure"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={Image2}
            alt="Laparoscopic Tools"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Get in Touch Button */}
      <div className=" text-center mt-6 mb-6">
        <a
          href="/ContactUs"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default LaparoscopyPage;
