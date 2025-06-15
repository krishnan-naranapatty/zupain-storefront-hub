
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
        <Label>Maximum discount</Label>
        <Input
          value={formData.maxDiscount}
          onChange={(e) => onInputChange('maxDiscount', e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label>Discount amount</Label>
        <div className="flex space-x-2 mt-1">
          <div className="flex space-x-2">
            <Button
              variant={formData.discountType === 'By Value' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onInputChange('discountType', 'By Value')}
            >
              By Value
            </Button>
            <Button
              variant={formData.discountType === 'By Percentage' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onInputChange('discountType', 'By Percentage')}
            >
              By Percentage
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Input
            value={formData.discountValue}
            onChange={(e) => onInputChange('discountValue', e.target.value)}
            className="flex-1"
          />
          {formData.discountType === 'By Percentage' && (
            <span className="text-gray-500">%</span>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="userLimit">Coupon user limit</Label>
        <Input
          id="userLimit"
          value={formData.userLimit}
          onChange={(e) => onInputChange('userLimit', e.target.value)}
          className="mt-1"
        />
      </div>
    </div>
  );
};

export default DiscountSettingsSection;
