import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />; // Redirect to login if not authenticated
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
