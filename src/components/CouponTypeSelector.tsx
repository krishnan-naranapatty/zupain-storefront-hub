
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Tag, Package, Truck } from 'lucide-react';

interface CouponTypeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: string) => void;
}

const CouponTypeSelector: React.FC<CouponTypeSelectorProps> = ({ 
  isOpen, 
  onClose, 
  onSelectType 
}) => {
  const couponTypes = [
    {
      id: 'order-discount',
      title: 'Order Discount coupon',
      description: 'Offer a percentage or amount based discounts to your customers.',
      icon: Tag,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'product-category',
      title: 'Discount on product / category',
      description: 'Offer a percentage or amount based discounts on specific product / category to your customers.',
      icon: Package,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'free-shipping',
      title: 'Free shipping',
      description: 'Offer free shipping based on minimum purchase amount',
      icon: Truck,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  const handleSelectType = (type: string) => {
    onSelectType(type);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Select coupon type</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-3 mt-4">
          {couponTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <div
                key={type.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
                onClick={() => handleSelectType(type.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 ${type.bgColor} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 ${type.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CouponTypeSelector;
