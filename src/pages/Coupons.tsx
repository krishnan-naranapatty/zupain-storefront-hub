
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CouponsHeader from '@/components/CouponsHeader';
import CouponsTable from '@/components/CouponsTable';
import CouponsGrid from '@/components/CouponsGrid';
import EditCouponDrawer from '@/components/EditCouponDrawer';
import EditProductCouponDrawer from '@/components/EditProductCouponDrawer';
import { useTheme } from '@/contexts/ThemeContext';

const Coupons = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [productCouponDrawerOpen, setProductCouponDrawerOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  const handleEditCoupon = (coupon: any) => {
    setSelectedCoupon(coupon);
    
    // Check if it's a product/category coupon
    if (coupon.type === 'Product' || coupon.type === 'Category') {
      setProductCouponDrawerOpen(true);
    } else {
      setEditDrawerOpen(true);
    }
  };

  const handleCloseEditDrawer = () => {
    setEditDrawerOpen(false);
    setSelectedCoupon(null);
  };

  const handleCloseProductCouponDrawer = () => {
    setProductCouponDrawerOpen(false);
    setSelectedCoupon(null);
  };

  const handleAddCoupon = (type: string) => {
    console.log('Creating new coupon of type:', type);
    // Create a new coupon object based on the type
    const newCoupon = {
      id: null, // Indicates this is a new coupon
      code: '',
      description: '',
      type: type,
      value: 0,
      usageLimit: 100,
      used: 0,
      minPurchase: 0,
      status: 'Draft',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 30 days from now
    };
    
    setSelectedCoupon(newCoupon);
    
    // Open appropriate drawer based on coupon type
    if (type === 'Product' || type === 'Category') {
      setProductCouponDrawerOpen(true);
    } else {
      setEditDrawerOpen(true);
    }
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 space-y-6">
          <CouponsHeader 
            viewMode={viewMode} 
            onViewModeChange={handleViewModeChange}
            onAddCoupon={handleAddCoupon}
          />
          {viewMode === 'list' ? 
            <CouponsTable onEditCoupon={handleEditCoupon} /> : 
            <CouponsGrid onEditCoupon={handleEditCoupon} />
          }
        </main>
      </div>

      <EditCouponDrawer
        isOpen={editDrawerOpen}
        onClose={handleCloseEditDrawer}
        coupon={selectedCoupon}
      />

      <EditProductCouponDrawer
        isOpen={productCouponDrawerOpen}
        onClose={handleCloseProductCouponDrawer}
        coupon={selectedCoupon}
      />
    </div>
  );
};

export default Coupons;
