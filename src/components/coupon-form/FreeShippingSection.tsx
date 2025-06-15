
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface FreeShippingSectionProps {
  formData: {
    description: string;
    code: string;
    usageLimit: string;
    customUsageLimit: string;
    minPurchase: string;
    userLimit: string;
    showToCustomers: boolean;
    validOnlineOnly: boolean;
    startDate: Date | undefined;
    endDate: Date | undefined;
  };
  onInputChange: (field: string, value: any) => void;
}

const FreeShippingSection: React.FC<FreeShippingSectionProps> = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-6">
      {/* Description and Toggles Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Description */}
          <div className="lg:col-span-1">
            <Textarea
              placeholder="Enter your coupon description here"
              value={formData.description}
              onChange={(e) => onInputChange('description', e.target.value)}
              className="min-h-[120px] resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
            />
          </div>

          {/* Toggle Switches */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-gray-700">Show coupon to customers</Label>
              <Switch
                checked={formData.showToCustomers}
                onCheckedChange={(checked) => onInputChange('showToCustomers', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-gray-700">Valid only for online payments</Label>
              <Switch
                checked={formData.validOnlineOnly}
                onCheckedChange={(checked) => onInputChange('validOnlineOnly', checked)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Fields Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Coupon Code */}
          <div>
            <Label htmlFor="code" className="text-sm font-medium text-gray-700 mb-2 block">
              <span className="text-red-500">*</span> Coupon code
            </Label>
            <Input
              id="code"
              placeholder="Enter Coupon Code"
              value={formData.code}
              onChange={(e) => onInputChange('code', e.target.value)}
              className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
            />
          </div>

          {/* Usage Limit */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              <span className="text-red-500">*</span> Coupon usage limit
            </Label>
            <Select value={formData.usageLimit} onValueChange={(value) => onInputChange('usageLimit', value)}>
              <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300">
                <SelectValue placeholder="Select coupon usage limit" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
                className="mt-3 h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                type="number"
              />
            )}
          </div>

          {/* Minimum Purchase */}
          <div>
            <Label htmlFor="minPurchase" className="text-sm font-medium text-gray-700 mb-2 block">
              <span className="text-red-500">*</span> Minimum purchase
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
              <Input
                id="minPurchase"
                placeholder="Enter amount"
                value={formData.minPurchase}
                onChange={(e) => onInputChange('minPurchase', e.target.value)}
                className="pl-8 h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                type="number"
              />
            </div>
          </div>

          {/* User Limit */}
          <div>
            <Label htmlFor="userLimit" className="text-sm font-medium text-gray-700 mb-2 block">
              <span className="text-red-500">*</span> Coupon user limit
            </Label>
            <Input
              id="userLimit"
              placeholder="Enter coupon user"
              value={formData.userLimit}
              onChange={(e) => onInputChange('userLimit', e.target.value)}
              className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              type="number"
            />
          </div>
        </div>
      </div>

      {/* Date Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Start Date */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              <span className="text-red-500">*</span> Start date & time
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-11 border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    !formData.startDate && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-3 h-4 w-4 text-gray-400" />
                  {formData.startDate ? format(formData.startDate, "dd/MM/yyyy") : "Select start date & time"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50" align="start">
                <Calendar
                  mode="single"
                  selected={formData.startDate}
                  onSelect={(date) => onInputChange('startDate', date)}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* End Date */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              <span className="text-red-500">*</span> End date & time
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-11 border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    !formData.endDate && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-3 h-4 w-4 text-gray-400" />
                  {formData.endDate ? format(formData.endDate, "dd/MM/yyyy") : "Select End date & time"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50" align="start">
                <Calendar
                  mode="single"
                  selected={formData.endDate}
                  onSelect={(date) => onInputChange('endDate', date)}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingSection;
