
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CouponsHeader from '@/components/CouponsHeader';
import CouponsTable from '@/components/CouponsTable';
import EditCouponDrawer from '@/components/EditCouponDrawer';
import { useTheme } from '@/contexts/ThemeContext';

const Coupons = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleEditCoupon = (coupon: any) => {
    setSelectedCoupon(coupon);
    setEditDrawerOpen(true);
  };

  const handleCloseEditDrawer = () => {
    setEditDrawerOpen(false);
    setSelectedCoupon(null);
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          <CouponsHeader />
          <CouponsTable onEditCoupon={handleEditCoupon} />
        </main>
      </div>

      <EditCouponDrawer
        isOpen={editDrawerOpen}
        onClose={handleCloseEditDrawer}
        coupon={selectedCoupon}
      />
    </div>
  );
};

export default Coupons;
