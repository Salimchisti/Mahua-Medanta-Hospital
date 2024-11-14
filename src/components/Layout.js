// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => (
  <div className="min-h-screen text-white">
    <main className="p-4 min-h-screen flex flex-col overflow-auto">
      {children}
    </main>
  </div>
);

export default Layout;
