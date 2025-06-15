
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import CouponsHeader from '@/components/CouponsHeader';
import CouponsTable from '@/components/CouponsTable';
import EditCouponDrawer from '@/components/EditCouponDrawer';

const Coupons = () => {
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const handleEditCoupon = (coupon: any) => {
    setSelectedCoupon(coupon);
    setEditDrawerOpen(true);
  };

  const handleCloseEditDrawer = () => {
    setEditDrawerOpen(false);
    setSelectedCoupon(null);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <CouponsHeader />
        <CouponsTable onEditCoupon={handleEditCoupon} />
      </div>

      <EditCouponDrawer
        isOpen={editDrawerOpen}
        onClose={handleCloseEditDrawer}
        coupon={selectedCoupon}
      />
    </Layout>
  );
};

export default Coupons;
