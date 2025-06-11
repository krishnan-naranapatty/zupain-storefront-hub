
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CustomersFilters = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Customers' },
    { id: 'new-not-signed', label: 'New Customers (Not Signed IN)' },
    { id: 'new-signed', label: 'New Customers (Signed IN)' },
    { id: 'repeated', label: 'Repeated Customer' },
    { id: 'abandoned', label: 'Abandoned cart' }
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
