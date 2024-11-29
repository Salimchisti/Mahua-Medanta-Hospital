import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
    setLoading(false);  // Once authentication check is complete, stop loading
  }, []);

  const handleLogout = () => {
    setShowProfileMenu(false);  // Close the dropdown
    localStorage.setItem('isAuthenticated', 'false');  // Update the authentication status
    navigate('/admin/login');  // Redirect to login page
  };

  // If still loading, show nothing or a loading spinner
  if (loading) {
    return <div>Loading...</div>; // Or a spinner/loading indicator
  }

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
          <div className="relative">
            <FaUserCircle
              className="text-3xl cursor-pointer"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
