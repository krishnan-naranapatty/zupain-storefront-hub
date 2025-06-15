
import React from 'react';
import Layout from '@/components/Layout';
import PlansHeader from '@/components/PlansHeader';
import SubscriptionHistoryTable from '@/components/SubscriptionHistoryTable';

const Plans = () => {
  return (
    <Layout>
      <PlansHeader />
      <div className="mt-6">
        <SubscriptionHistoryTable />
      </div>
    </Layout>
  );
};

export default Plans;
