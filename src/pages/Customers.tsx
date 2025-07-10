
import React from 'react';
import Layout from '@/components/Layout';
import CustomersHeader from '@/components/CustomersHeader';
import TopCustomersStats from '@/components/TopCustomersStats';
import CustomersContent from '@/components/CustomersContent';

const Customers = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <CustomersHeader />
        <TopCustomersStats />
        <CustomersContent />
      </div>
    </Layout>
  );
};

export default Customers;
