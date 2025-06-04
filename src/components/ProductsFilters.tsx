
import React from 'react';
import { Plus, Upload, Grid3X3, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductsFilters = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg border">
      <div className="flex items-center space-x-4">
        <Tabs defaultValue="all" className="w-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" className="text-xs">All Products</TabsTrigger>
            <TabsTrigger value="active" className="text-xs">Active</TabsTrigger>
            <TabsTrigger value="draft" className="text-xs">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="text-xs">Archived</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center space-x-3">
          <Select defaultValue="all-categories">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-categories">All Categories</SelectItem>
              <SelectItem value="skincare">Skincare</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
              <SelectItem value="wellness">Wellness</SelectItem>
              <SelectItem value="supplements">Supplements</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all-brands">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-brands">All Brands</SelectItem>
              <SelectItem value="blameless">Blameless</SelectItem>
              <SelectItem value="vitanix">Vitanix</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm" className="space-x-2">
            <SlidersHorizontal className="w-4 h-4" />
            <span>More Filters</span>
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
          <Button variant="ghost" size="sm" className="p-2">
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 bg-white shadow-sm">
            <List className="w-4 h-4" />
          </Button>
        </div>
        
        <Button className="space-x-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </Button>
        
        <Button variant="outline" className="space-x-2">
          <Upload className="w-4 h-4" />
          <span>Import</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductsFilters;
