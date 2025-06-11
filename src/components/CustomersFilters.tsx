
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CustomersFilters = () => {
  const [activeTab, setActiveTab] = useState('all');

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
              ? "bg-blue-600 text-white" 
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
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
