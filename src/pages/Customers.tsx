
import React from 'react';
import Layout from '@/components/Layout';
import CustomersHeader from '@/components/CustomersHeader';
import CustomersFilters from '@/components/CustomersFilters';
import CustomersTable from '@/components/CustomersTable';

const Customers = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <CustomersHeader />
        <CustomersFilters />
        <CustomersTable />
      </div>
    </Layout>
  );
};

export default Customers;
