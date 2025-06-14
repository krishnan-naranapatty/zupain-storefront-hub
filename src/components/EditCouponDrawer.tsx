
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

interface EditCouponDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  coupon: any;
}

const EditCouponDrawer: React.FC<EditCouponDrawerProps> = ({ isOpen, onClose, coupon }) => {
  const { currentPalette } = useTheme();
  const [formData, setFormData] = useState({
    code: '',
    description: '',
    usageLimit: 'Custom',
    customUsageLimit: '',
    minPurchase: '',
    maxDiscount: '',
    discountType: 'By Value',
    discountValue: '',
    userLimit: '',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    showToCustomers: true,
    validOnlineOnly: false
  });

  useEffect(() => {
    if (coupon) {
      setFormData({
        code: coupon.code || '',
        description: coupon.description || '',
        usageLimit: 'Custom',
        customUsageLimit: coupon.usageLimit?.toString() || '',
        minPurchase: coupon.minPurchase?.toString() || '',
        maxDiscount: coupon.maxDiscount?.toString() || '',
        discountType: coupon.type === 'Percentage' ? 'By Percentage' : 'By Value',
        discountValue: coupon.value?.toString() || '',
        userLimit: '100',
        startDate: coupon.startDate ? new Date(coupon.startDate) : undefined,
        endDate: coupon.endDate ? new Date(coupon.endDate) : undefined,
        showToCustomers: true,
        validOnlineOnly: false
      });
    }
  }, [coupon]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving coupon:', formData);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[800px] sm:max-w-[800px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl font-semibold">Edit order discount coupon</SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Image Upload */}
          <div>
            <Card className="border-2 border-dashed border-gray-300 p-8">
              <CardContent className="flex flex-col items-center justify-center text-center p-0">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">Drag & drop files or Browse</p>
                <p className="text-xs text-gray-500">300 x 300</p>
                <p className="text-xs text-gray-500">Image aspect ratio for better fit</p>
              </CardContent>
            </Card>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="description">Enter your coupon description here</Label>
                <Textarea
                  id="description"
                  placeholder="Enter coupon description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.showToCustomers}
                  onCheckedChange={(checked) => handleInputChange('showToCustomers', checked)}
                />
                <Label>Show coupon to customers</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.validOnlineOnly}
                  onCheckedChange={(checked) => handleInputChange('validOnlineOnly', checked)}
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
                  onChange={(e) => handleInputChange('code', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="usageLimit">Coupon usage limit</Label>
                <Select value={formData.usageLimit} onValueChange={(value) => handleInputChange('usageLimit', value)}>
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
                      onChange={(e) => handleInputChange('customUsageLimit', e.target.value)}
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
                  onChange={(e) => handleInputChange('minPurchase', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Discount Section */}
          <div className="space-y-4">
            <div>
              <Label>Maximum discount</Label>
              <Input
                value={formData.maxDiscount}
                onChange={(e) => handleInputChange('maxDiscount', e.target.value)}
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
                    onClick={() => handleInputChange('discountType', 'By Value')}
                  >
                    By Value
                  </Button>
                  <Button
                    variant={formData.discountType === 'By Percentage' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleInputChange('discountType', 'By Percentage')}
                  >
                    By Percentage
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Input
                  value={formData.discountValue}
                  onChange={(e) => handleInputChange('discountValue', e.target.value)}
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
                onChange={(e) => handleInputChange('userLimit', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Start date & time *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal mt-1",
                      !formData.startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.startDate ? format(formData.startDate, "yyyy-MM-dd HH:mm:ss") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.startDate}
                    onSelect={(date) => handleInputChange('startDate', date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>End date & time *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal mt-1",
                      !formData.endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.endDate ? format(formData.endDate, "yyyy-MM-dd HH:mm:ss") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.endDate}
                    onSelect={(date) => handleInputChange('endDate', date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className={`${currentPalette.primary} text-white hover:opacity-90`}>
              Save
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditCouponDrawer;
