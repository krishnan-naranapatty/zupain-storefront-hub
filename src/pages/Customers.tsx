
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import CustomersHeader from '@/components/CustomersHeader';
import CustomersSummaryCards from '@/components/CustomersSummaryCards';
import TopCustomersStats from '@/components/TopCustomersStats';
import CustomersFiltersControls from '@/components/CustomersFiltersControls';
import CustomersContent from '@/components/CustomersContent';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Customers = () => {
  const [showCustomerListModal, setShowCustomerListModal] = useState(false);

  const handleTotalCustomersClick = () => {
    setShowCustomerListModal(true);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <CustomersHeader />
        <CustomersSummaryCards onTotalCustomersClick={handleTotalCustomersClick} />
        <TopCustomersStats />
      </div>

      <Dialog open={showCustomerListModal} onOpenChange={setShowCustomerListModal}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Customer Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 animate-fade-in">
            <CustomersFiltersControls />
            <CustomersContent />
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Customers;
