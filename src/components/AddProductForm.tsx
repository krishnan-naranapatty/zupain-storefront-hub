
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Save } from 'lucide-react';
import ProductBasicInfo from './product-form/ProductBasicInfo';
import ProductImages from './product-form/ProductImages';
import ProductPricing from './product-form/ProductPricing';
import ProductInventory from './product-form/ProductInventory';
import ProductVariants from './product-form/ProductVariants';
import ProductAdditionalDetails from './product-form/ProductAdditionalDetails';
import ProductSEO from './product-form/ProductSEO';

interface AddProductFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddProductForm = ({ open, onOpenChange }: AddProductFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    gstPercentage: '',
    priceType: 'direct',
    weight: '',
    price: '',
    discount: '',
    makingCharge: '',
    sellingPrice: '',
    trackInventory: false,
    currentStock: '',
    stock: '',
    variants: [],
    shelfLife: '',
    countryOfOrigin: '',
    seller: '',
    marketedBy: '',
    manufacturerDetails: '',
    pageTitle: '',
    metaDescription: '',
    urlHandle: '',
    images: []
  });

  const handleSave = () => {
    console.log('Saving product:', formData);
    // Here you would typically send the data to your backend
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-4xl p-0" hideCloseButton>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-white">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onOpenChange(false)}
                className="p-2"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <SheetTitle className="text-xl font-semibold">Add Product</SheetTitle>
            </div>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              Save Product
            </Button>
          </div>

          {/* Form Content */}
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-8">
              {/* Product Images */}
              <ProductImages 
                images={formData.images}
                onChange={(images) => setFormData({ ...formData, images })}
              />

              {/* Basic Information */}
              <ProductBasicInfo 
                data={{
                  name: formData.name,
                  description: formData.description,
                  category: formData.category,
                  gstPercentage: formData.gstPercentage
                }}
                onChange={(data) => setFormData({ ...formData, ...data })}
              />

              {/* Pricing */}
              <ProductPricing 
                data={{
                  priceType: formData.priceType,
                  weight: formData.weight,
                  price: formData.price,
                  discount: formData.discount,
                  makingCharge: formData.makingCharge,
                  sellingPrice: formData.sellingPrice
                }}
                onChange={(data) => setFormData({ ...formData, ...data })}
              />

              {/* Inventory */}
              <ProductInventory 
                data={{
                  trackInventory: formData.trackInventory,
                  currentStock: formData.currentStock,
                  stock: formData.stock
                }}
                onChange={(data) => setFormData({ ...formData, ...data })}
              />

              {/* Variants */}
              <ProductVariants 
                variants={formData.variants}
                onChange={(variants) => setFormData({ ...formData, variants })}
              />

              {/* Additional Details */}
              <ProductAdditionalDetails 
                data={{
                  shelfLife: formData.shelfLife,
                  countryOfOrigin: formData.countryOfOrigin,
                  seller: formData.seller,
                  marketedBy: formData.marketedBy,
                  manufacturerDetails: formData.manufacturerDetails
                }}
                onChange={(data) => setFormData({ ...formData, ...data })}
              />

              {/* SEO */}
              <ProductSEO 
                data={{
                  pageTitle: formData.pageTitle,
                  metaDescription: formData.metaDescription,
                  urlHandle: formData.urlHandle
                }}
                onChange={(data) => setFormData({ ...formData, ...data })}
              />
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddProductForm;
