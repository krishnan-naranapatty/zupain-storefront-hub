
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Dashboard, 
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
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const menuItems = [
    { icon: Dashboard, label: 'Dashboard', path: '/', isActive: true },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Store, label: 'Stores', path: '/stores' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Tag, label: 'Categories', path: '/categories' },
    { icon: CreditCard, label: 'Plans & Wallet', path: '/plans' },
    { icon: Users, label: 'Coupons', path: '/coupons' },
    { icon: MessageSquare, label: 'WhatsApp Tool', path: '/whatsapp' },
    { icon: PenTool, label: 'Page Builder', path: '/page-builder' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Whatsapp Business', path: '/whatsapp-business' },
  ];

  return (
    <div className={`bg-slate-900 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen flex flex-col`}>
      {/* Logo Section */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <Store className="w-6 h-6 text-white" />
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
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && <span className="text-sm">{item.label}</span>}
              </NavLink>
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
