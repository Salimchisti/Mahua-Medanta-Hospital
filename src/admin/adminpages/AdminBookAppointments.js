import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminBookAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("/api/appointments"); // Fetch appointments from your backend
        setAppointments(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching appointments", err);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      await axios.patch(`/api/appointments/${appointmentId}`, { status });
      setAppointments((prevAppointments) =>
        prevAppointments.map((apt) =>
          apt._id === appointmentId ? { ...apt, status } : apt
        )
      );
    } catch (err) {
      console.error("Error updating status", err);
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      await axios.delete(`/api/appointments/${appointmentId}`);
      setAppointments((prevAppointments) =>
        prevAppointments.filter((apt) => apt._id !== appointmentId)
      );
    } catch (err) {
      console.error("Error deleting appointment", err);
    }
  };

  if (loading) return <p>Loading appointments...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
        Manage Book Appointments
      </h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Patient Name</th>
              <th className="border px-4 py-2 text-left">Doctor</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Time</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="border-t">
                <td className="border px-4 py-2">{appointment.patientName}</td>
                <td className="border px-4 py-2">{appointment.doctor}</td>
                <td className="border px-4 py-2">{appointment.appointmentDate}</td>
                <td className="border px-4 py-2">{appointment.appointmentTime}</td>
                <td className="border px-4 py-2">{appointment.status}</td>
                <td className="border px-4 py-2">
                  <div className="flex flex-col md:flex-row gap-2">
                    <button
                      onClick={() =>
                        updateAppointmentStatus(appointment._id, "Approved")
                      }
                      disabled={appointment.status === "Approved"}
                      className={`px-3 py-1 rounded text-white ${
                        appointment.status === "Approved"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500"
                      }`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() =>
                        updateAppointmentStatus(appointment._id, "Rejected")
                      }
                      disabled={appointment.status === "Rejected"}
                      className={`px-3 py-1 rounded text-white ${
                        appointment.status === "Rejected"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-yellow-500"
                      }`}
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleDelete(appointment._id)}
                      className="px-3 py-1 rounded bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookAppointments;
