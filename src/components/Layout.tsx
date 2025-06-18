
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPalette } = useTheme();

  // Initialize sidebar as collapsed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
        setMobileMenuOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleSidebar = () => {
    // On mobile, toggle mobile menu instead of collapsing
    if (window.innerWidth < 1024) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  return (
    <div className={`min-h-screen ${currentPalette.background} flex flex-col lg:flex-row`}>
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar - Hidden on mobile unless menu is open */}
      {(mobileMenuOpen || window.innerWidth >= 1024) && (
        <div className={`
          fixed top-0 left-0 h-full z-50 lg:relative lg:z-auto
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar 
            isCollapsed={sidebarCollapsed} 
            onToggle={handleToggleSidebar}
            isMobileMenuOpen={mobileMenuOpen}
            onMobileMenuClose={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 w-full lg:w-auto">
        <Header onToggleSidebar={handleToggleSidebar} />
        <main className="flex-1 p-3 md:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
