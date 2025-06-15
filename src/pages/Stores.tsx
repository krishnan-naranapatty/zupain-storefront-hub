
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StoresHeader from '@/components/StoresHeader';
import StoresFilters from '@/components/StoresFilters';
import StoresTable from '@/components/StoresTable';
import { useTheme } from '@/contexts/ThemeContext';

const Stores = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          <StoresHeader />
          <StoresFilters />
          <StoresTable />
        </main>
      </div>
    </div>
  );
};

export default Stores;
