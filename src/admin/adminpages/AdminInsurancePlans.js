import React, { useState } from 'react';

// Initial Sample Data
const initialInsurancePlans = [
  {
    id: 1,
    name: 'Basic Health Insurance',
    description: 'Provides coverage for general healthcare needs, including doctor visits and prescriptions.',
    coverage: 'Doctor Visits, Prescriptions, Emergency Care',
    price: '$100/month',
  },
  {
    id: 2,
    name: 'Family Health Insurance',
    description: 'Covers the health needs of the entire family, with additional benefits for children and elderly.',
    coverage: 'Doctor Visits, Prescriptions, Emergency Care, Family Coverage',
    price: '$250/month',
  },
];

const AdminInsurancePlans = () => {
  const [insurancePlans, setInsurancePlans] = useState(initialInsurancePlans);
  const [newPlan, setNewPlan] = useState({
    id: '',
    name: '',
    description: '',
    coverage: '',
    price: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlan({ ...newPlan, [name]: value });
  };

  // Add new insurance plan
  const addPlan = () => {
    if (!newPlan.name || !newPlan.description || !newPlan.coverage || !newPlan.price) {
      alert('Please fill all fields');
      return;
    }
    setInsurancePlans([
      ...insurancePlans,
      { ...newPlan, id: Math.max(...insurancePlans.map((plan) => plan.id), 0) + 1 },
    ]);
    setNewPlan({ id: '', name: '', description: '', coverage: '', price: '' });
  };

  // Edit existing plan
  const editPlan = (plan) => {
    setNewPlan(plan);
    setIsEditing(true);
  };

  // Update plan
  const updatePlan = () => {
    setInsurancePlans(
      insurancePlans.map((plan) =>
        plan.id === newPlan.id ? { ...newPlan } : plan
      )
    );
    setNewPlan({ id: '', name: '', description: '', coverage: '', price: '' });
    setIsEditing(false);
  };

  // Delete plan
  const deletePlan = (id) => {
    setInsurancePlans(insurancePlans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin: Manage Insurance Plans</h1>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Add, edit, or remove insurance plans as required.
      </p>

      {/* Add/Edit Form */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{isEditing ? 'Edit Plan' : 'Add New Plan'}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <input
            type="text"
            name="name"
            value={newPlan.name}
            onChange={handleInputChange}
            placeholder="Plan Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="description"
            value={newPlan.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="coverage"
            value={newPlan.coverage}
            onChange={handleInputChange}
            placeholder="Coverage (comma-separated)"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="price"
            value={newPlan.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={isEditing ? updatePlan : addPlan}
          className={`mt-4 px-4 py-2 rounded ${
            isEditing ? 'bg-yellow-500' : 'bg-blue-500'
          } text-white hover:bg-opacity-80`}
        >
          {isEditing ? 'Update Plan' : 'Add Plan'}
        </button>
      </div>

      {/* Insurance Plans List */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Existing Insurance Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insurancePlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-800">{plan.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              <p className="text-sm mt-4 font-semibold">Coverage: {plan.coverage}</p>
              <p className="text-lg font-bold text-blue-500 mt-2">{plan.price}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => editPlan(plan)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePlan(plan.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminInsurancePlans;
