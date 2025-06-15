
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Grid3X3, List } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import CouponTypeSelector from '@/components/CouponTypeSelector';

interface CouponsHeaderProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onAddCoupon?: (type: string) => void;
}

const CouponsHeader: React.FC<CouponsHeaderProps> = ({ 
  viewMode, 
  onViewModeChange,
  onAddCoupon 
}) => {
  const { currentPalette } = useTheme();
  const [showCouponTypeSelector, setShowCouponTypeSelector] = useState(false);

  const handleAddCouponClick = () => {
    setShowCouponTypeSelector(true);
  };

  const handleCouponTypeSelect = (type: string) => {
    console.log('Selected coupon type:', type);
    if (onAddCoupon) {
      onAddCoupon(type);
    }
    // Here you would typically open the appropriate coupon creation form
    // based on the selected type
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
          <p className="text-gray-600 mt-1">Manage your discount coupons</p>
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
          
          <Button 
            className={`${currentPalette.primary} text-white hover:opacity-90`}
            onClick={handleAddCouponClick}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Coupon
          </Button>
        </div>
      </div>

      <CouponTypeSelector
        isOpen={showCouponTypeSelector}
        onClose={() => setShowCouponTypeSelector(false)}
        onSelectType={handleCouponTypeSelect}
      />
    </>
  );
};

export default CouponsHeader;
