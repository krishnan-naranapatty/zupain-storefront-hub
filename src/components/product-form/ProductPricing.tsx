
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ProductPricingProps {
  data: {
    priceType: string;
    weight: string;
    price: string;
    discount: string;
    makingCharge: string;
    sellingPrice: string;
  };
  onChange: (data: any) => void;
}

const ProductPricing = ({ data, onChange }: ProductPricingProps) => {
  const handleChange = (field: string, value: string) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h3>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label htmlFor="weight" className="text-sm font-medium">
            Weight (As Per Kg)
          </Label>
          <Input
            id="weight"
            placeholder="Enter Weight"
            value={data.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
            className="h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price" className="text-sm font-medium">
            Price
          </Label>
          <Input
            id="price"
            placeholder="Enter price"
            value={data.price}
            onChange={(e) => handleChange('price', e.target.value)}
            className="h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="discount" className="text-sm font-medium">
            Discount %
          </Label>
          <Input
            id="discount"
            placeholder="Enter discount %"
            value={data.discount}
            onChange={(e) => handleChange('discount', e.target.value)}
            className="h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="makingCharge" className="text-sm font-medium">
            Making Charge
          </Label>
          <Input
            id="makingCharge"
            placeholder="Enter Making Charge"
            value={data.makingCharge}
            onChange={(e) => handleChange('makingCharge', e.target.value)}
            className="h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sellingPrice" className="text-sm font-medium">
            <span className="text-red-500">*</span> Selling Price
          </Label>
          <Input
            id="sellingPrice"
            placeholder="Enter selling price"
            value={data.sellingPrice}
            onChange={(e) => handleChange('sellingPrice', e.target.value)}
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPricing;
