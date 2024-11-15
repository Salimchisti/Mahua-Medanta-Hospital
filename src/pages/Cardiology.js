import React from 'react';
import img from '../assets/images/Cardiology-.jpg'


const Cardiology = () => {
  return (
    <div className="cardiology-container flex flex-col md:flex-row items-center mt-8">
      {/* Image Section */}
      <div className="image-section w-full md:w-1/2 mb-6 md:mb-0">
        <img 
          src={img} 
          alt="Cardiology and Cardiothoracic Surgery" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-section w-full md:w-1/2 pl-6">
        <h1 className="text-center text-4xl font-semibold mb-6">Cardiologist and Cardiothoracic Surgeon in Bihar</h1>
        
        <p className="text-lg mb-4">
          Mahua Medanta Hospital is the best hospital for heart surgery at Mahua. The Department of Cardiac Surgery and 
          Cardiac Anesthesia is a composite unit with state-of-the-art equipment to handle open-heart surgeries for both 
          adults and pediatric patients in its two operation theatres.
        </p>

        <p className="text-lg mb-4">
          The centre offers treatment for a wide range of cardiac cases, from neonates to adults, from routine to the 
          very complicated. Our cardiology and cardiothoracic surgery department regularly performs the following procedures:
        </p>

        <ul className="list-disc pl-6 mb-4 ">
          <li><strong>Coronary Angiography:</strong> A procedure using special material and x-rays to see the flow of blood 
              through the arteries in your heart.</li>
          <li><strong>Coronary Catheterization:</strong> A minimally invasive procedure to access the coronary circulation and 
              blood-filled chambers of the heart using a catheter.</li>
          <li><strong>Coronary Angioplasty:</strong> Also known as percutaneous coronary intervention, this non-surgical 
              procedure is used to treat narrowing of the coronary arteries in heart disease.</li>
          <li><strong>Coronary Bypass Grafting (CABG):</strong> Surgery to improve blood flow to the heart, used for severe 
              coronary heart disease.</li>
          <li><strong>Heart Valve Replacement Surgery:</strong> Open-heart surgery to repair or replace damaged heart valves.</li>
          <li><strong>Temporary and Permanent Pacemaker Implantation:</strong> Pacemaker implantation as required for heart rhythm 
              disorders.</li>
          <li><strong>Congenital Heart Defect Surgery:</strong> Surgery to correct heart defects in newborns.</li>
          <li><strong>Electrophysiological Studies:</strong> Procedures like AV node ablation to treat atrial fibrillation.</li>
          <li><strong>Treatment of Stenotic Heart Valves:</strong> Valve replacement via transcatheter aortic valve replacement 
              (TAVR) or open-heart surgery.</li>
        </ul>

        <p className="text-lg">
          Our cardiothoracic surgeons at Mahua Medanta Memorial Hospital are experts in coronary artery bypass surgeries, total 
          arterial revascularisation, redo beating heart bypass surgeries, and minimally invasive (keyhole) surgeries.
        </p>
      </div>
    </div>
  );
};

export default Cardiology;
