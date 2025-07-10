
import React from 'react';
import Layout from '@/components/Layout';
import CustomersHeader from '@/components/CustomersHeader';
import TopCustomersStats from '@/components/TopCustomersStats';
import CustomersFiltersControls from '@/components/CustomersFiltersControls';
import CustomersContent from '@/components/CustomersContent';

const Customers = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <CustomersHeader />
        <TopCustomersStats />
        <CustomersFiltersControls />
        <CustomersContent />
      </div>
    </Layout>
  );
};

export default Customers;
