
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet } from 'lucide-react';

const PlansHeader = () => {
  const { currentPalette } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('plans');

  const navigationTabs = [
    { 
      id: 'plans', 
      label: 'Plans', 
      icon: CreditCard
    },
    { 
      id: 'wallet', 
      label: 'Wallet', 
      icon: Wallet
    }
  ];

  const renderPlansContent = () => (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Subscriptions</h2>
        <p className="text-sm text-gray-600">Manage your subscription plans and billing</p>
      </div>
      
      <Card className={`${currentPalette.cardBg} border`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
              Active
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
            <div>
              <span className="block">252 days left</span>
            </div>
            <div>
              <span className="block">Start date: 22/02/25</span>
            </div>
            <div>
              <span className="block">End date: 22/02/26</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 mb-4">
            Payment method: manual
          </div>
          
          <Button 
            className={`${currentPalette.primary} text-white hover:opacity-90`}
            onClick={() => navigate('/change-plan')}
          >
            Change Plan
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderWalletContent = () => (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Wallet</h2>
        <p className="text-sm text-gray-600">View your wallet balance and add funds</p>
      </div>
      <Card className={`${currentPalette.cardBg} border`}>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">₹0.00</h3>
            <p className="text-gray-600">Current Balance</p>
            <Button className={`${currentPalette.primary} text-white hover:opacity-90 mt-4`}>
              Add Money
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Navigation Tabs - WhatsApp style */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {navigationTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'plans' && renderPlansContent()}
        {activeTab === 'wallet' && renderWalletContent()}
      </div>
    </div>
  );
};

export default PlansHeader;
