
import React from 'react';
import Layout from '@/components/Layout';
import CustomersHeader from '@/components/CustomersHeader';
import CustomersSummaryCards from '@/components/CustomersSummaryCards';
import TopCustomersStats from '@/components/TopCustomersStats';
import CustomersFiltersControls from '@/components/CustomersFiltersControls';
import CustomersContent from '@/components/CustomersContent';

const Customers = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <CustomersHeader />
        <CustomersSummaryCards />
        <TopCustomersStats />
        <CustomersFiltersControls />
        <CustomersContent />
      </div>
    </Layout>
  );
};

export default Customers;
