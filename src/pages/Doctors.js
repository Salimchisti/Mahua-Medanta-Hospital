// components/Doctors.js
import React from 'react';

const doctors = [
  { id: 1, name: 'Dr. Omprakash Prasad', qualification: 'MBBS, MD', specialization: 'General Physician' },
  { id: 2, name: 'Dr. Yogesh Kumar', qualification: 'MBBS, MS', specialization: 'General Surgeon & Laparoscopy Surgeon' },
  { id: 3, name: 'Dr. Tajdar Hamesh', qualification: 'MBBS, MS Ortho', specialization: 'Orthopedic Joint Specialist' },
  { id: 4, name: 'Dr. Mohammad Anwar', qualification: 'MS', specialization: 'Consultant Physician and Surgeon' },
  { id: 5, name: 'Dr. Pooja Singh', qualification: 'MBBS', specialization: 'Gynaecology Expert' },
  { id: 6, name: 'Dr. Sanjay Gupta', qualification: 'MBBS, MS', specialization: 'Urologist Surgeon' },
  { id: 7, name: 'Dr. Athar Nomani', qualification: 'MBBS, MS', specialization: 'General and Cancer Surgeon' },
  { id: 8, name: 'Dr. Asim Parvez', qualification: 'MBBS, Dem (RCGP), PGDCC, CCEBDM, MIAE, MACC', specialization: 'Cardiologist' },
  { id: 9, name: 'Dr. Tasneem', qualification: 'MBBS, MS Ortho', specialization: 'Orthopedic Joint Specialist' },
  { id: 10, name: 'Dr. Nirmal Kumar', qualification: 'MBBS, MD, MS (Anesthetic)', specialization: 'General and Laparoscopy Surgeon' },
];

const Doctors = () => {
  return (
    <section className="doctors py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-center text-black mb-8">Meet Our Doctors</h3>
        <p className="mt-4 text-xl text-gray-600">Our experienced and caring doctors are here to provide expert care.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="doctor-item bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:border-transparent hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <h4 className="font-semibold text-gray-900 text-xl">{doctor.name}</h4>
              <p className="text-gray-600 mt-2">{doctor.qualification}</p>
              <p className="text-gray-600 mt-2">{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
