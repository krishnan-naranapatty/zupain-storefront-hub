
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CouponDetailsSectionProps {
  formData: {
    code: string;
    description: string;
    usageLimit: string;
    customUsageLimit: string;
    minPurchase: string;
    maxDiscount: string;
    showToCustomers: boolean;
    validOnlineOnly: boolean;
  };
  onInputChange: (field: string, value: any) => void;
}

const CouponDetailsSection: React.FC<CouponDetailsSectionProps> = ({ formData, onInputChange }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Coupon Details</h3>
      
      <div className="space-y-6">
        {/* Description */}
        <div>
          <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="Enter a description for your coupon..."
            value={formData.description}
            onChange={(e) => onInputChange('description', e.target.value)}
            className="min-h-[80px] resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Settings Toggles */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">Show to customers</Label>
            <Switch
              checked={formData.showToCustomers}
              onCheckedChange={(checked) => onInputChange('showToCustomers', checked)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">Online payments only</Label>
            <Switch
              checked={formData.validOnlineOnly}
              onCheckedChange={(checked) => onInputChange('validOnlineOnly', checked)}
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Coupon Code */}
          <div>
            <Label htmlFor="code" className="text-sm font-medium text-gray-700 mb-2 block">
              Coupon Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="code"
              placeholder="e.g., SAVE20"
              value={formData.code}
              onChange={(e) => onInputChange('code', e.target.value)}
              className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Usage Limit */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Usage Limit <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.usageLimit} onValueChange={(value) => onInputChange('usageLimit', value)}>
              <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder="Select usage limit" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                <SelectItem value="Custom">Custom</SelectItem>
                <SelectItem value="Unlimited">Unlimited</SelectItem>
                <SelectItem value="50">50 uses</SelectItem>
                <SelectItem value="100">100 uses</SelectItem>
                <SelectItem value="200">200 uses</SelectItem>
              </SelectContent>
            </Select>
            
            {formData.usageLimit === 'Custom' && (
              <Input
                placeholder="Enter custom limit"
                value={formData.customUsageLimit}
                onChange={(e) => onInputChange('customUsageLimit', e.target.value)}
                className="mt-3 h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="number"
              />
            )}
          </div>

          {/* Minimum Purchase */}
          <div>
            <Label htmlFor="minPurchase" className="text-sm font-medium text-gray-700 mb-2 block">
              Minimum Purchase <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
              <Input
                id="minPurchase"
                placeholder="0"
                value={formData.minPurchase}
                onChange={(e) => onInputChange('minPurchase', e.target.value)}
                className="pl-8 h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="number"
              />
            </div>
          </div>

          {/* Maximum Discount */}
          <div>
            <Label htmlFor="maxDiscount" className="text-sm font-medium text-gray-700 mb-2 block">
              Maximum Discount <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
              <Input
                id="maxDiscount"
                placeholder="0"
                value={formData.maxDiscount}
                onChange={(e) => onInputChange('maxDiscount', e.target.value)}
                className="pl-8 h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponDetailsSection;
