import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageLabTestsPage = () => {
  const [labTests, setLabTests] = useState([]);
  const [newLabTest, setNewLabTest] = useState({ name: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingLabTest, setEditingLabTest] = useState(null);

  useEffect(() => {
    fetchLabTests();
  }, []);

  const fetchLabTests = async () => {
    try {
      const response = await axios.get("/api/lab-tests");
      setLabTests(response.data);
    } catch (error) {
      console.error("Error fetching lab tests:", error);
    }
  };

  const addLabTest = async () => {
    try {
      const response = await axios.post("/api/lab-tests", newLabTest);
      setLabTests([...labTests, response.data]);
      setNewLabTest({ name: "", description: "" });
    } catch (error) {
      console.error("Error adding lab test:", error);
    }
  };

  const handleEdit = (labTest) => {
    setIsEditing(true);
    setEditingLabTest(labTest);
    setNewLabTest({ name: labTest.name, description: labTest.description });
  };

  const saveLabTest = async () => {
    try {
      const response = await axios.put(`/api/lab-tests/${editingLabTest.id}`, newLabTest);
      const updatedLabTests = labTests.map((test) =>
        test.id === editingLabTest.id ? response.data : test
      );
      setLabTests(updatedLabTests);
      setIsEditing(false);
      setNewLabTest({ name: "", description: "" });
      setEditingLabTest(null);
    } catch (error) {
      console.error("Error saving lab test:", error);
    }
  };

  const deleteLabTest = async (id) => {
    try {
      await axios.delete(`/api/lab-tests/${id}`);
      setLabTests(labTests.filter((labTest) => labTest.id !== id));
    } catch (error) {
      console.error("Error deleting lab test:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Manage Lab Tests</h1>

      {/* Form to add or edit lab test */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={newLabTest.name}
          onChange={(e) => setNewLabTest({ ...newLabTest, name: e.target.value })}
          placeholder="Lab Test Name"
          className="p-2 border border-gray-300 rounded w-full md:w-1/3"
        />
        <input
          type="text"
          value={newLabTest.description}
          onChange={(e) => setNewLabTest({ ...newLabTest, description: e.target.value })}
          placeholder="Lab Test Description"
          className="p-2 border border-gray-300 rounded w-full md:w-1/3"
        />
        <button
          onClick={isEditing ? saveLabTest : addLabTest}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          {isEditing ? "Save" : "Add Lab Test"}
        </button>
      </div>

      {/* Responsive Lab Tests Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {labTests.map((labTest) => (
              <tr key={labTest.id} className="border-t">
                <td className="border px-4 py-2">{labTest.id}</td>
                <td className="border px-4 py-2">{labTest.name}</td>
                <td className="border px-4 py-2">{labTest.description}</td>
                <td className="border px-4 py-2 flex flex-col md:flex-row gap-2">
                  <button
                    onClick={() => handleEdit(labTest)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded w-full md:w-auto"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteLabTest(labTest.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded w-full md:w-auto"
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

export default ManageLabTestsPage;
