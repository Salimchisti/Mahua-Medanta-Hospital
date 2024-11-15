// Neurology.js

import React from 'react';
import mainNeurologyImg from '../assets/images/neurology-.webp';

const neurologyData = {
    title: "Neurology and Neurosurgery",
    image: mainNeurologyImg,
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
        {
            name: "Vascular Malformation",
            description: "Includes congenital vascular anomalies of veins, lymph vessels, or both arteries and veins."
        },
        {
            name: "Median Nerve Decompression",
            description: "Recommended when conservative treatment fails to relieve symptoms of CTS or signs of thenar muscle weakness."
        },
        {
            name: "Peripheral Nerve Surgery",
            description: "Includes nerve injuries, entrapment neuropathies, and nerve sheath tumors. Practiced by surgeons with expertise in neurological, plastic, reconstructive, and orthopedic surgery."
        },
        {
            name: "Nerve Biopsy",
            description: "A procedure where a piece of the nerve is removed and examined under a microscope."
        },
        {
            name: "Brain Biopsy",
            description: "Takes a sample of abnormal brain tissue for examination to determine tumor type and cancer status."
        },
        {
            name: "Anterior Cervical Discectomy and Fusion (ACDF)",
            description: "Surgery to remove a herniated or degenerative disc in the neck by making an opening in the throat area."
        },
        {
            name: "Anterolateral Decompression of Spine",
            description: "Allows a one-stage decompression of neural tissue and spinal stabilization with metallic prosthesis and bone grafting."
        },
        {
            name: "Brain Mapping",
            description: "Used for treatment and diagnosis of neurodegenerative diseases like Parkinson's and Alzheimer's."
        },
        {
            name: "Depressed Fracture",
            description: "A skull fracture where the fragment is depressed below the normal surface. Our neurosurgeons are experts in treating trauma fractures."
        },
        {
            name: "Cerebrovascular Disorders",
            description: "Includes stroke, carotid stenosis, vertebral stenosis, aneurysms, and vascular malformations. Issues arise from vessel narrowing, rupture, clot formation, or blockage."
        },
        {
            name: "Craniotomy",
            description: "Common operation for brain tumors. A piece of the skull is removed for brain surgery access. Pre-operative scanning helps locate the tumor."
        }
    ]
};

const Neurology = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center text-black mb-4">{neurologyData.title}</h1>
            
            {/* Main Image */}
            <div className="flex justify-center mb-8">
                <img src={neurologyData.image} alt="Neurology and Neurosurgery" className="rounded-lg shadow-lg w-full max-w-3xl" />
            </div>

            <p className="text-gray-700 mb-6">{neurologyData.description}</p>
            <p className="text-gray-700 font-semibold mb-8">{neurologyData.impactNote}</p>

            {/* Services Section */}
            <h2 className="text-2xl font-semibold text-black mb-4">Our Scope of Services:</h2>
            <ul className="list-disc list-inside text-gray-700">
                {neurologyData.services.map((service, index) => (
                    <li key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Neurology;
