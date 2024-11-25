import React from "react";
import childObesityData from "./JSON/childObesityData.json";
import childImage from '../../assets/images/Child.jpeg'

const ChildObesity = () => {
  const renderSection = (section) => {
    switch (section.type) {
      case "text":
        return (
          <div className="p-4">
            {section.title && <h2 className="text-2xl font-bold mb-4">{section.title}</h2>}
            <p>{section.content}</p>
          </div>
        );
      case "image":
        return (
          <div className="w-full  flex items-center justify-center">
            <img
              src={childImage}  // Use the imported image here
              alt={section.alt}
              className="w-full h-auto max-w-xl rounded-lg shadow-md"
            />
          </div>

        );
      case "list":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <ul className="list-disc pl-6">
              {section.items.map((item, index) =>
                typeof item === "string" ? (
                  <li key={index}>{item}</li>
                ) : (
                  <li key={index}>
                    <h3 className="text-lg font-semibold">{item.subTitle}</h3>
                    <p>{item.content}</p>
                    {item.list && (
                      <ul className="list-disc pl-6">
                        {item.list.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {childObesityData.sections.map((section, index) => (
        <div key={index} className="flex flex-wrap">
          {renderSection(section)}
        </div>
      ))}
    </div>
  );
};

export default ChildObesity;
