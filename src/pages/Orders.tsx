
import React from 'react';
import Layout from '@/components/Layout';
import OrdersHeader from '@/components/OrdersHeader';
import OrdersFilter from '@/components/OrdersFilter';
import OrdersTable from '@/components/OrdersTable';

const Orders = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <OrdersHeader />
        <OrdersFilter />
        <OrdersTable />
      </div>
    </Layout>
  );
};

export default Orders;
