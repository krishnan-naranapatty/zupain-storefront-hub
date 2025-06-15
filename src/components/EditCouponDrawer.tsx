
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import ImageUploadSection from '@/components/coupon-form/ImageUploadSection';
import CouponDetailsSection from '@/components/coupon-form/CouponDetailsSection';
import DiscountSettingsSection from '@/components/coupon-form/DiscountSettingsSection';
import DateRangeSection from '@/components/coupon-form/DateRangeSection';

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

  const handleCancel = () => {
    onClose();
  };

  const isNewCoupon = !coupon?.id;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[800px] sm:max-w-[800px] overflow-y-auto" hideCloseButton={true}>
        <SheetHeader className="mb-6 border-b pb-4">
          <SheetTitle className="flex items-center text-lg font-medium">
            <ArrowLeft className="w-5 h-5 mr-2 cursor-pointer" onClick={onClose} />
            {isNewCoupon ? 'Add order discount coupon' : 'Edit order discount coupon'}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          <ImageUploadSection />
          
          <CouponDetailsSection 
            formData={formData} 
            onInputChange={handleInputChange} 
          />

          <DiscountSettingsSection 
            formData={formData} 
            onInputChange={handleInputChange} 
          />

          <DateRangeSection 
            formData={formData} 
            onInputChange={handleInputChange} 
          />

          {/* Footer */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <Button variant="outline" onClick={handleCancel}>
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
