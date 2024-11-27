import React, { useState } from 'react';

// Sample data for medicines
const medicines = [
  {
    id: 1,
    name: 'Paracetamol',
    category: 'Pain Relief',
    usage: 'Relieves mild to moderate pain and reduces fever.',
    dosage: '500 mg every 4-6 hours',
    sideEffects: 'May cause nausea, dizziness.',
    price: '$5',
    link: '#',
  },
  {
    id: 2,
    name: 'Ibuprofen',
    category: 'Pain Relief',
    usage: 'Used to reduce fever and treat pain or inflammation.',
    dosage: '200 mg every 4-6 hours',
    sideEffects: 'Can cause stomach upset, dizziness.',
    price: '$7',
    link: '#',
  },
  {
    id: 3,
    name: 'Amoxicillin',
    category: 'Antibiotic',
    usage: 'Used to treat bacterial infections.',
    dosage: '500 mg 3 times a day',
    sideEffects: 'May cause diarrhea, rash.',
    price: '$15',
    link: '#',
  },
  {
    id: 4,
    name: 'Insulin',
    category: 'Chronic Condition',
    usage: 'Used for managing blood sugar levels in diabetics.',
    dosage: 'As prescribed by doctor',
    sideEffects: 'Hypoglycemia (low blood sugar), weight gain.',
    price: '$40',
    link: '#',
  },
  // Add more medicines as needed
];

const MedicineEssentials = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter medicines based on the search term
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Medicine Essentials</h1>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Here you can find a list of essential medicines for various health needs. Click on the "Know More" link for additional details.
      </p>

      {/* Search Bar */}
      <div className="mt-4 mb-6">
        <input
          type="text"
          placeholder="Search for a medicine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full sm:w-2/3 lg:w-1/2"
        />
      </div>

      {/* Medicine List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className="block bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="p-4 flex flex-col">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">{medicine.name}</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2">Category: {medicine.category}</p>
                <p className="text-sm sm:text-base text-gray-600 mt-2">Usage: {medicine.usage}</p>
                <p className="text-sm sm:text-base text-gray-600 mt-2">Dosage: {medicine.dosage}</p>
                <p className="text-sm sm:text-base text-gray-600 mt-2">Side Effects: {medicine.sideEffects}</p>
                <p className="text-sm sm:text-base text-gray-600 mt-2">Price: {medicine.price}</p>

                {/* Know More Button */}
                <a
                  href={medicine.link}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 text-center cursor-pointer"
                >
                  Know More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No medicines found.</p>
        )}
      </div>
    </div>
  );
};

export default MedicineEssentials;
