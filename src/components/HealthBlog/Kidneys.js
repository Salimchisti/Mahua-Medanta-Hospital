import React from 'react';
import kidneysContent from '../HealthBlog/JSON/kidneysContent.json';
import img from '../../assets/images/kidneys.jpg'; 

const Kidneys = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="p-6 mx-auto flex flex-col lg:flex-row lg:space-x-6 mb-6">
        {/* Text Section */}
        <div className="flex-1 lg:w-1/2 pr-6 mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold mb-4">{kidneysContent.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{kidneysContent.intro}</p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src={img}  
            alt="Kidneys"
            className="w-full h-auto max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="p-6 mx-auto">
        {kidneysContent.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-5">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside mb-4 text-lg text-gray-700">
                {section.content.map((item, idx) =>
                  typeof item === 'string' ? (
                    <li key={idx}>{item}</li>
                  ) : (
                    <li key={idx}>
                      <strong>{item.subtitle}:</strong> {item.text}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p className="text-lg text-gray-700">{section.content}</p>
            )}
          </div>
        ))}

        {/* Conclusion */}
        <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
        <p className="text-lg text-gray-700">{kidneysContent.conclusion}</p>
      </div>
    </div>
  );
};

export default Kidneys;
