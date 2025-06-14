
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useTheme } from '@/contexts/ThemeContext';
import EditCategoryDrawer from './EditCategoryDrawer';

interface Category {
  id: number;
  name: string;
  status: boolean;
  products: number;
  image: string;
}

const CategoriesTable = () => {
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
      <div className={`${currentPalette.cardBg} rounded-lg shadow-sm border`}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Products</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">{category.image}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={category.status}
                      onCheckedChange={() => handleStatusToggle(category.id)}
                    />
                    <span className="text-sm text-gray-600">
                      {category.status ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{category.products}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-green-600 hover:text-green-700"
                      onClick={() => handleEditClick(category)}
                    >
                      ✏️
                    </Button>
                    <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700">
                      👁️
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      🗑️
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex items-center justify-center p-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
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

export default CategoriesTable;
