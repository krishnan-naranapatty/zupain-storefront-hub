
import React, { useState } from 'react';
import { Search, Download, Upload, Users, UserPlus, ChevronDown, Filter, Plus, Sparkles } from 'lucide-react';
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
      icon: Users,
      count: 25
    },
    { 
      id: 'segments', 
      label: 'Segments', 
      icon: UserPlus,
      count: 3
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Customers', count: 25 },
    { id: 'new-not-signed', label: 'New (Not Signed)', count: 8 },
    { id: 'new-signed', label: 'New (Signed In)', count: 6 },
    { id: 'repeated', label: 'Returning', count: 4 },
    { id: 'abandoned', label: 'Abandoned Cart', count: 4 }
  ];

  const renderCustomersContent = () => (
    <div className="space-y-6">
      {/* Modern Header Section */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Customer Management</h2>
            <p className="text-sm text-gray-600">Manage your customer relationships and insights</p>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filter Card */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-white to-blue-50/30 rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left Section: Enhanced Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Enhanced Search Section */}
              <div className="flex-1 max-w-md">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search customers by name, mobile, or email..."
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 text-sm placeholder-gray-400"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <kbd className="px-2 py-1 text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded">⌘K</kbd>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Filter Dropdown */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filter by:</span>
                </div>
                <Select value={activeFilter} onValueChange={setActiveFilter}>
                  <SelectTrigger className="w-[200px] bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <SelectValue placeholder="Select filter" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 shadow-xl z-50 rounded-xl p-2">
                    {filterOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id} className="rounded-lg">
                        <div className="flex items-center justify-between w-full">
                          <span>{option.label}</span>
                          <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            {option.count}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Right Section: Enhanced Action Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-xl px-4 py-2.5 transition-all duration-200">
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Import</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-emerald-50 border-2 border-gray-200 hover:border-emerald-300 rounded-xl px-4 py-2.5 transition-all duration-200">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Export</span>
              </Button>
              <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-4 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Add Customer</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <CustomersTable />
    </div>
  );

  const renderSegmentsContent = () => (
    <div>
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
            <UserPlus className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Customer Segments</h2>
            <p className="text-sm text-gray-600">Create and manage customer segments for targeted campaigns</p>
          </div>
        </div>
      </div>
      
      <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
        <div className="text-center py-16 px-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Create Your First Segment</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Organize your customers into meaningful segments to deliver personalized experiences and targeted marketing campaigns.
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
            <Plus className="w-4 h-4 mr-2" />
            Create Segment
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Enhanced Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h1>
          <p className="text-gray-600">Build stronger relationships with your customers</p>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Live data</span>
          </div>
          <span>•</span>
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Modern Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {navigationTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 py-4 px-2 border-b-3 font-semibold text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  activeTab === tab.id 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
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
