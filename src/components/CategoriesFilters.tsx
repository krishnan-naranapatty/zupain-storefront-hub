
import React from 'react';
import { Grid3X3, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CategoriesFiltersProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const CategoriesFilters = ({ viewMode, onViewModeChange }: CategoriesFiltersProps) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg border">
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Status:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg z-50">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select defaultValue="all-types">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="serum">Serum</SelectItem>
              <SelectItem value="sunscreen">Sunscreen</SelectItem>
              <SelectItem value="skincare">Skincare</SelectItem>
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
          <Button 
            variant="ghost" 
            size="sm" 
            className={`p-2 ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => onViewModeChange('grid')}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`p-2 ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
            onClick={() => onViewModeChange('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFilters;
