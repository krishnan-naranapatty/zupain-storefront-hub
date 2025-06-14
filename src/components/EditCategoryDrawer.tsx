
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, ChevronRight, ChevronDown, Plus, Trash2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface Category {
  id: number;
  name: string;
  status: boolean;
  products: number;
  image: string;
}

interface EditCategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onSave: (category: Category) => void;
}

interface Attribute {
  id: string;
  name: string;
  dataType: string;
}

const EditCategoryDrawer = ({ isOpen, onClose, category, onSave }: EditCategoryDrawerProps) => {
  const { currentPalette } = useTheme();
  const [categoryName, setCategoryName] = useState(category?.name || '');
  const [isBannerExpanded, setIsBannerExpanded] = useState(false);
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerDescription, setBannerDescription] = useState('');
  const [isAttributesExpanded, setIsAttributesExpanded] = useState(false);
  const [isSEOExpanded, setIsSEOExpanded] = useState(false);
  
  // Attributes state
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [newAttributeName, setNewAttributeName] = useState('');
  const [newAttributeDataType, setNewAttributeDataType] = useState('');
  
  // SEO state
  const [seoPageTitle, setSeoPageTitle] = useState('');
  const [seoMetaDescription, setSeoMetaDescription] = useState('');
  const [seoCategoryUrlHandle, setSeoCategoryUrlHandle] = useState('');

  React.useEffect(() => {
    if (category) {
      setCategoryName(category.name);
    }
  }, [category]);

  const handleSave = () => {
    if (category) {
      onSave({
        ...category,
        name: categoryName
      });
    }
    onClose();
  };

  const handleCancel = () => {
    setCategoryName(category?.name || '');
    setBannerTitle('');
    setBannerDescription('');
    setIsBannerExpanded(false);
    setIsAttributesExpanded(false);
    setIsSEOExpanded(false);
    setAttributes([]);
    setNewAttributeName('');
    setNewAttributeDataType('');
    setSeoPageTitle('');
    setSeoMetaDescription('');
    setSeoCategoryUrlHandle('');
    onClose();
  };

  const handleAddAttribute = () => {
    if (newAttributeName && newAttributeDataType) {
      const newAttribute: Attribute = {
        id: Date.now().toString(),
        name: newAttributeName,
        dataType: newAttributeDataType
      };
      setAttributes([...attributes, newAttribute]);
      setNewAttributeName('');
      setNewAttributeDataType('');
    }
  };

  const handleRemoveAttribute = (id: string) => {
    setAttributes(attributes.filter(attr => attr.id !== id));
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-96 sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center text-lg font-medium">
            <span className="mr-2">← Edit Category</span>
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          {/* Add category section */}
          <div>
            <div className={`${currentPalette.primary} text-white p-3 rounded-t-lg`}>
              <h3 className="font-medium">Add category</h3>
            </div>
            
            <div className="border border-t-0 p-4 rounded-b-lg">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="category-name" className="text-sm font-medium">
                    * Categories
                  </Label>
                  <Input
                    id="category-name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Image upload area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Drag & drop files or Browse</p>
                  <p className="text-xs text-gray-500">300 x 300</p>
                  <p className="text-xs text-red-500 mt-1">Image aspect ratio for better fit</p>
                  <p className="text-xs text-red-500">Max file size 2MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable sections */}
          <div className="space-y-2">
            {/* Add Banner - Expandable */}
            <div className="border rounded-lg">
              <div 
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
                onClick={() => setIsBannerExpanded(!isBannerExpanded)}
              >
                <span className="font-medium">Add Banner</span>
                {isBannerExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
              
              {isBannerExpanded && (
                <div className="border-t p-4 space-y-4">
                  {/* Banner Image */}
                  <div>
                    <Label className="text-sm font-medium text-gray-600 mb-2 block">
                      Banner Image
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Drag & drop files or Browse</p>
                      <p className="text-xs text-gray-500">1920 x 1080</p>
                      <p className="text-xs text-blue-500">Image aspect ratio for better fit</p>
                      <p className="text-xs text-red-500">Max file size: Image 2MB</p>
                    </div>
                  </div>

                  {/* Banner Title */}
                  <div>
                    <Label htmlFor="banner-title" className="text-sm font-medium text-gray-600">
                      Banner Title
                    </Label>
                    <Input
                      id="banner-title"
                      placeholder="Enter Banner Title"
                      value={bannerTitle}
                      onChange={(e) => setBannerTitle(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  {/* Banner Description */}
                  <div>
                    <Label htmlFor="banner-description" className="text-sm font-medium text-gray-600">
                      Banner Description
                    </Label>
                    <Textarea
                      id="banner-description"
                      placeholder="Enter Banner Description"
                      value={bannerDescription}
                      onChange={(e) => setBannerDescription(e.target.value)}
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Add Attributes - Expandable */}
            <div className="border rounded-lg">
              <div 
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
                onClick={() => setIsAttributesExpanded(!isAttributesExpanded)}
              >
                <span className="font-medium">Add Attributes</span>
                {isAttributesExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
              
              {isAttributesExpanded && (
                <div className="border-t p-4 space-y-4">
                  {/* Add Attribute Form */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-sm font-medium text-gray-600 mb-1 block">
                        * Add Attributes
                      </Label>
                      <Input
                        placeholder="Enter Attributes"
                        value={newAttributeName}
                        onChange={(e) => setNewAttributeName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600 mb-1 block">
                        Data Type
                      </Label>
                      <Select value={newAttributeDataType} onValueChange={setNewAttributeDataType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text</SelectItem>
                          <SelectItem value="number">Number</SelectItem>
                          <SelectItem value="boolean">Boolean</SelectItem>
                          <SelectItem value="date">Date</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleAddAttribute}
                    className={`${currentPalette.primary} text-white hover:${currentPalette.primary}/90`}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>

                  {/* Attributes Table */}
                  {attributes.length > 0 && (
                    <div className="mt-4">
                      <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-700 mb-2 pb-2 border-b">
                        <span>Attributes</span>
                        <span>Data Type</span>
                        <span>Actions</span>
                      </div>
                      <div className="space-y-2">
                        {attributes.map((attribute) => (
                          <div key={attribute.id} className="grid grid-cols-3 gap-4 text-sm items-center">
                            <span>{attribute.name}</span>
                            <span className="capitalize">{attribute.dataType}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveAttribute(attribute.id)}
                              className="text-red-600 hover:text-red-700 p-1 h-auto"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {attributes.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-4xl mb-2">📊</div>
                      <p className="text-sm">No data</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* SEO - Expandable */}
            <div className="border rounded-lg">
              <div 
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
                onClick={() => setIsSEOExpanded(!isSEOExpanded)}
              >
                <span className="font-medium">SEO</span>
                {isSEOExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
              
              {isSEOExpanded && (
                <div className="border-t p-4 space-y-4">
                  {/* Page Title */}
                  <div>
                    <Label htmlFor="seo-page-title" className="text-sm font-medium text-gray-700 mb-1 block">
                      Page Title
                    </Label>
                    <div className="text-xs text-blue-600 mb-2">
                      https://blameless.zupain.com/product-list?categoryId=57891c0a-c815-4607-b075-0db138c5beba
                    </div>
                    <div className="text-xs text-gray-600 mb-1">Meta Description</div>
                    <Input
                      id="seo-page-title"
                      placeholder="Page Title"
                      value={seoPageTitle}
                      onChange={(e) => setSeoPageTitle(e.target.value)}
                    />
                  </div>

                  {/* Meta Description */}
                  <div>
                    <Label htmlFor="seo-meta-description" className="text-sm font-medium text-gray-600 mb-1 block">
                      Meta Description
                    </Label>
                    <Textarea
                      id="seo-meta-description"
                      placeholder="Meta Description"
                      value={seoMetaDescription}
                      onChange={(e) => setSeoMetaDescription(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Category URL Handle */}
                  <div>
                    <Label htmlFor="seo-url-handle" className="text-sm font-medium text-gray-600 mb-1 block">
                      Category Url Handle
                    </Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-blue-600 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                        https://blameless.zupain.com/product-list?categoryId=
                      </span>
                      <Input
                        id="seo-url-handle"
                        placeholder="Url Handle"
                        value={seoCategoryUrlHandle}
                        onChange={(e) => setSeoCategoryUrlHandle(e.target.value)}
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3 pt-4">
            <Button 
              variant="outline" 
              onClick={handleCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              className={`${currentPalette.primary} text-white hover:${currentPalette.primary}/90 flex-1`}
            >
              Save
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditCategoryDrawer;
