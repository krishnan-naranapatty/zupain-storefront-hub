
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const CouponsHeader = () => {
  const { currentPalette } = useTheme();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
        <p className="text-gray-600 mt-1">Manage your discount coupons</p>
      </div>
      
      <Button className={`${currentPalette.primary} text-white hover:opacity-90`}>
        <Plus className="w-4 h-4 mr-2" />
        Add Coupon
      </Button>
    </div>
  );
};

export default CouponsHeader;
