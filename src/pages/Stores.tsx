
import React from 'react';
import Layout from '@/components/Layout';
import StoresHeader from '@/components/StoresHeader';
import StoresFilters from '@/components/StoresFilters';
import StoresTable from '@/components/StoresTable';

const Stores = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <StoresHeader />
        <StoresFilters />
        <StoresTable />
      </div>
    </Layout>
  );
};

export default Stores;
