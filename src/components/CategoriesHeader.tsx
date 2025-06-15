
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const CategoriesHeader = () => {
  const { currentPalette } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600 mt-1">Manage your product categories and organization</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button className="space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </Button>
        </div>
      </div>
      
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="font-medium">Total Categories: <span className="text-blue-600">2</span></span>
            <span className="font-medium">Active: <span className="text-green-600">2</span></span>
            <span className="font-medium">Inactive: <span className="text-red-600">0</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
