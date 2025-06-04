
import React from 'react';
import { ChevronDown, Plus, Upload, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductsFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Select defaultValue="categories">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Categories" />
            <ChevronDown className="w-4 h-4 ml-2" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="categories">Categories</SelectItem>
            <SelectItem value="skincare">Skincare</SelectItem>
            <SelectItem value="beauty">Beauty</SelectItem>
            <SelectItem value="wellness">Wellness</SelectItem>
          </SelectContent>
        </Select>
        
        <Select defaultValue="sub-categories">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Sub Categories" />
            <ChevronDown className="w-4 h-4 ml-2" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sub-categories">Sub Categories</SelectItem>
            <SelectItem value="serums">Serums</SelectItem>
            <SelectItem value="moisturizers">Moisturizers</SelectItem>
            <SelectItem value="cleansers">Cleansers</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button className="space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </Button>
        <Button className="space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Upload className="w-4 h-4" />
          <span>Bulk Upload</span>
        </Button>
        <Button className="space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Edit className="w-4 h-4" />
          <span>Bulk Edit</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductsFilters;
