
import React from 'react';
import Layout from '@/components/Layout';
import WelcomeSection from '@/components/WelcomeSection';
import DashboardStats from '@/components/DashboardStats';
import StoreSetupProgress from '@/components/StoreSetupProgress';

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <WelcomeSection />
        <DashboardStats />
        <StoreSetupProgress />
      </div>
    </Layout>
  );
};

export default Dashboard;
