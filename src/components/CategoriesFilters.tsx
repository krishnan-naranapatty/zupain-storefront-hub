
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/contexts/ThemeContext';

const CategoriesFilters = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const { currentPalette } = useTheme();

  const handleClearFilters = () => {
    setCategory('');
    setSubCategory('');
  };

  return (
    <div className="flex items-center space-x-4">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="serum">Serum</SelectItem>
          <SelectItem value="sunscreen">Sunscreen</SelectItem>
        </SelectContent>
      </Select>

      <Select value={subCategory} onValueChange={setSubCategory}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Sub Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="skincare">Skincare</SelectItem>
          <SelectItem value="cosmetics">Cosmetics</SelectItem>
        </SelectContent>
      </Select>

      <Button 
        variant="outline" 
        onClick={handleClearFilters}
        className="text-red-500 border-red-200 hover:bg-red-50"
      >
        Clear filters
      </Button>
    </div>
  );
};

export default CategoriesFilters;
