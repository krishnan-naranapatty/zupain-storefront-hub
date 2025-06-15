
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
    <div className={`min-h-screen ${currentPalette.background} flex`}>
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={handleToggleSidebar} 
      />
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={handleToggleSidebar} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
