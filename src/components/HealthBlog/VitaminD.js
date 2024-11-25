import React from "react";
import vitaminDContent from "../HealthBlog/JSON/vitaminDContent.json";
import vitaminDImage from "../../assets/images/vitaminD.jpeg";  // Import the image

const VitaminD = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="p-8 max-w-7xl mx-auto mt-5 flex-grow">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          {vitaminDContent.title}
        </h1>

        {/* Intro Paragraphs */}
        {vitaminDContent.intro.map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Two-Column Layout for Larger Screens */}
        <div className="flex flex-col lg:flex-row">
          {/* Text Column */}
          <div className="flex-1 lg:pr-6 mb-6 lg:mb-0">
            {/* Content from JSON */}
            {vitaminDContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                  {section.title}
                </h2>

                {/* List Content */}
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside mb-6 text-gray-700">
                    {section.content.map((item, idx) =>
                      item.subtitle ? (
                        <li key={idx}>
                          <strong className="text-gray-800">{item.subtitle}:</strong> {item.text}
                        </li>
                      ) : (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div className="flex-1 lg:pl-6">
            <img
              src={vitaminDImage}  // Use the imported image here
              alt="Vitamin D and Sunlight"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitaminD;
