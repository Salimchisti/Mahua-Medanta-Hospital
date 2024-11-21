import React from 'react';

// Import images
import balancedDietImage from "../../assets/images/deit.png";
import exerciseImage from "../../assets/images/exercise1.jpg";
import sleepImage from "../../assets/images/sleep.jpg";
import stressImage from "../../assets/images/stress2.jpeg";
import socialConnectionsImage from "../../assets/images/social-Connections.png";
import avoidSmokingImage from "../../assets/images/AviodSmoking1.jpeg";
import hygieneImage from "../../assets/images/hygiene1.jpg";
import mentalHealthImage from "../../assets/images/mental-health.jpeg";
import healthScreeningsImage from "../../assets/images/health-screenings.jpg";
import positiveAttitudeImage from "../../assets/images/positive-attitude.jpg";

const HealthyLifeStyle = () => {
  const sections = [
    {
      image: balancedDietImage,
      title: "1. Maintain a Balanced Diet",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Fruits and Vegetables:</strong> Fill half your plate with fruits and vegetables. They provide vitamins, minerals, and fiber.</li>
          <li><strong>Whole Grains:</strong> Opt for whole grains like oats, brown rice, and whole wheat over refined grains. They are richer in fiber and help with digestion.</li>
          <li><strong>Lean Proteins:</strong> Include lean sources of protein like chicken, fish, beans, nuts, and legumes. These help in building muscles and repairing tissues.</li>
          <li><strong>Healthy Fats:</strong> Choose unsaturated fats found in olive oil, nuts, seeds, and avocados while limiting saturated fats and trans fats.</li>
          <li><strong>Hydration:</strong> Drink plenty of water. Staying hydrated helps maintain the balance of bodily fluids and supports many essential bodily functions.</li>
        </ul>
      ),
    },
    {
      image: exerciseImage,
      title: "2. Exercise Regularly",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Cardiovascular Exercise:</strong> Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity every week.</li>
          <li><strong>Strength Training:</strong> Include strength training exercises at least twice a week to build muscle mass.</li>
          <li><strong>Flexibility and Balance Exercises:</strong> Practice yoga or stretching exercises to improve flexibility and reduce injury risks.</li>
        </ul>
      ),
    },
    {
      image: sleepImage,
      title: "3. Get Enough Sleep",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Quality and Quantity:</strong> Adults should aim for 7-9 hours of sleep per night.</li>
          <li><strong>Create a Sleep Routine:</strong> Go to bed and wake up at the same time each day.</li>
          <li><strong>Optimize Your Sleep Environment:</strong> Keep your room dark, quiet, and cool.</li>
        </ul>
      ),
    },
    {
      image: stressImage,
      title: "4. Manage Stress Effectively",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Mindfulness and Meditation:</strong> Practice mindfulness or meditation regularly.</li>
          <li><strong>Physical Activity:</strong> Exercise can reduce stress and improve mood.</li>
          <li><strong>Time Management:</strong> Manage your tasks to avoid feeling overwhelmed.</li>
        </ul>
      ),
    },
    {
      image: socialConnectionsImage,
      title: "5. Maintain Social Connections",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Stay Connected:</strong> Keep in touch with family and friends regularly.</li>
          <li><strong>Join a Community Group:</strong> Participate in group activities to feel a sense of belonging.</li>
          <li><strong>Seek Support:</strong> Reach out if you feel isolated.</li>
        </ul>
      ),
    },
    {
      image: avoidSmokingImage,
      title: "6. Avoid Smoking and Limit Alcohol",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Quit Smoking:</strong> Seek help to quit smoking.</li>
          <li><strong>Limit Alcohol Intake:</strong> Drink in moderation, up to one drink a day for women and two for men.</li>
        </ul>
      ),
    },
    {
      image: hygieneImage,
      title: "7. Practice Good Hygiene",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Hand Washing:</strong> Wash hands frequently with soap and water.</li>
          <li><strong>Oral Hygiene:</strong> Brush your teeth twice a day and floss daily.</li>
          <li><strong>Clean Environment:</strong> Keep your environment clean to prevent germs.</li>
        </ul>
      ),
    },
    {
      image: mentalHealthImage,
      title: "8. Stay Mentally Active",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Learn New Skills:</strong> Keep your brain active by learning new things.</li>
          <li><strong>Read Regularly:</strong> Reading stimulates mental activity.</li>
          <li><strong>Puzzles and Games:</strong> Engage in activities that challenge your brain.</li>
        </ul>
      ),
    },
    {
      image: healthScreeningsImage,
      title: "9. Get Regular Health Screenings",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Routine Check-ups:</strong> Visit your healthcare provider regularly.</li>
          <li><strong>Monitor Key Health Indicators:</strong> Track your blood pressure, cholesterol, and other vital metrics.</li>
          <li><strong>Follow Medical Advice:</strong> Take medications as prescribed and follow your doctor's guidance.</li>
        </ul>
      ),
    },
    {
      image: positiveAttitudeImage,
      title: "10. Embrace a Positive Attitude",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Practice Gratitude:</strong> Write down things you're thankful for daily.</li>
          <li><strong>Stay Optimistic:</strong> Focus on solutions and stay hopeful.</li>
          <li><strong>Self-Compassion:</strong> Be kind to yourself during challenging times.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <div className="p-4 md:p-8 mx-auto max-w-screen-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">10 Tips for a Healthy Lifestyle</h2>

        {/* Section Container */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-8`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-4">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
              {section.content}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default HealthyLifeStyle;