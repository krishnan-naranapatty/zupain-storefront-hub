
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OrdersHeader from '@/components/OrdersHeader';
import OrdersFilter from '@/components/OrdersFilter';
import OrdersTable from '@/components/OrdersTable';
import OrderDetails from '@/components/OrderDetails';
import CustomerDetails from '@/components/CustomerDetails';
import EditOrderForm from '@/components/EditOrderForm';
import ShiprocketOrdersView from '@/components/ShiprocketOrdersView';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';

const Orders = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showShiprocketOrders, setShowShiprocketOrders] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [editingOrderId, setEditingOrderId] = useState<string | null>(null);
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

  const handleOrderEdit = (orderId: string) => {
    setEditingOrderId(orderId);
  };

  const handleBackToOrders = () => {
    setSelectedOrderId(null);
    setSelectedCustomerId(null);
    setEditingOrderId(null);
  };

  const handleViewCustomer = (customerId: string) => {
    setSelectedCustomerId(customerId);
  };

  const handleBackToOrderDetails = () => {
    setSelectedCustomerId(null);
  };

  const handleBackFromEdit = () => {
    setEditingOrderId(null);
  };

  const handleSaveOrder = (orderData: any) => {
    // Handle save logic here
    console.log('Saving order:', orderData);
    setEditingOrderId(null);
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          {selectedCustomerId ? (
            <CustomerDetails 
              customerId={selectedCustomerId} 
              onBack={handleBackToOrderDetails} 
            />
          ) : editingOrderId ? (
            <EditOrderForm 
              orderId={editingOrderId} 
              onBack={handleBackFromEdit}
              onSave={handleSaveOrder}
            />
          ) : selectedOrderId ? (
            <OrderDetails 
              orderId={selectedOrderId} 
              onBack={handleBackToOrders}
              onViewCustomer={handleViewCustomer}
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
                  <OrdersTable 
                    activeFilter={activeFilter} 
                    onOrderClick={handleOrderClick}
                    onOrderEdit={handleOrderEdit}
                  />
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
