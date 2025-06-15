
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PlansHeader from '@/components/PlansHeader';
import SubscriptionHistoryTable from '@/components/SubscriptionHistoryTable';

const Plans = () => {
  const { currentPalette } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`min-h-screen ${currentPalette.background}`}>
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <div className="flex-1">
          <Header onToggleSidebar={toggleSidebar} />
          
          <main className="p-6">
            <PlansHeader />
            <div className="mt-6">
              <SubscriptionHistoryTable />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Plans;
