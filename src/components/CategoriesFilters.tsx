
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, X, Search } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const CategoriesFilters = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { currentPalette } = useTheme();

  const handleClearFilters = () => {
    setCategory('');
    setSubCategory('');
    setSearchQuery('');
  };

  const hasActiveFilters = category || subCategory || searchQuery;

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center space-x-6 flex-wrap gap-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters Section */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
            <Filter className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-base font-semibold text-gray-900">Filters</span>
        </div>
        
        <div className="flex items-center space-x-4 flex-wrap gap-4">
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-48 h-9 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <SelectItem value="serum" className="hover:bg-gray-50 rounded-lg mx-1">Serum</SelectItem>
                <SelectItem value="sunscreen" className="hover:bg-gray-50 rounded-lg mx-1">Sunscreen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sub Category</label>
            <Select value={subCategory} onValueChange={setSubCategory}>
              <SelectTrigger className="w-48 h-9 bg-white border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm">
                <SelectValue placeholder="Select sub category" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <SelectItem value="skincare" className="hover:bg-gray-50 rounded-lg mx-1">Skincare</SelectItem>
                <SelectItem value="cosmetics" className="hover:bg-gray-50 rounded-lg mx-1">Cosmetics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <Button 
          variant="outline" 
          onClick={handleClearFilters}
          className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 rounded-xl px-4 h-9 font-medium transition-all duration-200 flex items-center space-x-2"
        >
          <X className="w-4 h-4" />
          <span>Clear filters</span>
        </Button>
      )}
    </div>
  );
};

export default CategoriesFilters;
