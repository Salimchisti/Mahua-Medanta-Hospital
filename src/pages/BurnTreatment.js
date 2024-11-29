import React from 'react';
import Layout from '../components/Layout';
import firstDegreeImage from '../assets/images/First-Degree Burns.jpg';
import secondDegreeImage from '../assets/images/Second-Degree Burns.jpg';
import thirdDegreeImage from '../assets/images/Third-Degree Burns.jpg';
import chemicalBurnImage from '../assets/images/Chemical Burns.jpg';
import electricalBurnImage from '../assets/images/Electrical Burns.jpg';
import radiationBurnImage from '../assets/images/Radiation Burns.jpg';
import immediateFirstAidImage from '../assets/images/FirstAidKit.jpg';
import medicalTreatmentImage from '../assets/images/Medical Treatment.jpg';
import fluidManagementImage from '../assets/images/Fluid and Electrolyte Management.jpg';
import surgicalTreatmentImage from '../assets/images/Surgical Treatment.jpg';
import painManagementImage from '../assets/images/Pain and Anxiety Management.jpg';

const BurnTreatment = () => (
  <Layout>
    <section className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="bg-white bg-opacity-90 mb-10 w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Burn Treatment
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
          Comprehensive care and treatment for burn injuries to ensure the best possible recovery.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto space-y-12 text-gray-700">
        <h3 className="text-2xl font-semibold text-center">Types of Burns</h3>

        {/* First Degree and Second Degree Burns */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="flex-1">
            <img src={firstDegreeImage} alt="First Degree Burn" className="w-full object-cover h-64 rounded-lg" />
            <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
              <strong>First-Degree Burns</strong> (Superficial Burns) – Affects only the outer layer of the skin (epidermis). Symptoms include redness, pain, and mild swelling. Treated with cooling, soothing lotions, and over-the-counter pain relievers.
            </p>
          </div>
          <div className="flex-1">
            <img src={secondDegreeImage} alt="Second Degree Burn" className="w-full object-cover h-64 rounded-lg" />
            <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
              <strong>Second-Degree Burns</strong> (Partial Thickness Burns) – Affects both the epidermis and the second layer of skin (dermis). Symptoms include redness, blisters, swelling, and severe pain. Treatment involves cleaning, applying ointment, and covering with a sterile bandage.
            </p>
          </div>
        </div>

        {/* Third Degree and Chemical Burns */}
        <div className="flex flex-col lg:flex-row-reverse lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="flex-1">
            <img src={thirdDegreeImage} alt="Third Degree Burn" className="w-full object-cover h-64 rounded-lg" />
            <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
              <strong>Third-Degree Burns</strong> (Full Thickness Burns) – Affects all layers of the skin, potentially damaging underlying tissues, muscles, and nerves. Symptoms include white or charred skin, no pain, and leathery texture. Requires immediate medical attention, skin grafts, and long-term rehabilitation.
            </p>
          </div>
          <div className="flex-1">
            <img src={chemicalBurnImage} alt="Chemical Burn" className="w-full object-cover h-64 rounded-lg" />
            <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
              <strong>Chemical Burns</strong> – Caused by contact with acids, alkalis, or other caustic substances. Immediate treatment involves flushing with water and seeking medical help.
            </p>
          </div>
        </div>

        {/* Electrical and Radiation Burns */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="flex-1">
            <img src={electricalBurnImage} alt="Electrical Burn" className="w-full object-cover h-64 rounded-lg" />
            <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
              <strong>Electrical Burns</strong> – Caused by contact with electric currents. It may cause deep tissue damage and requires immediate stabilization and care.
            </p>
          </div>
          <div className="flex-1">
            <img src={radiationBurnImage} alt="Radiation Burn" className="w-full object-cover h-64 rounded-lg" />
            <p className="text-lg sm:text-xl md:text-2xl mt-4 text-justify">
              <strong>Radiation Burns</strong> – Caused by exposure to radiation. Treatment may include hydration and topical creams.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center">Burn Treatment Process</h3>
        {[
          { img: immediateFirstAidImage, title: "Immediate First Aid", text: "Cool the burn with cool (not cold) water for at least 10 minutes. Avoid using ice. Cover the burn with a sterile, non-stick bandage to protect it from infection." },
          { img: medicalTreatmentImage, title: "Medical Treatment", text: "Professional care may include cleaning the wound, applying antibiotics, and covering it with sterile dressings." },
          { img: fluidManagementImage, title: "Fluid and Electrolyte Management", text: "Severe burns can lead to dehydration, requiring IV fluids to maintain hydration and electrolyte balance." },
          { img: surgicalTreatmentImage, title: "Surgical Treatment", text: "Severe burns may require skin grafts, debridement of dead tissue, or plastic surgery to restore appearance and function." },
          { img: painManagementImage, title: "Pain and Anxiety Management", text: "Prescription pain relievers, sedatives, and psychological support are important for managing pain and emotional distress." },
        ].map(({ img, title, text }) => (
          <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 mb-8">
            <img src={img} alt={title} className="w-full lg:w-1/2 h-64 rounded-lg object-cover" />
            <p className="text-lg sm:text-xl md:text-2xl mt-4 lg:mt-0 text-justify flex-1">
              <strong>{title}:</strong> {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default BurnTreatment;
