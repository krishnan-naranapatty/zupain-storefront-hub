
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface DiscountSettingsSectionProps {
  formData: {
    maxDiscount: string;
    discountType: string;
    discountValue: string;
    userLimit: string;
  };
  onInputChange: (field: string, value: any) => void;
}

const DiscountSettingsSection: React.FC<DiscountSettingsSectionProps> = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium text-gray-700 mb-3 block">Discount amount</Label>
        
        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 gap-0 mb-4">
          <Button
            variant={formData.discountType === 'By Value' ? 'default' : 'outline'}
            onClick={() => onInputChange('discountType', 'By Value')}
            className={`rounded-r-none border-r-0 h-12 font-medium ${
              formData.discountType === 'By Value' 
                ? 'bg-gray-900 text-white hover:bg-gray-800' 
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50'
            }`}
          >
            By Value
          </Button>
          <Button
            variant={formData.discountType === 'By Percentage' ? 'default' : 'outline'}
            onClick={() => onInputChange('discountType', 'By Percentage')}
            className={`rounded-l-none h-12 font-medium ${
              formData.discountType === 'By Percentage' 
                ? 'bg-gray-900 text-white hover:bg-gray-800' 
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50'
            }`}
          >
            By Percentage
          </Button>
        </div>
        
        {/* Input Field */}
        <div className="relative">
          {formData.discountType === 'By Value' ? (
            <>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
              <Input
                placeholder="0"
                value={formData.discountValue}
                onChange={(e) => onInputChange('discountValue', e.target.value)}
                className="pl-8 h-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0"
                type="number"
              />
            </>
          ) : (
            <Input
              placeholder="0"
              value={formData.discountValue}
              onChange={(e) => onInputChange('discountValue', e.target.value)}
              className="h-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0"
              type="number"
            />
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="userLimit" className="text-sm font-medium text-red-500 mb-2 block">
          * Coupon user limit
        </Label>
        <Input
          id="userLimit"
          placeholder="100"
          value={formData.userLimit}
          onChange={(e) => onInputChange('userLimit', e.target.value)}
          className="h-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0"
          type="number"
        />
      </div>
    </div>
  );
};

export default DiscountSettingsSection;
