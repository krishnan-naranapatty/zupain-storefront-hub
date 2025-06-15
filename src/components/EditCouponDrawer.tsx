
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import ImageUploadSection from '@/components/coupon-form/ImageUploadSection';
import CouponDetailsSection from '@/components/coupon-form/CouponDetailsSection';
import DiscountSettingsSection from '@/components/coupon-form/DiscountSettingsSection';
import DateRangeSection from '@/components/coupon-form/DateRangeSection';
import ProductSelectionSection from '@/components/coupon-form/ProductSelectionSection';
import FreeShippingSection from '@/components/coupon-form/FreeShippingSection';

interface EditCouponDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  coupon: any;
  couponType?: string;
}

const EditCouponDrawer: React.FC<EditCouponDrawerProps> = ({ isOpen, onClose, coupon, couponType }) => {
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
    validOnlineOnly: false,
    selectionType: 'category',
    selectedCategory: '',
    selectedProduct: ''
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
        validOnlineOnly: false,
        selectionType: 'category',
        selectedCategory: '',
        selectedProduct: ''
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
    console.log('Coupon type:', couponType || coupon?.type);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const isNewCoupon = !coupon?.id;
  const currentCouponType = couponType || coupon?.type;
  const isProductOrCategoryCoupon = currentCouponType === 'product-category' || 
                                    currentCouponType === 'Product' || 
                                    currentCouponType === 'Category';
  const isFreeShippingCoupon = currentCouponType === 'free-shipping';

  const getDrawerTitle = () => {
    if (isNewCoupon) {
      switch (currentCouponType) {
        case 'product-category':
          return 'Create Product/Category Coupon';
        case 'free-shipping':
          return 'Free shipping coupon';
        case 'order-discount':
        default:
          return 'Create Order Discount Coupon';
      }
    } else {
      switch (currentCouponType) {
        case 'product-category':
        case 'Product':
        case 'Category':
          return 'Edit Product/Category Coupon';
        case 'free-shipping':
          return 'Free shipping coupon';
        case 'order-discount':
        default:
          return 'Edit Order Discount Coupon';
      }
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[900px] sm:max-w-[900px] overflow-y-auto bg-gray-50" hideCloseButton={true}>
        <SheetHeader className="mb-6 pb-4 border-b border-gray-200 bg-white rounded-lg p-4 -mx-6 -mt-6 mb-6">
          <SheetTitle className="flex items-center text-xl font-semibold text-gray-900">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="mr-3 h-8 w-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            {getDrawerTitle()}
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {isFreeShippingCoupon ? (
            <>
              <ImageUploadSection />
              <FreeShippingSection 
                formData={formData} 
                onInputChange={handleInputChange} 
              />
            </>
          ) : (
            <>
              <ImageUploadSection />
              
              <CouponDetailsSection 
                formData={formData} 
                onInputChange={handleInputChange} 
              />

              {isProductOrCategoryCoupon && (
                <ProductSelectionSection 
                  formData={formData} 
                  onInputChange={handleInputChange} 
                />
              )}

              <DiscountSettingsSection 
                formData={formData} 
                onInputChange={handleInputChange} 
              />

              <DateRangeSection 
                formData={formData} 
                onInputChange={handleInputChange} 
              />
            </>
          )}

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 -mx-6 -mb-6 flex items-center justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={handleCancel}
              className="px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />
              {isNewCoupon ? 'Save' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditCouponDrawer;
