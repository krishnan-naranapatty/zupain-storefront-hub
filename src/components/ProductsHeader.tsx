
import React from 'react';
import { Search, Filter, Download, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ProductsHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your product catalog and inventory</p>
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
              placeholder="Search products by name, SKU, or category..."
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="font-medium">Total Products: <span className="text-blue-600">1,247</span></span>
            <span className="font-medium">In Stock: <span className="text-green-600">1,189</span></span>
            <span className="font-medium">Low Stock: <span className="text-orange-600">45</span></span>
            <span className="font-medium">Out of Stock: <span className="text-red-600">13</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
