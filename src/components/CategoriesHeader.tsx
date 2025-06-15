
import React from 'react';
import { Plus, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface CategoriesHeaderProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const CategoriesHeader: React.FC<CategoriesHeaderProps> = ({ viewMode, onViewModeChange }) => {
  const { currentPalette } = useTheme();

  return (
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
  );
};

export default CategoriesHeader;
