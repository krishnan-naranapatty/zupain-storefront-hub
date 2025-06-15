
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const CustomersFilters = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { currentPalette } = useTheme();

  const tabs = [
    { id: 'all', label: 'All Customers' },
    { id: 'new-not-signed', label: 'New (Not Signed)' },
    { id: 'new-signed', label: 'New (Signed In)' },
    { id: 'repeated', label: 'Returning' },
    { id: 'abandoned', label: 'Abandoned Cart' }
  ];

  return (
    <Card className={`${currentPalette.cardBg} border shadow-sm`}>
      <CardContent className="p-3">
        <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 flex-1 min-w-fit ${
                activeTab === tab.id 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomersFilters;
