
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Edit, Eye, Trash2, ShoppingBag, Sparkles } from 'lucide-react';
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
      image: 'serum'
    },
    {
      id: 2,
      name: 'Sunscreen',
      status: true,
      products: 1,
      image: 'sunscreen'
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

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'serum':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'sunscreen':
        return <ShoppingBag className="w-5 h-5 text-white" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-white" />;
    }
  };

  const getCategoryGradient = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'serum':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'sunscreen':
        return 'bg-gradient-to-br from-orange-500 to-yellow-500';
      default:
        return 'bg-gradient-to-br from-blue-500 to-blue-600';
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white rounded-xl overflow-hidden group">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${getCategoryGradient(category.name)} rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform duration-300`}>
                    {getCategoryIcon(category.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <Badge className={`${category.status ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-gray-100 text-gray-600 border-gray-200'} font-medium px-2 py-0.5 rounded-full border text-xs`}>
                  {category.status ? 'Active' : 'Inactive'}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center">
                      <ShoppingBag className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Products</span>
                  </div>
                  <span className="text-base font-bold text-gray-900">
                    {category.products}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={category.status}
                      onCheckedChange={() => handleStatusToggle(category.id)}
                      className="data-[state=checked]:bg-emerald-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {category.status ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-1 mt-4 pt-3 border-t border-gray-100">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditClick(category)}
                  className="h-8 w-8 p-0 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                >
                  <Edit className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <Eye className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
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
