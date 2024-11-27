import React from 'react';
import Sidebar from '../admin/Sidebar'; // Sidebar component
import { Outlet } from 'react-router-dom'; // This will be used to display content for each page

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          {/* You can add other components here like user profile, logout button, etc. */}
        </header>

        {/* Outlet to render the current page content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
