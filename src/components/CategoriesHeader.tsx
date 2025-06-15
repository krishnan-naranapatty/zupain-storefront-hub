
import React from 'react';
import { Search, Plus, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface CategoriesHeaderProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const CategoriesHeader: React.FC<CategoriesHeaderProps> = ({ viewMode, onViewModeChange }) => {
  const { currentPalette } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Category</h1>
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
          
          <Button className={`${currentPalette.primary} text-white hover:${currentPalette.primary}/90 flex items-center space-x-2`}>
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </Button>
        </div>
      </div>
      
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default CategoriesHeader;
