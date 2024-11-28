import React from 'react';
import mainNeurologyImg from '../assets/images/neurology-.webp';

const neurologyData = {
    title: "Neurology and Neurosurgery",
    image: mainNeurologyImg,
    brief: "Neurology focuses on diagnosing and managing nervous system disorders, while Neurosurgery involves surgical interventions for brain, spine, and nerve-related conditions. Together, they provide comprehensive care for complex neurological issues.",
    description: "Mahua Medanta Hospital is one of the best Neurology Hospitals and has the Best Neurosurgeon in Patna. You must visit our hospital to get the best treatment for your neurological disease. At Mahua Medanta Hospital, there are highly experienced Neurosurgeons in our Neurology Department. We have maintained our reputation by providing world-class facilities to our patients.",
    impactNote: "Having a neurological disease can leave a deep impact not just on you but on loved ones as well. It is important to seek medical assistance and the best Neurologist doctor from us as soon as possible when detecting any neurological symptoms. Mahua Medanta Hospital is known for treating various other problems as well.",
    services: [
        {
            name: "Excision of Lobe (Frontal, Temporal, Cerebellum, etc.)",
            description: "Performed in early-stage non-small cell lung cancer patients. Not performed on patients with cancer spread to other parts."
        },
        {
            name: "Ventricular Tapping",
            description: "Performed by qualified medical staff, this surgical aseptic procedure is usually done by neurosurgeons."
        },
        {
            name: "Placement of ICP (Intracranial Pressure)",
            description: "A device inside the head senses the pressure within the skull and records the frequency. This area of the brain contains cerebrospinal fluid."
        },
        // Additional services can go here...
    ]
};

const Neurology = () => {
    return (
        <div className="px-4 sm:px-6 md:px-12 py-8">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6">{neurologyData.title}</h1>

            {/* Brief Description */}
            <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-8 italic">{neurologyData.brief}</p>

            {/* Main Image */}
            <div className="flex justify-center mb-8">
                <img 
                    src={neurologyData.image} 
                    alt="Neurology and Neurosurgery" 
                    className="rounded-lg shadow-lg w-full max-w-screen-sm md:max-w-3xl"
                />
            </div>

            {/* Detailed Description */}
            <p className="text-gray-700 text-sm sm:text-base mb-6">{neurologyData.description}</p>
            <p className="text-gray-700 font-semibold text-sm sm:text-base mb-8">{neurologyData.impactNote}</p>

            {/* Services Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-6">Our Scope of Services:</h2>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {neurologyData.services.map((service, index) => (
                    <li key={index}>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-sm sm:text-base">{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Neurology;
