
import React from 'react';
import Layout from '@/components/Layout';
import CustomersHeader from '@/components/CustomersHeader';
import TopCustomersStats from '@/components/TopCustomersStats';

const Customers = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <CustomersHeader />
        <TopCustomersStats />
      </div>
    </Layout>
  );
};

export default Customers;
