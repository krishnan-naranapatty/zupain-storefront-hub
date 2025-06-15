
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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const AppSidebar: React.FC = () => {
  const { currentPalette } = useTheme();
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['page-builder']);
  
  const toggleMenu = (menuKey: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuKey) 
        ? prev.filter(key => key !== menuKey)
        : [...prev, menuKey]
    );
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
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

  return (
    <Sidebar className={`${currentPalette.sidebar} ${currentPalette.sidebarText}`}>
      {/* Header with Logo */}
      <SidebarHeader className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className={`${isCollapsed ? 'w-8 h-8' : 'w-10 h-10'} ${currentPalette.accent} rounded-lg flex items-center justify-center`}>
            <Store className={isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-sm font-semibold">Vitanix consumer</h2>
              <p className="text-xs text-slate-400">private limited</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item, index) => (
              <SidebarMenuItem key={index}>
                {item.hasSubmenu ? (
                  <Collapsible 
                    open={isMenuExpanded(item.key!)} 
                    onOpenChange={() => toggleMenu(item.key!)}
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className={`w-full justify-between ${
                          isPathActive(item.path)
                            ? `${currentPalette.primary} text-white`
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                        tooltip={isCollapsed ? item.label : undefined}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </div>
                        {!isCollapsed && (
                          isMenuExpanded(item.key!) ? 
                            <ChevronDown className="w-4 h-4" /> : 
                            <ChevronRight className="w-4 h-4" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.submenu?.map((subItem, subIndex) => (
                          <SidebarMenuSubItem key={subIndex}>
                            <SidebarMenuSubButton asChild>
                              <NavLink
                                to={subItem.path}
                                className={({ isActive }) =>
                                  `${isActive
                                    ? `${currentPalette.accent} text-white`
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                  }`
                                }
                              >
                                {subItem.label}
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton asChild tooltip={isCollapsed ? item.label : undefined}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 ${
                          isActive
                            ? `${currentPalette.primary} text-white`
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400">
          Powered by
          <br />
          <span className="text-white font-semibold">Zupain</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
