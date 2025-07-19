
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OrdersHeader from '@/components/OrdersHeader';
import OrdersFilter from '@/components/OrdersFilter';
import OrdersTable from '@/components/OrdersTable';
import OrderDetails from '@/components/OrderDetails';
import ShiprocketOrdersView from '@/components/ShiprocketOrdersView';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';

const Orders = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showShiprocketOrders, setShowShiprocketOrders] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  const toggleShiprocketOrders = () => {
    setShowShiprocketOrders(!showShiprocketOrders);
  };

  const handleOrderClick = (orderId: string) => {
    setSelectedOrderId(orderId);
  };

  const handleBackToOrders = () => {
    setSelectedOrderId(null);
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          {selectedOrderId ? (
            <OrderDetails 
              orderId={selectedOrderId} 
              onBack={handleBackToOrders} 
            />
          ) : (
            <>
              <OrdersHeader 
                showShiprocketOrders={showShiprocketOrders}
                onToggleShiprocketOrders={toggleShiprocketOrders}
              />
              
              {showShiprocketOrders ? (
                <ShiprocketOrdersView />
              ) : (
                <>
                  <OrdersFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
                  <OrdersTable activeFilter={activeFilter} onOrderClick={handleOrderClick} />
                </>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Orders;
