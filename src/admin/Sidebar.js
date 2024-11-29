import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-l font-bold mb-6">Mahua Medanta Hospital</h2>
      {/* Admin Profile */}
      <div className="mb-6">
        <p className="text-white font-semibold">Admin</p>
      </div>
      <ul>
        <li>
          <Link to="/admin/appointments" className="block py-2 px-4 hover:bg-gray-600">
            Manage Appointments
          </Link>
        </li>
        <li>
          <Link to="/admin/callback-requests" className="block py-2 px-4 hover:bg-gray-600">
            Callback Requests
          </Link>
        </li>
        <li>
          <Link to="/admin/doctor-appointments" className="block py-2 px-4 hover:bg-gray-600">
            Doctor Appointments
          </Link>
        </li>
        <li>
          <Link to="/admin/lab-tests" className="block py-2 px-4 hover:bg-gray-600">
            Lab Tests
          </Link>
        </li>
        <li>
          <Link to="/admin/insurance" className="block py-2 px-4 hover:bg-gray-600">
            Insurance
          </Link>
        </li>
        <li>
          <Link to="/admin/contactus" className="block py-2 px-4 hover:bg-gray-600">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
