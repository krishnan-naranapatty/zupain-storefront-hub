
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
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium">Discount amount</Label>
        <div className="flex space-x-2 mt-2">
          <Button
            variant={formData.discountType === 'By Value' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onInputChange('discountType', 'By Value')}
            className="flex-1"
          >
            By Value
          </Button>
          <Button
            variant={formData.discountType === 'By Percentage' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onInputChange('discountType', 'By Percentage')}
            className="flex-1"
          >
            By Percentage
          </Button>
        </div>
        
        <div className="relative mt-3">
          {formData.discountType === 'By Value' ? (
            <>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
              <Input
                placeholder="Enter amount"
                value={formData.discountValue}
                onChange={(e) => onInputChange('discountValue', e.target.value)}
                className="pl-8"
                type="number"
              />
            </>
          ) : (
            <>
              <Input
                placeholder="Enter Percentage %"
                value={formData.discountValue}
                onChange={(e) => onInputChange('discountValue', e.target.value)}
                className="pr-8"
                type="number"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
            </>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="userLimit" className="text-sm font-medium text-red-500">
          * Coupon user limit
        </Label>
        <Input
          id="userLimit"
          placeholder="Enter coupon user limit"
          value={formData.userLimit}
          onChange={(e) => onInputChange('userLimit', e.target.value)}
          className="mt-1"
          type="number"
        />
      </div>
    </div>
  );
};

export default DiscountSettingsSection;
