import React, { useState } from 'react';
// Import your image
import doctorImage from '../assets/images/imgDoctorAppointment.jpg'; 

const DoctorAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: '',
    message: '',
  });

  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];

  const departments = ['General Physician', 'Cardiologist', 'Dermatologist', 'Pediatrician', 'Orthopedic', 'Gynecologist'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Book a Doctor Appointment
      </h1>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        Fill out the form below to book an appointment with a doctor.
      </p>

      {/* Add the image */}
      <div className="mt-4">
        <img
          src={doctorImage}
          alt="Doctor appointment"
          className="w-full max-w-md mx-auto rounded-lg shadow-md"
        />
      </div>

      {/* Appointment Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Department Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="department" className="text-sm font-medium text-gray-700">
              Select Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-lg"
            >
              <option value="">--Select--</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Date Input */}
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Time Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="time" className="text-sm font-medium text-gray-700">
              Select Time
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-lg"
            >
              <option value="">--Select--</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Message Input */}
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-lg"
              placeholder="Optional message for the doctor"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default DoctorAppointment;
