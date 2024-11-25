import React from 'react';
import quitSmokingContent from '../HealthBlog/JSON/quitSmokingContent.json';
import QuitSmokingImage from '../../assets/images/AviodSmoking1.jpeg'; // Import image

const QuitSmoking = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <div className="p-6 max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-lg">
        {/* Flex container for image and intro */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-6">
          {/* Intro Text */}
          <div className="lg:w-1/2 pr-6 mb-6 lg:mb-0">
            <h1 className="text-2xl font-bold mb-4">{quitSmokingContent.title}</h1>
            {quitSmokingContent.intro.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 mb-4">{paragraph}</p>
            ))}
          </div>
          {/* Image */}
          <div className="lg:w-1/2 lg:flex-shrink-0">
            <img
              src={QuitSmokingImage} // Use the directly imported image
              alt="Quit Smoking"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Sections */}
        {quitSmokingContent.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
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
        <p className="text-lg text-gray-700">{quitSmokingContent.conclusion}</p>
      </div>
    </div>
  );
};

export default QuitSmoking;
