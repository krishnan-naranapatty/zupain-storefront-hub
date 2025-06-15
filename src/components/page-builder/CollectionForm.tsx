
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface CollectionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const CollectionForm: React.FC<CollectionFormProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [pageTitle, setPageTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const products = [
    {
      id: 1,
      name: 'Blameless Hydrating & Brightening Serum | With Watermelon, Niacinamide & Lotus Extracts | For Oily, Acne-Prone & Congested Skin | 50ml',
      mrp: '₹11,259.00',
      sellingPrice: '₹9,990.00',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Blameless Oil Control + Brightening Serum | Niacinamide, Multani Mitti, Hyaluronic Acid & Daisy Extract | Lightweight Gel for Oily, Acne-Prone Skin | Controls Sebum, Minimizes Pores & Evens Tone | 50ml',
      mrp: '₹1,199.00',
      sellingPrice: '₹999.00',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Blameless Avocado + Green Tea Sunscreen SPF 50 PA++++ |Silicon based Ultra-Matte Gel |Broad Spectrum, Blue Light & Infrared Protection | Non-Greasy, Fast-Absorbing | For Face & Body | 50ml',
      mrp: '₹849.00',
      sellingPrice: '₹749.00',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Blameless Pore Refining & Acne Control Serum | Salicylic Acid, Neem, Green Tea & Hibiscus | Lightweight Gel for Acne-Prone Skin | 50ml',
      mrp: '₹1,099.00',
      sellingPrice: '₹949.00',
      image: '/placeholder.svg'
    }
  ];

  const handleProductSelect = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSave = () => {
    onSave();
    // Reset form
    setTitle('');
    setSelectedProducts([]);
    setPageTitle('');
    setMetaDescription('');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full max-w-4xl p-0 overflow-y-auto">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <SheetTitle>Create Collection</SheetTitle>
          </div>
        </SheetHeader>

        <div className="p-6 space-y-6">
          {/* Warning Alert */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold mt-0.5">
              !
            </div>
            <p className="text-yellow-800 text-sm">
              The image should have a resolution of 300 x 300 for a better fit.
            </p>
          </div>

          {/* Image Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">Upload</p>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> Title
            </label>
            <Input
              placeholder="Enter collection Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Add Product Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-gray-900 mb-4">Add Product</h3>
              
              {/* Category Dropdowns */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="skincare">Skincare</SelectItem>
                    <SelectItem value="haircare">Haircare</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sub Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="serums">Serums</SelectItem>
                    <SelectItem value="moisturizers">Moisturizers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>MRP</TableHead>
                    <TableHead>Selling Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedProducts.includes(product.id)}
                          onCheckedChange={() => handleProductSelect(product.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-100 rounded border flex items-center justify-center">
                            <img
                              src={product.image}
                              alt="Product"
                              className="w-8 h-8 object-cover rounded"
                            />
                          </div>
                          <span className="text-sm">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{product.mrp}</TableCell>
                      <TableCell className="font-medium">{product.sellingPrice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2 mt-4">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="default" size="sm" className="w-8 h-8 rounded-full">
                  1
                </Button>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* SEO Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium text-gray-900 mb-4">SEO</h3>
              
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  https://blameless.zupain.com/collection-list?collectionId=&viewType=grid
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Page Title</label>
                  <Input
                    placeholder="Page Title"
                    value={pageTitle}
                    onChange={(e) => setPageTitle(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Meta Description</label>
                  <textarea
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Meta Description"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-6">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              Save
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CollectionForm;
