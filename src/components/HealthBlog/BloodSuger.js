import React from "react";
import bloodSugarContent from "../HealthBlog/JSON/bloodSugarContent.json"; 
import Image from "..//../assets/images/BloodSugar.jpg"; 

const BloodSugar = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-wrap p-4">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-xl font-bold mb-4">{bloodSugarContent.title}</h1>
          {bloodSugarContent.intro.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4 flex items-center justify-center lg:justify-end">
          <img
            src={Image} // Using the imported image
            alt="Diabetes"
            className="w-full h-auto max-w-xl rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Additional Content */}
      <div className="w-full p-4">
        {bloodSugarContent.additionalContent.paragraph.map(
          (text, index) => (
            <p key={index} className="mb-6">
              {text}
            </p>
          )
        )}

        {/* Sections */}
        {bloodSugarContent.additionalContent.sections.map(
          (section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              {section.content.map((item, contentIndex) => (
                <div key={contentIndex} className="mb-4">
                  <strong>{item.subtitle || "Myth"}:</strong> {item.text || item.myth}
                  {item.fact && (
                    <>
                      <br />
                      <strong>Fact:</strong> {item.fact}
                    </>
                  )}
                </div>
              ))}
            </div>
          )
        )}

        {/* Conclusion */}
        <h2 className="text-xl font-bold mb-4">Conclusion</h2>
        <p>{bloodSugarContent.additionalContent.conclusion}</p>
      </div>
    </div>
  );
};

export default BloodSugar;
