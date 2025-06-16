
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Store, 
  Users, 
  Tag, 
  CreditCard, 
  BarChart3, 
  Settings,
  MessageSquare,
  PenTool,
  HelpCircle,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const { currentPalette } = useTheme();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['page-builder']);
  
  const toggleMenu = (menuKey: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuKey) 
        ? prev.filter(key => key !== menuKey)
        : [...prev, menuKey]
    );
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/', isActive: true },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: Truck, label: 'Shiprocket Orders', path: '/shiprocket-orders' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Package, label: 'Inventory', path: '/inventory' },
    { icon: Store, label: 'Stores', path: '/stores' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Tag, label: 'Categories', path: '/categories' },
    { icon: CreditCard, label: 'Plans & Wallet', path: '/plans' },
    { icon: Users, label: 'Coupons', path: '/coupons' },
    { icon: MessageSquare, label: 'WhatsApp Tool', path: '/whatsapp' },
    { 
      icon: PenTool, 
      label: 'Page Builder', 
      path: '/page-builder',
      hasSubmenu: true,
      key: 'page-builder',
      submenu: [
        { label: 'Landing Page', path: '/page-builder/landing-page' },
        { label: 'Additional Pages', path: '/page-builder/additional-pages' },
        { label: 'Menu Builder', path: '/page-builder/menu' },
        { label: 'Appearance', path: '/page-builder/appearance' },
        { label: 'Theme Builder', path: '/page-builder/theme-builder' }
      ]
    },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Whatsapp Business', path: '/whatsapp-business' },
  ];

  const isMenuExpanded = (menuKey: string) => expandedMenus.includes(menuKey);
  const isPathActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Icon sizes for different states
  const iconSize = isCollapsed ? 'w-6 h-6' : 'w-5 h-5';
  const logoIconSize = isCollapsed ? 'w-6 h-6' : 'w-6 h-6';

  return (
    <div className={`${currentPalette.sidebar} ${currentPalette.sidebarText} transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen flex flex-col`}>
      {/* Logo Section */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className={`${isCollapsed ? 'w-8 h-8' : 'w-10 h-10'} ${currentPalette.accent} rounded-lg flex items-center justify-center`}>
            <Store className={logoIconSize} />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-sm font-semibold">Vitanix consumer</h2>
              <p className="text-xs text-slate-400">private limited</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.hasSubmenu ? (
                <div>
                  {/* Main Menu Item */}
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                      isPathActive(item.path)
                        ? `${currentPalette.primary} text-white`
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                    onClick={() => !isCollapsed && toggleMenu(item.key!)}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={iconSize} />
                      {!isCollapsed && <span className="text-sm">{item.label}</span>}
                    </div>
                    {!isCollapsed && (
                      isMenuExpanded(item.key!) ? 
                        <ChevronDown className="w-4 h-4" /> : 
                        <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                  
                  {/* Submenu */}
                  {!isCollapsed && isMenuExpanded(item.key!) && item.submenu && (
                    <ul className="ml-8 mt-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `block px-3 py-1 rounded-md text-sm transition-colors ${
                                isActive
                                  ? `${currentPalette.accent} text-white`
                                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                              }`
                            }
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? `${currentPalette.primary} text-white`
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <item.icon className={iconSize} />
                  {!isCollapsed && <span className="text-sm">{item.label}</span>}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400">
          Powered by
          <br />
          <span className="text-white font-semibold">Zupain</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
