import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
          <p className="text-gray-600 mt-1">
            View and manage various sections of the admin panel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Appointments */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <Link to="/admin/appointments" className="block">
              <h3 className="text-xl font-semibold text-gray-800">Total Appointments</h3>
              <p className="text-gray-600 mt-2">Manage all patient appointments here.</p>
            </Link>
          </div>

          {/* Callback Requests */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <Link to="/admin/callback-requests" className="block">
              <h3 className="text-xl font-semibold text-gray-800">Callback Requests</h3>
              <p className="text-gray-600 mt-2">View and manage callback requests.</p>
            </Link>
          </div>

          {/* Doctor Appointments */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <Link to="/admin/doctor-appointments" className="block">
              <h3 className="text-xl font-semibold text-gray-800">Doctor Appointments</h3>
              <p className="text-gray-600 mt-2">Handle doctor-specific appointments.</p>
            </Link>
          </div>

          {/* Lab Tests */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <Link to="/admin/lab-tests" className="block">
              <h3 className="text-xl font-semibold text-gray-800">Lab Tests</h3>
              <p className="text-gray-600 mt-2">Manage lab test bookings and details.</p>
            </Link>
          </div>

          {/* Insurance Plans */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <Link to="/admin/insurance" className="block">
              <h3 className="text-xl font-semibold text-gray-800">Insurance Requests</h3>
              <p className="text-gray-600 mt-2">Handle insurance plan applications.</p>
            </Link>
          </div>

          {/* Admin Contact Us */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <Link to="/admin/contactus" className="block">
              <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
              <p className="text-gray-600 mt-2">Manage contact requests and feedback from users.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
