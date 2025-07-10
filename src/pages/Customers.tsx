
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
        
        {/* Main horizontal layout to minimize scroll */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Left section - Customer data and stats */}
          <div className="xl:col-span-2 space-y-4">
            <CustomersFiltersControls />
            <CustomersContent />
          </div>
          
          {/* Right section - Top customers and stats sidebar */}
          <div className="xl:col-span-1">
            <TopCustomersStats />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Customers;
