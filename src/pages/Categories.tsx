
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CategoriesHeader from '@/components/CategoriesHeader';
import CategoriesFilters from '@/components/CategoriesFilters';
import CategoriesTable from '@/components/CategoriesTable';
import { useTheme } from '@/contexts/ThemeContext';

const Categories = () => {
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
          <CategoriesHeader />
          <CategoriesFilters />
          <CategoriesTable />
        </main>
      </div>
    </div>
  );
};

export default Categories;
