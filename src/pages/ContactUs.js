import React, { useState } from 'react';

// Import the image from the assets folder
import emergencyCareImage from '../assets/images/Contact Us.2625c50d13aedb11ddb7.png';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Here you would typically send form data to a backend
    // Example: axios.post('/submit-form', formData)
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section with Image */}
      <div className="mb-8">
        <img
          src={emergencyCareImage} // Use the imported image path
          alt="Emergency Care"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-base md:text-lg px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Our Contact Details
          </h2>
          <p className="mb-2">
            <strong>Phone:</strong> +91 73197 99463
          </p>
          <p className="mb-2">
            <strong>Email:</strong> mahuamedantahospital@gmail.com
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Patel Bhavan Vishnu Chowk, Mahua
          </p>
          <p className="mt-4">
            Our team is available 24/7 for any urgent queries. Please don’t
            hesitate to reach out to us.
          </p>
        </div>

        {/* Contact Form */}
        <div className="px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Send Us a Message
          </h2>
          {isSubmitted ? (
            <div className="text-center text-green-600 mt-4">
              <p>Thank you for your message! We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
