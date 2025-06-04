
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
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10 w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="space-x-2">
            <Globe className="w-4 h-4" />
            <span>Google Translate</span>
          </Button>
          
          <Button variant="outline" size="sm" className="space-x-2">
            <Wallet className="w-4 h-4" />
            <span>Wallet Bal 0.00</span>
          </Button>
          
          <Button variant="outline" size="sm" className="space-x-2">
            <span>Visit My Store</span>
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
    </header>
  );
};

export default Header;
