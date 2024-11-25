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
      <div className="bg-white bg-opacity-90 mb-10 w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Burn Treatment
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
          Comprehensive care and treatment for burn injuries to ensure the best possible recovery.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-8 text-gray-700">
        <h3 className="text-2xl font-semibold">Types of Burns</h3>
        
        {/* First Degree and Second Degree Burns */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 mb-8">
          <div className="flex-1">
            <img src={firstDegreeImage} alt="First Degree Burn" className="w-full object-cover h-48 sm:h-64 mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl"><strong>First-Degree Burns</strong> (Superficial Burns) – Affects only the outer layer of the skin (epidermis). Symptoms include redness, pain, and mild swelling. Treated with cooling, soothing lotions, and over-the-counter pain relievers.</p>
          </div>
          <div className="flex-1">
            <img src={secondDegreeImage} alt="Second Degree Burn" className="w-full object-cover h-48 sm:h-64 mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl"><strong>Second-Degree Burns</strong> (Partial Thickness Burns) – Affects both the epidermis and the second layer of skin (dermis). Symptoms include redness, blisters, swelling, and severe pain. Treatment involves cleaning, applying ointment, and covering with a sterile bandage.</p>
          </div>
        </div>

        {/* Third Degree and Chemical Burns - Reverse order (Image right, text left) */}
        <div className="flex flex-col sm:flex-row-reverse sm:space-x-8 mb-8">
          <div className="flex-1">
            <img src={thirdDegreeImage} alt="Third Degree Burn" className="w-full object-cover h-48 sm:h-64 mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl"><strong>Third-Degree Burns</strong> (Full Thickness Burns) – Affects all layers of the skin, potentially damaging underlying tissues, muscles, and nerves. Symptoms include white or charred skin, no pain, and leathery texture. Requires immediate medical attention, skin grafts, and long-term rehabilitation.</p>
          </div>
          <div className="flex-1">
            <img src={chemicalBurnImage} alt="Chemical Burn" className="w-full object-cover h-48 sm:h-64 mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl"><strong>Chemical Burns</strong> – Caused by contact with acids, alkalis, or other caustic substances. Immediate treatment involves flushing with water and seeking medical help.</p>
          </div>
        </div>

        {/* Electrical and Radiation Burns - Reverse order (Image right, text left) */}
        <div className="flex flex-col sm:flex-row-reverse sm:space-x-8 mb-8">
          <div className="flex-1">
            <img src={electricalBurnImage} alt="Electrical Burn" className="w-full object-cover h-48 sm:h-64 mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl"><strong>Electrical Burns</strong> – Caused by contact with electric currents. It may cause deep tissue damage and requires immediate stabilization and care.</p>
          </div>
          <div className="flex-1">
            <img src={radiationBurnImage} alt="Radiation Burn" className="w-full object-cover h-48 sm:h-64 mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl"><strong>Radiation Burns</strong> – Caused by exposure to radiation. Treatment may include hydration and topical creams.</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold">Burn Treatment Process</h3>
        <div className="mb-8">
          <img src={immediateFirstAidImage} alt="Immediate First Aid" className="w-full object-cover h-48 sm:h-64 mb-4" />
          <p className="text-lg sm:text-xl md:text-2xl"><strong>Immediate First Aid:</strong> Cool the burn with cool (not cold) water for at least 10 minutes. Avoid using ice. Cover the burn with a sterile, non-stick bandage to protect it from infection.</p>
        </div>
        <div className="mb-8">
          <img src={medicalTreatmentImage} alt="Medical Treatment" className="w-full object-cover h-48 sm:h-64 mb-4" />
          <p className="text-lg sm:text-xl md:text-2xl"><strong>Medical Treatment:</strong> Professional care may include cleaning the wound, applying antibiotics, and covering it with sterile dressings.</p>
        </div>
        <div className="mb-8">
          <img src={fluidManagementImage} alt="Fluid and Electrolyte Management" className="w-full object-cover h-48 sm:h-64 mb-4" />
          <p className="text-lg sm:text-xl md:text-2xl"><strong>Fluid and Electrolyte Management:</strong> Severe burns can lead to dehydration, requiring IV fluids to maintain hydration and electrolyte balance.</p>
        </div>
        <div className="mb-8">
          <img src={surgicalTreatmentImage} alt="Surgical Treatment" className="w-full object-cover h-48 sm:h-64 mb-4" />
          <p className="text-lg sm:text-xl md:text-2xl"><strong>Surgical Treatment:</strong> Severe burns may require skin grafts, debridement of dead tissue, or plastic surgery to restore appearance and function.</p>
        </div>
        <div className="mb-8">
          <img src={painManagementImage} alt="Pain and Anxiety Management" className="w-full object-cover h-48 sm:h-64 mb-4" />
          <p className="text-lg sm:text-xl md:text-2xl"><strong>Pain and Anxiety Management:</strong> Prescription pain relievers, sedatives, and psychological support are important for managing pain and emotional distress.</p>
        </div>

        <h3 className="text-2xl font-semibold">Rehabilitation and Long-Term Care</h3>
        <p className="text-lg sm:text-xl md:text-2xl"><strong>Physical Therapy:</strong> Burn victims often require physical therapy to regain mobility, especially if the burn caused scarring or joint stiffness.</p>
        <p className="text-lg sm:text-xl md:text-2xl"><strong>Psychological Support:</strong> Counseling and emotional support are crucial for the mental recovery of burn patients, especially if they experience permanent disfigurement.</p>
        <p className="text-lg sm:text-xl md:text-2xl"><strong>Scar Management:</strong> Compression garments and ongoing care to reduce scarring are essential for burn patients in their recovery.</p>

        <h3 className="text-2xl font-semibold">Burn Prevention</h3>
        <p className="text-lg sm:text-xl md:text-2xl">To prevent burns, practice fire safety, use sun protection, store chemicals properly, and ensure electrical safety in the home and workplace.</p>
      </div>
    </section>
  </Layout>
);

export default BurnTreatment;
