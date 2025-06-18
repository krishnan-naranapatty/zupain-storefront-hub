
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { currentPalette } = useTheme();

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`min-h-screen ${currentPalette.background} flex flex-col lg:flex-row`}>
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={handleToggleSidebar} 
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggleSidebar={handleToggleSidebar} />
        <main className="flex-1 p-3 md:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
