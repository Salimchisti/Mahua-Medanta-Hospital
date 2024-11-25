import React from 'react';
import Layout from '../components/Layout';

const FractureManagement = () => (
  <Layout>
    <section className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="bg-white bg-opacity-90 mb-10 w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Fracture Management
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Expert care for bone fractures, from diagnosis to treatment and rehabilitation.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-8 text-gray-700">
        <h3 className="text-2xl font-semibold">What is Fracture Management?</h3>
        <p><strong>Fracture management</strong> refers to the comprehensive process of diagnosing, treating, and rehabilitating bone fractures. It involves the use of various medical treatments and procedures to ensure the proper healing of fractured bones, minimizing complications and restoring normal function as quickly as possible.</p>

        <h3 className="text-2xl font-semibold">Types of Fractures</h3>
        <p>Fractures can vary significantly depending on the type, location, and severity. Common types of fractures include:</p>
        <ul className="list-disc pl-5">
          <li><strong>Closed Fracture:</strong> The bone breaks but does not pierce the skin.</li>
          <li><strong>Open Fracture:</strong> The bone breaks and protrudes through the skin, increasing the risk of infection.</li>
          <li><strong>Comminuted Fracture:</strong> The bone is shattered into multiple pieces.</li>
          <li><strong>Greenstick Fracture:</strong> An incomplete fracture, often seen in children, where the bone bends but does not break completely.</li>
          <li><strong>Hairline Fracture:</strong> A small, thin crack in the bone that may be difficult to detect on X-rays.</li>
          <li><strong>Stress Fracture:</strong> A small crack or severe bruising typically caused by repetitive stress or overuse of a bone.</li>
        </ul>

        <h3 className="text-2xl font-semibold">Fracture Diagnosis</h3>
        <p>The first step in fracture management is proper diagnosis, which includes:</p>
        <ul className="list-disc pl-5">
          <li><strong>Physical Examination:</strong> The healthcare provider assesses the injury area for swelling, deformity, or pain.</li>
          <li><strong>X-Rays:</strong> The primary diagnostic tool used to determine the exact location, type, and severity of the fracture.</li>
          <li><strong>CT Scans/MRI:</strong> Advanced imaging techniques used when more detail is needed, especially for complex fractures or soft tissue injuries.</li>
        </ul>

        <h3 className="text-2xl font-semibold">Fracture Treatment</h3>
        <p>Fracture treatment depends on the type and location of the fracture. Common treatment methods include:</p>
        <ul className="list-disc pl-5">
          <li><strong>Immobilization:</strong> In many cases, fractures are treated by immobilizing the affected area using a cast, splint, or brace to allow the bone to heal properly.</li>
          <li><strong>Reduction:</strong> This is the process of realigning the bone to its proper position. It can be done manually (closed reduction) or through surgery (open reduction).</li>
          <li><strong>Internal Fixation:</strong> In some cases, metal rods, screws, or plates are used to stabilize the bone during healing.</li>
          <li><strong>External Fixation:</strong> A frame or external devices are used to stabilize fractures, especially in cases where surgery is not possible or there is extensive soft tissue damage.</li>
          <li><strong>Traction:</strong> In certain fractures, gentle pulling forces are applied to realign the bones.</li>
        </ul>

        <h3 className="text-2xl font-semibold">Surgical Intervention</h3>
        <p>In more complex fractures, surgical intervention may be required. This can include:</p>
        <ul className="list-disc pl-5">
          <li><strong>Open Reduction and Internal Fixation (ORIF):</strong> A surgical procedure where the bone is realigned, and metal hardware (plates, screws) is used to hold the bone in place during the healing process.</li>
          <li><strong>External Fixators:</strong> A surgical procedure where pins or screws are inserted into the bone and connected to an external frame to stabilize the bone during healing.</li>
          <li><strong>Bone Grafting:</strong> In some cases, bone grafts are needed to help regenerate new bone tissue in areas where the bone cannot heal on its own.</li>
        </ul>

        <h3 className="text-2xl font-semibold">Rehabilitation and Recovery</h3>
        <p>Once the bone is healed, rehabilitation plays a key role in restoring function, strength, and mobility. The rehabilitation process typically includes:</p>
        <ul className="list-disc pl-5">
          <li><strong>Physical Therapy:</strong> Exercises and techniques that help restore movement, flexibility, and strength to the affected area.</li>
          <li><strong>Occupational Therapy:</strong> In cases where daily functions are affected (e.g., hand fractures), therapy can assist in regaining the ability to perform daily activities.</li>
          <li><strong>Pain Management:</strong> Techniques such as medication, heat or cold therapy, and alternative methods are used to manage pain during recovery.</li>
        </ul>

        <h3 className="text-2xl font-semibold">Why is Fracture Management Important?</h3>
        <p>Proper fracture management is crucial to ensure:</p>
        <ul className="list-disc pl-5">
          <li>The bone heals correctly and is restored to its normal function.</li>
          <li>The risk of complications such as infections, joint stiffness, or long-term pain is minimized.</li>
          <li>The patient returns to their daily activities as soon as possible without further risk of injury.</li>
        </ul>
        <p>At our clinic, we use the latest techniques and treatments in fracture management to ensure optimal recovery and care. Our experienced team of orthopedic specialists works closely with you to provide personalized care every step of the way.</p>
      </div>
    </section>
  </Layout>
);

export default FractureManagement;
