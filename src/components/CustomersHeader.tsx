
import React, { useState } from 'react';
import { Search, Download, Upload, Users, UserPlus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/contexts/ThemeContext';
import CustomersTable from '@/components/CustomersTable';

const CustomersHeader = () => {
  const { currentPalette } = useTheme();
  const [activeTab, setActiveTab] = useState('customers');
  const [activeFilter, setActiveFilter] = useState('all');

  const navigationTabs = [
    { 
      id: 'customers', 
      label: 'Customers', 
      icon: Users
    },
    { 
      id: 'segments', 
      label: 'Segments', 
      icon: UserPlus
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Customers' },
    { id: 'new-not-signed', label: 'New (Not Signed)' },
    { id: 'new-signed', label: 'New (Signed In)' },
    { id: 'repeated', label: 'Returning' },
    { id: 'abandoned', label: 'Abandoned Cart' }
  ];

  const renderCustomersContent = () => (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Customer Management</h2>
        <p className="text-sm text-gray-600">View and manage your customer database</p>
      </div>

      {/* Card with Search, Actions, and Dropdown Filter */}
      <Card className={`${currentPalette.cardBg} border shadow-sm`}>
        <CardContent className="p-4 space-y-4">
          {/* Top Row: Search and Action Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Section */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-gray-50">
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline">Import Customers</span>
                <span className="sm:hidden">Import</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-gray-50">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export to Excel</span>
                <span className="sm:hidden">Export</span>
              </Button>
            </div>
          </div>

          {/* Bottom Row: Filter Dropdown */}
          <div className="pt-2 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <Select value={activeFilter} onValueChange={setActiveFilter}>
                <SelectTrigger className="w-[200px] bg-white">
                  <SelectValue placeholder="Select filter" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg z-50">
                  {filterOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <CustomersTable />
    </div>
  );

  const renderSegmentsContent = () => (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Customer Segments</h2>
        <p className="text-sm text-gray-600">Create and manage customer segments for targeted marketing</p>
      </div>
      <div className="text-center py-12 text-gray-500">
        <UserPlus className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <h3 className="text-lg font-medium mb-2">No segments created yet</h3>
        <p className="text-sm mb-4">Create your first customer segment to organize your customers</p>
        <Button className={`${currentPalette.primary} text-white hover:opacity-90`}>
          Create Segment
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
      </div>

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
        {activeTab === 'customers' && renderCustomersContent()}
        {activeTab === 'segments' && renderSegmentsContent()}
      </div>
    </div>
  );
};

export default CustomersHeader;
