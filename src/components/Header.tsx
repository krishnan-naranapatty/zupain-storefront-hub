
import React from 'react';
import { Menu, Bell, Search, User, Globe, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ThemeSettings from './ThemeSettings';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-3 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10 w-48 md:w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-1 md:space-x-4">
          <Button variant="outline" size="sm" className="hidden lg:flex space-x-2">
            <Globe className="w-4 h-4" />
            <span className="hidden xl:inline">Google Translate</span>
          </Button>
          
          <Button variant="outline" size="sm" className="hidden md:flex space-x-2">
            <Wallet className="w-4 h-4" />
            <span className="hidden lg:inline">Wallet Bal 0.00</span>
            <span className="lg:hidden">₹0.00</span>
          </Button>
          
          <Button variant="outline" size="sm" className="hidden md:flex space-x-2">
            <span className="hidden lg:inline">Visit My Store</span>
            <span className="lg:hidden">Store</span>
          </Button>

          <ThemeSettings />

          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="sm" className="p-2">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile search bar */}
      <div className="mt-3 sm:hidden">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search..."
            className="pl-10 w-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
