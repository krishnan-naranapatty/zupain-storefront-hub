
import React from 'react';
import { Users } from 'lucide-react';

const CustomersHeader = () => {
  return (
    <div className="space-y-8">
      {/* Enhanced Page Title with Icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h1>
            <p className="text-gray-600">Build stronger relationships with your customers</p>
          </div>
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
    </div>
  );
};

export default CustomersHeader;
