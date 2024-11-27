import React from "react";
import vitaminDImage from "../../assets/images/vitaminD.jpeg"; // Import the image

const VitaminD = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="p-8 max-w-7xl mx-auto mt-5 flex-grow">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Understanding Vitamin D
        </h1>

        {/* Intro Paragraphs */}
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          The body needs nutrients in small amounts to function and stay healthy. Vitamin D helps the body use calcium and phosphorus to build strong bones and teeth. It is fat-soluble...
        </p>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Vitamin deficiency occurs when your body does not have enough vitamin D...
        </p>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Vitamin D is required for a variety of biological activities...
        </p>

        {/* Two-Column Layout for Larger Screens */}
        <div className="flex flex-col lg:flex-row">
          {/* Text Column */}
          <div className="flex-1 lg:pr-6 mb-6 lg:mb-0">
            {/* Vitamin D Deficiency Causes */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Vitamin D Deficiency Causes
              </h2>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                <li>
                  <strong className="text-gray-800">Diet:</strong> People who do not consume enough vitamin D-rich foods, such as fortified dairy products and cereals, may have low levels.
                </li>
                <li>
                  <strong className="text-gray-800">Smoking:</strong> Deficiency levels are higher in smokers...
                </li>
              </ul>
            </div>

            {/* Symptoms of Vitamin D Deficiency */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Symptoms of Vitamin D Deficiency
              </h2>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                <li>Bone pain.</li>
                <li>Loss of hair.</li>
                <li>Appetite loss.</li>
                <li>Muscle fatigue.</li>
              </ul>
            </div>

            {/* Treatment */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Treatment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To maintain an appropriate vitamin D level in your body, you may also find it helpful to eat more vitamin D-rich foods...
              </p>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Conclusion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Vitamin D is essential for the proper health of the body...
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 lg:pl-6">
            <img
              src={vitaminDImage} // Use the imported image here
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
