
import React from 'react';
import { Search, Filter, Download, MoreVertical, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const StoresHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stores</h1>
          <p className="text-gray-600 mt-1">Manage your store locations and details</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
          <Button variant="outline" className="space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
          <Button className="space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4" />
            <span>Add Store</span>
          </Button>
          <Button variant="outline" size="sm" className="p-2">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search stores by name, location, or phone..."
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="font-medium">Total Stores: <span className="text-blue-600">12</span></span>
            <span className="font-medium">Active: <span className="text-green-600">10</span></span>
            <span className="font-medium">Inactive: <span className="text-red-600">2</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresHeader;
