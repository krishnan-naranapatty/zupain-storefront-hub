
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ShiprocketOrdersHeader from '@/components/ShiprocketOrdersHeader';
import ShiprocketOrdersFilters from '@/components/ShiprocketOrdersFilters';
import ShiprocketOrdersTable from '@/components/ShiprocketOrdersTable';
import { useTheme } from '@/contexts/ThemeContext';

const ShiprocketOrders = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    status: 'all',
    dateRange: 'all',
    courier: 'all'
  });
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          <ShiprocketOrdersHeader />
          <ShiprocketOrdersFilters 
            activeFilters={activeFilters} 
            onFilterChange={handleFilterChange} 
          />
          <ShiprocketOrdersTable activeFilters={activeFilters} />
        </main>
      </div>
    </div>
  );
};

export default ShiprocketOrders;
