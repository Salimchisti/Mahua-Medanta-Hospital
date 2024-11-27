import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminContactUsPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/contact-us'); // Assuming the API returns a list of messages
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`/api/contact-us/${id}`);
      setMessages(messages.filter((message) => message.id !== id)); // Remove deleted message from state
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const markAsRead = async (id) => {
    try {
      await axios.put(`/api/contact-us/${id}`, { read: true });
      setMessages(messages.map((msg) =>
        msg.id === id ? { ...msg, read: true } : msg
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Admin - Contact Us Messages</h1>

      {/* Message Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Message</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id} className="border-t">
                <td className="border px-4 py-2">{message.id}</td>
                <td className="border px-4 py-2">{message.name}</td>
                <td className="border px-4 py-2">{message.email}</td>
                <td className="border px-4 py-2">{message.message}</td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    onClick={() => markAsRead(message.id)}
                    className={`bg-${message.read ? 'green' : 'yellow'}-500 text-white px-3 py-1 rounded`}
                  >
                    {message.read ? 'Read' : 'Mark as Read'}
                  </button>
                  <button
                    onClick={() => deleteMessage(message.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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

export default AdminContactUsPage;
