import React, { useState } from 'react';

// Sample data for insurance plans
const insurancePlans = [
  {
    id: 1,
    name: 'Basic Health Insurance',
    description: 'Provides coverage for general healthcare needs, including doctor visits and prescriptions.',
    coverage: 'Doctor Visits, Prescriptions, Emergency Care',
    price: '$100/month',
    link: '#',
  },
  {
    id: 2,
    name: 'Family Health Insurance',
    description: 'Covers the health needs of the entire family, with additional benefits for children and elderly.',
    coverage: 'Doctor Visits, Prescriptions, Emergency Care, Family Coverage',
    price: '$250/month',
    link: '#',
  },
  {
    id: 3,
    name: 'Premium Health Insurance',
    description: 'Comprehensive health coverage with low deductibles and extra services such as mental health care.',
    coverage: 'Doctor Visits, Prescriptions, Emergency Care, Mental Health, Wellness Checks',
    price: '$400/month',
    link: '#',
  },
  {
    id: 4,
    name: 'Travel Insurance',
    description: 'Covers health emergencies during international travel, including medical evacuation and lost luggage.',
    coverage: 'Emergency Health, Medical Evacuation, Lost Luggage, Travel Delays',
    price: '$50/month',
    link: '#',
  },
];

const InsurancePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Insurance Plans</h1>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Choose an insurance plan that fits your needs. Select a plan to view more details or apply.
      </p>

      {/* Insurance Plans Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {insurancePlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => handlePlanSelection(plan)}
          >
            <h2 className="text-xl font-semibold text-gray-800">{plan.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
            <p className="mt-4 font-semibold text-gray-700">Coverage: {plan.coverage}</p>
            <p className="mt-2 text-lg font-bold text-blue-500">{plan.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Plan Details Modal or Section */}
      {selectedPlan && (
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">{selectedPlan.name}</h2>
          <p className="mt-2 text-sm text-gray-600">{selectedPlan.description}</p>
          <p className="mt-4 text-lg font-semibold">Coverage Includes:</p>
          <ul className="list-disc pl-6 mt-2">
            {selectedPlan.coverage.split(', ').map((item, index) => (
              <li key={index} className="text-sm text-gray-700">{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xl font-bold text-blue-500">{selectedPlan.price}</p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-700">
            Apply for {selectedPlan.name}
          </button>
        </div>
      )}
    </div>
  );
};

export default InsurancePlans;
