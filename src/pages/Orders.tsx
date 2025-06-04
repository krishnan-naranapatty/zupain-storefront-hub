
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

const Orders = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Orders</h1>
            <p className="text-gray-600">Orders management coming soon...</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
