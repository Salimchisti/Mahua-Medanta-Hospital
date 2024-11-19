import React from 'react';

// Import images with the correct relative paths and extensions
import Image1 from '../assets/images/Laparoscopyimg2.jpg';
import Image2 from '../assets/images/Laparoscopyimg3.jpg';

const LaparoscopyPage = () => {
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-900">Laparoscopy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Laparoscopy is a type of minimally invasive surgery that uses small incisions, a laparoscope (a camera with a light), and specialized instruments to perform surgical procedures. It's commonly used in various medical fields such as gynecology, urology, and general surgery.
        </p>
      </header>

      {/* Two-column layout for text and images */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text content on the left */}
        <div className="flex-1">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Procedure Details:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Small Incisions</strong>: Typically 2-4 small incisions (0.5–1 cm) are made in the abdomen.</li>
              <li><strong>Laparoscope</strong>: A flexible tube with a camera that transmits high-definition images to a monitor.</li>
              <li><strong>Carbon Dioxide Insufflation</strong>: Gas is used to inflate the abdomen, creating space for the surgeon to work.</li>
              <li><strong>Surgical Instruments</strong>: Specialized tools are inserted to perform the surgery through small incisions.</li>
              <li><strong>General Anesthesia</strong>: Most laparoscopy procedures are done under general anesthesia.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Benefits of Laparoscopy:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Smaller Incisions</strong>: Less trauma to the body with smaller incisions, leading to faster healing.</li>
              <li><strong>Reduced Pain</strong>: Smaller cuts lead to less pain and typically require fewer pain medications.</li>
              <li><strong>Faster Recovery</strong>: Shorter hospital stays and quicker return to normal activities.</li>
              <li><strong>Lower Risk of Infection</strong>: Smaller incisions mean a reduced risk of infections.</li>
              <li><strong>Cosmetic Advantage</strong>: Smaller scars that fade over time.</li>
              <li><strong>Reduced Blood Loss</strong>: Laparoscopy is associated with less bleeding compared to traditional surgery.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Common Uses:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Gynecology</strong>: For conditions like endometriosis, ovarian cysts, fibroids, and tubal ligation.</li>
              <li><strong>General Surgery</strong>: Includes gallbladder removal, appendectomy, and hernia repair.</li>
              <li><strong>Urology</strong>: Used for kidney procedures, prostate biopsies, and treating kidney stones.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Advantages Over Open Surgery:</h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-700 ml-6">
              <li><strong>Less Trauma</strong>: Smaller incisions result in less damage to the body compared to open surgery.</li>
              <li><strong>Precision and Visualization</strong>: The high-definition camera allows for more accurate surgery.</li>
              <li><strong>Fewer Complications</strong>: Lower risk of complications such as infections and blood clots.</li>
              <li><strong>Quicker Recovery</strong>: Faster return to daily activities with less post-operative pain.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">Limitations:</h2>
            <p className="text-lg text-gray-700 ml-6">
              Not all surgeries can be performed with laparoscopy, especially complex or emergency procedures. Some surgeries may still require traditional open methods. Additionally, laparoscopic surgery requires extensive training for the surgeon.
            </p>
          </section>
        </div>

        {/* Image content on the right */}
        <div className="flex-1 space-y-6">
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
    </div>
  );
};

export default LaparoscopyPage;
