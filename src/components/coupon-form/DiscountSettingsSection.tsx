
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Percent, Tag } from 'lucide-react';

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
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Discount Configuration</h3>
      
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Discount Type</Label>
          
          {/* Discount Type Toggle */}
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            <Button
              variant={formData.discountType === 'By Value' ? 'default' : 'ghost'}
              onClick={() => onInputChange('discountType', 'By Value')}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                formData.discountType === 'By Value' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white'
              }`}
            >
              <Tag className="w-4 h-4 mr-2" />
              Fixed Amount
            </Button>
            <Button
              variant={formData.discountType === 'By Percentage' ? 'default' : 'ghost'}
              onClick={() => onInputChange('discountType', 'By Percentage')}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                formData.discountType === 'By Percentage' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white'
              }`}
            >
              <Percent className="w-4 h-4 mr-2" />
              Percentage
            </Button>
          </div>
          
          {/* Discount Value Input */}
          <div className="mt-4">
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Discount Value
            </Label>
            <div className="relative">
              {formData.discountType === 'By Value' ? (
                <>
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                  <Input
                    placeholder="0"
                    value={formData.discountValue}
                    onChange={(e) => onInputChange('discountValue', e.target.value)}
                    className="pl-8 h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    type="number"
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder="0"
                    value={formData.discountValue}
                    onChange={(e) => onInputChange('discountValue', e.target.value)}
                    className="pr-8 h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    type="number"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">%</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="userLimit" className="text-sm font-medium text-gray-700 mb-2 block">
            User Limit <span className="text-red-500">*</span>
          </Label>
          <Input
            id="userLimit"
            placeholder="100"
            value={formData.userLimit}
            onChange={(e) => onInputChange('userLimit', e.target.value)}
            className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="number"
          />
          <p className="text-xs text-gray-500 mt-1">Maximum number of times each user can use this coupon</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountSettingsSection;
