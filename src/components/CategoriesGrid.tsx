
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Edit, Eye, Trash2, Package } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import EditCategoryDrawer from './EditCategoryDrawer';

interface Category {
  id: number;
  name: string;
  status: boolean;
  products: number;
  image: string;
}

const CategoriesGrid = () => {
  const { currentPalette } = useTheme();
  
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: 'Serum',
      status: true,
      products: 3,
      image: '👤'
    },
    {
      id: 2,
      name: 'Sunscreen',
      status: true,
      products: 1,
      image: '👤'
    }
  ]);

  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleStatusToggle = (id: number) => {
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, status: !category.status }
        : category
    ));
  };

  const handleEditClick = (category: Category) => {
    setSelectedCategory(category);
    setIsEditDrawerOpen(true);
  };

  const handleSaveCategory = (updatedCategory: Category) => {
    setCategories(categories.map(category => 
      category.id === updatedCategory.id ? updatedCategory : category
    ));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">{category.image}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <Badge className={category.status ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                  {category.status ? 'Active' : 'Inactive'}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Products</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {category.products}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={category.status}
                      onCheckedChange={() => handleStatusToggle(category.id)}
                    />
                    <span className="text-sm text-gray-600">
                      {category.status ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditClick(category)}
                    className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <EditCategoryDrawer
        isOpen={isEditDrawerOpen}
        onClose={() => setIsEditDrawerOpen(false)}
        category={selectedCategory}
        onSave={handleSaveCategory}
      />
    </>
  );
};

export default CategoriesGrid;
