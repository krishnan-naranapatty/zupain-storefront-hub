
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OrdersHeader from '@/components/OrdersHeader';
import OrdersFilter from '@/components/OrdersFilter';
import OrdersTable from '@/components/OrdersTable';
import ShiprocketOrdersView from '@/components/ShiprocketOrdersView';
import { useTheme } from '@/contexts/ThemeContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Truck } from 'lucide-react';

const Orders = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('regular');
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          <OrdersHeader />
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="regular" className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>Regular Orders</span>
              </TabsTrigger>
              <TabsTrigger value="shiprocket" className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Shiprocket Orders</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="regular" className="space-y-6">
              <OrdersFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
              <OrdersTable activeFilter={activeFilter} />
            </TabsContent>
            
            <TabsContent value="shiprocket" className="space-y-6">
              <ShiprocketOrdersView />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Orders;
