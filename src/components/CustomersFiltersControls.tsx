import React, { useState } from 'react';
import { Search, Download, Upload, Users, Plus, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CustomersFiltersControls = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const filterOptions = [
    { id: 'all', label: 'All Customers', count: 25 },
    { id: 'new-not-signed', label: 'New (Not Signed)', count: 8 },
    { id: 'new-signed', label: 'New (Signed In)', count: 5 },
    { id: 'repeated', label: 'Returning', count: 10 },
    { id: 'abandoned', label: 'Abandoned Cart', count: 2 }
  ];

  return (
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
          
          {/* Right Section: View Toggle and Action Buttons */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-100 rounded-xl p-1">
              <Button
                variant={viewMode === 'table' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('table')}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'table' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                Table
              </Button>
              <Button
                variant={viewMode === 'cards' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('cards')}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'cards' 
                    ? 'bg-white shadow-sm text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Cards
              </Button>
            </div>
            
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
  );
};

export default CustomersFiltersControls;