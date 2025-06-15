
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ThemeEditorProps {
  theme?: any;
  onClose: () => void;
  onSave: () => void;
}

const ThemeEditor: React.FC<ThemeEditorProps> = ({ theme, onClose, onSave }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleSave = () => {
    console.log('Saving theme changes');
    onSave();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={onClose}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h2 className="text-2xl font-bold text-gray-900">
            {theme?.name} <span className="text-lg">✏️</span>
          </h2>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">Background Color</Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
            Save
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Preview */}
        <Card>
          <CardContent className="p-6">
            <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Product preview"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-2 mb-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-12 h-12 bg-gray-100 rounded border">
                  <img src="/placeholder.svg" alt={`Thumbnail ${i}`} className="w-full h-full object-cover rounded" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Product Details */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">SAMPLE PRODUCT</h1>
              <p className="text-sm text-gray-600 mb-4">BRAND NAME</p>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-gray-900">₹100.00</span>
                <span className="text-lg text-gray-500 line-through">₹150.00</span>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">( 33% OFF )</span>
              </div>
              
              <p className="text-xs text-gray-500 mb-6">(No additional tax may apply on checkout)</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">SELECT VARIANT</h3>
              <div className="flex space-x-2 mb-6">
                <Button variant="outline" size="sm">Variant 1</Button>
                <Button variant="outline" size="sm">Variant 2</Button>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1 bg-red-100 text-red-700 hover:bg-red-200">
                🛒 Add To Cart
              </Button>
              <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                Buy Now
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">What Makes Product Descriptions Great</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                There are a lot of elements and it varies heavily depending on the product and audience in question. While there is
                no one-size-fits-all rule, there are some best practices to keep in mind.
              </p>
              <p className="text-sm text-gray-600">Some of the most important of these include:</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Engage emotionally</h4>
                  <p className="text-sm text-gray-600">
                    Put some flesh and bones on the cold steel of your product. Emotions sell more than facts do! It's easy
                    to <span className="text-green-600">overwhelm prospects</span> with too much information and confuse them.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Focus on the benefit</h4>
                  <p className="text-sm text-gray-600">
                    Your customers are probably wondering, "Features are great and all, but how does it benefit me?" It's a great
                    question and one you should be prepared to answer in your product description.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Products */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Related Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-500">Related products will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeEditor;
