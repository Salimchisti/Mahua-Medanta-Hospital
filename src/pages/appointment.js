import React, { useState } from 'react';
import img from '../../src/assets/images/appointment.png';

const AppointmentPage = () => {
    const [formData, setFormData] = useState({
        name: '',  
        email: '',   
        aadhar: '',
        address: '',
        gender: '',
        reason: '',
        date: '',
        time: '',
        dateOfBirth: '', // New state for Date of Birth
        period: 'AM' // Default to AM
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
        if (!formData.date) formErrors.date = "Date is required."; // Added validation for date
        if (!formData.time) formErrors.time = "Time is required."; // Added validation for time
        if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of Birth is required."; // Validation for Date of Birth

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert('Appointment booked successfully!');
            // Here you can add logic to send the data to your backend
            console.log(formData);
            // Reset form
            setFormData({
                name: '',
                email: '',
                aadhar: '',
                address: '',
                gender: '',
                reason: '',
                date: '',
                time: '',
                dateOfBirth: '', // Reset Date of Birth field
                period: 'AM', // Reset to default AM
            });
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-start items-center">
            {/* Heading centered at the top */}
            <h2 className="text-xl font-semibold text-center text-blue-600 mt-10 mb-5">Book an Appointment</h2>

            <div className="flex w-full max-w-6xl bg-white">
                {/* Form Area */}
                <div className="w-full md:w-1/2 px-6">
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                placeholder="Enter your full name"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Date of Birth */}
                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium">Date of Birth</label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                required
                            />
                            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                placeholder="Enter your email address"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Aadhar Number */}
                        <div className="mb-3">
                            <label htmlFor="aadhar" className="block text-gray-700 font-medium">Aadhar Number</label>
                            <input
                                type="text"
                                id="aadhar"
                                name="aadhar"
                                value={formData.aadhar}
                                onChange={handleChange}
                                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                placeholder="Enter your Aadhar number"
                                required
                            />
                            {errors.aadhar && <p className="text-red-500 text-sm mt-1">{errors.aadhar}</p>}
                        </div>

                        {/* Address */}
                        <div className="mb-3">
                            <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                placeholder="Enter your address"
                                required
                            />
                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                        </div>

                        {/* Gender */}
                        <div className="mb-3">
                            <label className="block text-gray-700 font-medium">Gender</label>
                            <div className="flex items-center mb-2">
                                <input type="radio" id="male" name="gender" value="male" onChange={handleChange} required />
                                <label htmlFor="male" className="ml-2">Male</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input type="radio" id="female" name="gender" value="female" onChange={handleChange} required />
                                <label htmlFor="female" className="ml-2">Female</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input type="radio" id="other" name="gender" value="other" onChange={handleChange} required />
                                <label htmlFor="other" className="ml-2">Other</label>
                            </div>
                            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                        </div>

                        {/* Reason for Appointment */}
                        <div className="mb-3">
                            <label htmlFor="reason" className="block text-gray-700 font-medium">Reason for Appointment</label>
                            <textarea
                                id="reason"
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                placeholder="State the reason for the appointment"
                                required
                            />
                            {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                        </div>

                        {/* Appointment Date */}
                        <div className="mb-3">
                            <label htmlFor="date" className="block text-gray-700 font-medium">Appointment Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                                required
                            />
                            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                        </div>

                        {/* Time Picker (12-hour format) */}
                        <div className="mb-3 flex items-center">
                            <label htmlFor="time" className="block text-gray-700 font-medium">Appointment Time</label>
                            <div className="flex items-center space-x-2 w-full">
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-1/4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                >
                                    {[...Array(12)].map((_, index) => (
                                        <option key={index} value={index + 1}>{index + 1}</option>
                                    ))}
                                </select>

                                <select
                                    name="minute"
                                    value={formData.minute}
                                    onChange={handleChange}
                                    className="w-1/4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                >
                                    {[0, 15, 30, 45].map(min => (
                                        <option key={min} value={min}>{min}</option>
                                    ))}
                                </select>

                                <select
                                    name="period"
                                    value={formData.period}
                                    onChange={handleChange}
                                    className="w-1/4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-10 focus:outline-none transition duration-300"
                        >
                            Book Appointment
                        </button>
                    </form>
                </div>

                {/* Image */}
                <div className="w-1/2 pl-4">
                    <img src={img} alt="Appointment" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentPage;
