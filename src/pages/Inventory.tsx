
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useTheme } from '@/contexts/ThemeContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductsHeader from '@/components/ProductsHeader';
import ProductsFilters from '@/components/ProductsFilters';
import ProductsTable from '@/components/ProductsTable';
import ProductsGrid from '@/components/ProductsGrid';

const Inventory = () => {
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
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products" className="mt-6 space-y-6">
                <ProductsHeader />
                <ProductsFilters viewMode={viewMode} onViewModeChange={handleViewModeChange} />
                {viewMode === 'list' ? <ProductsTable /> : <ProductsGrid />}
              </TabsContent>
              
              <TabsContent value="inventory" className="mt-6">
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory Management</h2>
                  <p className="text-gray-600">Inventory tracking and management features coming soon...</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
