
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CouponDetailsSectionProps {
  formData: {
    description: string;
    showToCustomers: boolean;
    validOnlineOnly: boolean;
    code: string;
    usageLimit: string;
    customUsageLimit: string;
    minPurchase: string;
  };
  onInputChange: (field: string, value: any) => void;
}

const CouponDetailsSection: React.FC<CouponDetailsSectionProps> = ({ formData, onInputChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="description">Enter your coupon description here</Label>
          <Textarea
            id="description"
            placeholder="Enter coupon description"
            value={formData.description}
            onChange={(e) => onInputChange('description', e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.showToCustomers}
            onCheckedChange={(checked) => onInputChange('showToCustomers', checked)}
          />
          <Label>Show coupon to customers</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.validOnlineOnly}
            onCheckedChange={(checked) => onInputChange('validOnlineOnly', checked)}
          />
          <Label>Valid only for online payments</Label>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="couponCode">Coupon code *</Label>
          <Input
            id="couponCode"
            value={formData.code}
            onChange={(e) => onInputChange('code', e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="usageLimit">Coupon usage limit</Label>
          <Select value={formData.usageLimit} onValueChange={(value) => onInputChange('usageLimit', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Custom">Custom</SelectItem>
              <SelectItem value="Unlimited">Unlimited</SelectItem>
            </SelectContent>
          </Select>
          {formData.usageLimit === 'Custom' && (
            <div className="mt-2">
              <Label>Custom coupon usage limit</Label>
              <Input
                value={formData.customUsageLimit}
                onChange={(e) => onInputChange('customUsageLimit', e.target.value)}
                className="mt-1"
              />
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="minPurchase">Minimum purchase</Label>
          <Input
            id="minPurchase"
            value={formData.minPurchase}
            onChange={(e) => onInputChange('minPurchase', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default CouponDetailsSection;
