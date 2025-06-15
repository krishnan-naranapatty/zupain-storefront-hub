
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

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
      <SheetContent side="right" className="w-full max-w-4xl p-0" hideCloseButton>
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <SheetTitle>Create Collection</SheetTitle>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-4 space-y-4">
            {/* Warning Alert */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start space-x-2">
              <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">
                !
              </div>
              <p className="text-yellow-800 text-sm">
                The image should have a resolution of 300 x 300 for a better fit.
              </p>
            </div>

            {/* Image Upload & Title in Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Image Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Upload</p>
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
            </div>

            {/* Add Product Section */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-3">Add Product</h3>
                
                {/* Category Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <Select>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="skincare">Skincare</SelectItem>
                      <SelectItem value="haircare">Haircare</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Sub Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="serums">Serums</SelectItem>
                      <SelectItem value="moisturizers">Moisturizers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Products Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="w-8 py-2"></TableHead>
                        <TableHead className="py-2">Product Name</TableHead>
                        <TableHead className="w-24 py-2">MRP</TableHead>
                        <TableHead className="w-28 py-2">Selling Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="py-3">
                            <Checkbox
                              checked={selectedProducts.includes(product.id)}
                              onCheckedChange={() => handleProductSelect(product.id)}
                            />
                          </TableCell>
                          <TableCell className="py-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gray-100 rounded border flex items-center justify-center flex-shrink-0">
                                <img
                                  src={product.image}
                                  alt="Product"
                                  className="w-6 h-6 object-cover rounded"
                                />
                              </div>
                              <span className="text-xs line-clamp-2">{product.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium text-sm py-3">{product.mrp}</TableCell>
                          <TableCell className="font-medium text-sm py-3">{product.sellingPrice}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-2 mt-3">
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
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-3">SEO</h3>
                
                <div className="space-y-3">
                  <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded border">
                    https://blameless.zupain.com/collection-list?collectionId=&viewType=grid
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Page Title</label>
                      <Input
                        placeholder="Page Title"
                        value={pageTitle}
                        onChange={(e) => setPageTitle(e.target.value)}
                        className="h-9"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Meta Description</label>
                      <textarea
                        className="w-full h-20 px-3 py-2 text-sm border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Meta Description"
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        {/* Fixed Action Buttons */}
        <div className="flex justify-end space-x-3 p-4 border-t bg-white">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            Save
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CollectionForm;
