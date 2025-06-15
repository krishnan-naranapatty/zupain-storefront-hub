
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package, Tag } from 'lucide-react';

interface ProductSelectionSectionProps {
  formData: {
    selectionType: string;
    selectedCategory: string;
    selectedProduct: string;
  };
  onInputChange: (field: string, value: any) => void;
}

const ProductSelectionSection: React.FC<ProductSelectionSectionProps> = ({ formData, onInputChange }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Product/Category Selection</h3>
      
      <div className="space-y-6">
        {/* Selection Type */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            Apply discount to <span className="text-red-500">*</span>
          </Label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.selectionType === 'category' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onInputChange('selectionType', 'category')}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  formData.selectionType === 'category' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Tag className={`w-5 h-5 ${
                    formData.selectionType === 'category' ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Category</h4>
                  <p className="text-sm text-gray-500">Apply to entire category</p>
                </div>
              </div>
            </div>
            
            <div 
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.selectionType === 'product' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onInputChange('selectionType', 'product')}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  formData.selectionType === 'product' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Package className={`w-5 h-5 ${
                    formData.selectionType === 'product' ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Specific Product</h4>
                  <p className="text-sm text-gray-500">Apply to specific product</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category/Product Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {formData.selectionType === 'category' && (
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Select Category <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.selectedCategory} onValueChange={(value) => onInputChange('selectedCategory', value)}>
                <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="sports">Sports & Outdoors</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          {formData.selectionType === 'product' && (
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Select Product <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.selectedProduct} onValueChange={(value) => onInputChange('selectedProduct', value)}>
                <SelectTrigger className="h-11 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Choose a product" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                  <SelectItem value="product1">iPhone 15 Pro</SelectItem>
                  <SelectItem value="product2">Samsung Galaxy S24</SelectItem>
                  <SelectItem value="product3">MacBook Air M2</SelectItem>
                  <SelectItem value="product4">Dell XPS 13</SelectItem>
                  <SelectItem value="product5">Sony WH-1000XM5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        
        {/* Info Note */}
        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-700">
            <strong>Note:</strong> This discount will be automatically applied to {
              formData.selectionType === 'category' ? 'all products in the selected category' : 'the selected product'
            } when customers add them to their cart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionSection;
