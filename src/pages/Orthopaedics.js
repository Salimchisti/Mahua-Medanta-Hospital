import React from 'react';
import orthopaedicsImage from '../assets/images/kneeHip.jpg'; // Path to the image

const Orthopaedics = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
        {/* Description Section */}
        <div className="md:w-1/2 text-center md:text-left md:mr-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Orthopaedics, Joint Replacement & Arthroscopy</h2>
          <p className="text-lg text-gray-600 mb-4">
            Time has changed. The Department of Orthopaedics at Mahua Medanta Hospital is a centre of excellence in Joint Replacement, Trauma, and Arthroscopy & Spine surgery. Our dedicated Orthopaedic surgeons have received training from top institutes in the country and abroad. 
            We are equipped with state-of-the-art modular operation theatres, laminar air flow, and the latest instruments, ensuring the best possible results in surgical outcomes and patient care.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Fracture Clinics are run daily for patients referred through A&E, and we also have a dedicated direct referral line for GPs. This allows for follow-up treatment without the need to visit A&E again, making the access pathway faster and easier for our patients.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to provide highly evidence-based treatment plans with a combination of engineering-like approaches for accuracy and safety. We also offer specialized care from orthopaedic spine and pediatric orthopaedic surgeons.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Orthopaedics is the study of the musculoskeletal system. Our surgeons specialize in diagnosing and treating musculoskeletal issues. 
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8">Services / Treatment available at Mahua Medanta Hospital</h3>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Trauma surgery (Complex Fractures, Polytrauma, Pelvis & Acetabular surgery)</li>
            <li>Joint Replacement Surgery (TKR, UKR, THR, HRA, Revision surgeries)</li>
            <li>Knee & Shoulder Arthroscopy (ACL, PCL, Meniscus repair, Rotator cuff, etc.)</li>
            <li>Spine surgery (Vertebral Fracture, Micro-lumbar discectomy, TLIF/PLIF/ALIF)</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={orthopaedicsImage} 
            alt="Orthopaedics Department" 
            className="w-full h-auto rounded-xl shadow-lg object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Orthopaedics;
