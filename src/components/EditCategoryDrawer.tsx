
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, ChevronRight } from 'lucide-react';
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

const EditCategoryDrawer = ({ isOpen, onClose, category, onSave }: EditCategoryDrawerProps) => {
  const { currentPalette } = useTheme();
  const [categoryName, setCategoryName] = useState(category?.name || '');

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
    onClose();
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
            <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <span className="font-medium">Add Banner</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <span className="font-medium">Add Attributes</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <span className="font-medium">SEO</span>
              <ChevronRight className="w-4 h-4" />
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
