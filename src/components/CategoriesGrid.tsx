
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Eye, Trash2, ShoppingBag, Sparkles, MoreHorizontal, MapPin, Phone } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import EditCategoryDrawer from './EditCategoryDrawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Category {
  id: number;
  name: string;
  status: boolean;
  products: number;
  description: string;
  type: string;
}

const CategoriesGrid = () => {
  const { currentPalette } = useTheme();
  
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: 'Vitanix Serum Category',
      status: true,
      products: 3,
      description: 'Premium skincare serums collection',
      type: 'Serum'
    },
    {
      id: 2,
      name: 'Vitanix Sunscreen Category',
      status: true,
      products: 1,
      description: 'High-quality sun protection products',
      type: 'Sunscreen'
    }
  ]);

  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleEditClick = (category: Category) => {
    setSelectedCategory(category);
    setIsEditDrawerOpen(true);
  };

  const handleSaveCategory = (updatedCategory: Category) => {
    setCategories(categories.map(category => 
      category.id === updatedCategory.id ? updatedCategory : category
    ));
  };

  const getCategoryInitial = (categoryName: string) => {
    return categoryName.charAt(0).toUpperCase();
  };

  const getCategoryColor = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'vitanix serum category':
        return 'bg-blue-600';
      case 'vitanix sunscreen category':
        return 'bg-blue-600';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="group hover:shadow-lg transition-all duration-200 border border-gray-200 bg-white">
            <CardContent className="p-6">
              {/* Header with initial and actions */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${getCategoryColor(category.name)} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                  {getCategoryInitial(category.name)}
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-gray-400" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleEditClick(category)}
                  >
                    <Edit className="w-4 h-4 text-gray-400" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 bg-white border shadow-lg z-50">
                      <DropdownMenuItem onClick={() => handleEditClick(category)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Category name */}
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {category.name}
              </h3>
              
              {/* Brand/Type */}
              <p className="text-sm text-blue-600 mb-3">
                {category.type}
              </p>

              {/* Description */}
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <p>{category.description}</p>
              </div>

              {/* Products count */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <ShoppingBag className="w-4 h-4 mr-1" />
                <span>{category.products} products</span>
              </div>

              {/* Status and revenue */}
              <div className="flex items-center justify-between">
                <Badge 
                  variant={category.status ? "default" : "secondary"}
                  className={`${category.status 
                    ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' 
                    : 'bg-red-100 text-red-600 hover:bg-red-100'
                  } font-medium border-0 text-xs`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full mr-1 ${category.status ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                  {category.status ? 'Active' : 'Inactive'}
                </Badge>
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
