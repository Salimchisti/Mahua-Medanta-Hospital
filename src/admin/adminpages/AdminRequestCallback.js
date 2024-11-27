import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminRequestCallback = () => {
  const [callbacks, setCallbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all callback requests
  useEffect(() => {
    const fetchCallbacks = async () => {
      try {
        const response = await axios.get("/api/callback-requests");
        setCallbacks(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching callback requests", err);
        setLoading(false);
      }
    };

    fetchCallbacks();
  }, []);

  // Function to update the callback status
  const updateCallbackStatus = async (id, status) => {
    try {
      await axios.patch(`/api/callback-requests/${id}`, { status });
      setCallbacks((prevCallbacks) =>
        prevCallbacks.map((cb) =>
          cb._id === id ? { ...cb, status } : cb
        )
      );
    } catch (err) {
      console.error("Error updating callback status", err);
    }
  };

  // Function to delete a callback request
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/callback-requests/${id}`);
      setCallbacks((prevCallbacks) =>
        prevCallbacks.filter((cb) => cb._id !== id)
      );
    } catch (err) {
      console.error("Error deleting callback request", err);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading callback requests...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Callback Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Phone</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Preferred Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Reason</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {callbacks.map((callback) => (
              <tr key={callback._id} className="border-t">
                <td className="px-4 py-2 text-sm text-gray-700">{callback.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{callback.phone}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{callback.email || "N/A"}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{callback.preferredTime || "Anytime"}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{callback.reason || "No reason provided"}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{callback.status}</td>
                <td className="px-4 py-2 flex flex-col md:flex-row gap-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 disabled:bg-gray-300"
                    onClick={() => updateCallbackStatus(callback._id, "Completed")}
                    disabled={callback.status === "Completed"}
                  >
                    Completed
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 disabled:bg-gray-300"
                    onClick={() => updateCallbackStatus(callback._id, "Pending")}
                    disabled={callback.status === "Pending"}
                  >
                    Pending
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(callback._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRequestCallback;
