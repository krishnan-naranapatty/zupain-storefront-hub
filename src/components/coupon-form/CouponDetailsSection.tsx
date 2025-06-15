
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
    showToCustomers: boolean;
    validOnlineOnly: boolean;
  };
  onInputChange: (field: string, value: any) => void;
}

const CouponDetailsSection: React.FC<CouponDetailsSectionProps> = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-6">
      {/* Description */}
      <div>
        <Label htmlFor="description" className="text-sm font-medium">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Enter your coupon description here"
          value={formData.description}
          onChange={(e) => onInputChange('description', e.target.value)}
          className="mt-1 min-h-[100px]"
        />
      </div>

      {/* Toggle Switches Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.showToCustomers}
            onCheckedChange={(checked) => onInputChange('showToCustomers', checked)}
          />
          <Label className="text-sm">Show coupon to customers</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.validOnlineOnly}
            onCheckedChange={(checked) => onInputChange('validOnlineOnly', checked)}
          />
          <Label className="text-sm">Valid only for online payments</Label>
        </div>
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Coupon Code */}
        <div>
          <Label htmlFor="code" className="text-sm font-medium text-red-500">
            * Coupon code
          </Label>
          <Input
            id="code"
            placeholder="Enter Coupon Code"
            value={formData.code}
            onChange={(e) => onInputChange('code', e.target.value)}
            className="mt-1"
          />
        </div>

        {/* Coupon Usage Limit */}
        <div>
          <Label className="text-sm font-medium text-red-500">
            * Coupon usage limit
          </Label>
          <Select value={formData.usageLimit} onValueChange={(value) => onInputChange('usageLimit', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select coupon usage limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Custom">Custom</SelectItem>
              <SelectItem value="Unlimited">Unlimited</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
            </SelectContent>
          </Select>
          
          {formData.usageLimit === 'Custom' && (
            <Input
              placeholder="Enter custom limit"
              value={formData.customUsageLimit}
              onChange={(e) => onInputChange('customUsageLimit', e.target.value)}
              className="mt-2"
              type="number"
            />
          )}
        </div>

        {/* Minimum Purchase */}
        <div>
          <Label htmlFor="minPurchase" className="text-sm font-medium text-red-500">
            * Minimum purchase
          </Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
            <Input
              id="minPurchase"
              placeholder="Enter amount"
              value={formData.minPurchase}
              onChange={(e) => onInputChange('minPurchase', e.target.value)}
              className="pl-8"
              type="number"
            />
          </div>
        </div>

        {/* Maximum Discount */}
        <div>
          <Label htmlFor="maxDiscount" className="text-sm font-medium text-red-500">
            * Maximum discount
          </Label>
          <Input
            id="maxDiscount"
            placeholder="Maximum Discount Amount"
            value={formData.maxDiscount}
            onChange={(e) => onInputChange('maxDiscount', e.target.value)}
            className="mt-1"
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default CouponDetailsSection;
