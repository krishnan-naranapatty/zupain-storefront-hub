
import React from 'react';
import { Search, Package, TrendingDown, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const InventoryHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Track and manage your product stock levels</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="space-x-2">
            <TrendingDown className="w-4 h-4" />
            <span>Reduce Stock</span>
          </Button>
          <Button className="space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
            <TrendingUp className="w-4 h-4" />
            <span>Add Stock</span>
          </Button>
        </div>
      </div>
      
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border">
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="font-medium">Total Products: <span className="text-blue-600">4</span></span>
            <span className="font-medium">In Stock: <span className="text-green-600">3</span></span>
            <span className="font-medium">Low Stock: <span className="text-orange-600">1</span></span>
            <span className="font-medium">Out of Stock: <span className="text-red-600">0</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
