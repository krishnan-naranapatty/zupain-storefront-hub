
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import CustomersHeader from '@/components/CustomersHeader';
import CustomersSummaryCards from '@/components/CustomersSummaryCards';
import TopCustomersStats from '@/components/TopCustomersStats';
import CustomersFiltersControls from '@/components/CustomersFiltersControls';
import CustomersContent from '@/components/CustomersContent';

const Customers = () => {
  const [showDetailedView, setShowDetailedView] = useState(false);

  const handleTotalCustomersClick = () => {
    setShowDetailedView(!showDetailedView);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <CustomersHeader />
        <CustomersSummaryCards onTotalCustomersClick={handleTotalCustomersClick} />
        {showDetailedView && (
          <>
            <TopCustomersStats />
            <CustomersFiltersControls />
            <CustomersContent />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Customers;
