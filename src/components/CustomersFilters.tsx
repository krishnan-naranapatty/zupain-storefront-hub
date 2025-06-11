
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const CustomersFilters = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { currentPalette } = useTheme();

  const tabs = [
    { id: 'all', label: 'All Customers' },
    { id: 'new-not-signed', label: 'New Customers (Yet to sign in)' },
    { id: 'new-signed', label: 'New Customers (Signed In)' },
    { id: 'repeated', label: 'Returning Customers' },
    { id: 'abandoned', label: 'Abandoned Cart' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={activeTab === tab.id ? "default" : "outline"}
          className={`${
            activeTab === tab.id 
              ? `${currentPalette.primary} text-white hover:${currentPalette.primary}/90` 
              : `${currentPalette.cardBg} text-gray-700 border-gray-300 hover:${currentPalette.secondary}`
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default CustomersFilters;
