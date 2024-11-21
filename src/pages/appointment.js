import React, { useState } from "react";
import img from "../../src/assets/images/appointment.png";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aadhar: "",
    address: "",
    gender: "",
    reason: "",
    date: "",
    time: "",
    dateOfBirth: "",
    period: "AM",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.aadhar) formErrors.aadhar = "Aadhar number is required.";
    if (!formData.address) formErrors.address = "Address is required.";
    if (!formData.gender) formErrors.gender = "Gender is required.";
    if (!formData.reason) formErrors.reason = "Reason for appointment is required.";
    if (!formData.date) formErrors.date = "Date is required.";
    if (!formData.time) formErrors.time = "Time is required.";
    if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of Birth is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Appointment booked successfully!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        aadhar: "",
        address: "",
        gender: "",
        reason: "",
        date: "",
        time: "",
        dateOfBirth: "",
        period: "AM",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <h2 className="text-lg md:text-2xl font-semibold text-center text-blue-600 mt-6 mb-6">
        Book an Appointment
      </h2>

      <div className="flex flex-wrap justify-center w-full max-w-6xl bg-white shadow-md rounded-md overflow-hidden">
        {/* Form Area */}
        <div className="w-full md:w-1/2 px-4 py-6">
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Aadhar */}
            <div className="mb-4">
              <label htmlFor="aadhar" className="block text-gray-700 font-medium">
                Aadhar Number
              </label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Aadhar number"
              />
              {errors.aadhar && <p className="text-red-500 text-sm">{errors.aadhar}</p>}
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-medium">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your address"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Gender</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                  />
                  <span>Other</span>
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
              )}
            </div>

            {/* Appointment Date */}
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-medium">
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            {/* Time */}
            <div className="mb-4 flex items-center space-x-4">
              <label htmlFor="time" className="block text-gray-700 font-medium">
                Time
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              >
                {[...Array(12)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select
                id="period"
                name="period"
                value={formData.period}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>

            {/* Reason */}
            <div className="mb-6">
              <label htmlFor="reason" className="block text-gray-700 font-medium">
                Reason
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                placeholder="Enter the reason for the appointment"
              />
              {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Image Area */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={img}
            alt="Appointment Illustration"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
