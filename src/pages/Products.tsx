
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProductsHeader from '@/components/ProductsHeader';
import ProductsFilters from '@/components/ProductsFilters';
import ProductsTable from '@/components/ProductsTable';
import ProductsGrid from '@/components/ProductsGrid';
import { useTheme } from '@/contexts/ThemeContext';

const Products = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          <ProductsHeader />
          <ProductsFilters viewMode={viewMode} onViewModeChange={handleViewModeChange} />
          {viewMode === 'list' ? <ProductsTable /> : <ProductsGrid />}
        </main>
      </div>
    </div>
  );
};

export default Products;
