
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useTheme } from '@/contexts/ThemeContext';

const CategoriesTable = () => {
  const { currentPalette } = useTheme();
  
  const categories = [
    {
      id: 1,
      name: 'Serum',
      status: 'active',
      products: 3,
      image: '👤'
    },
    {
      id: 2,
      name: 'Sunscreen',
      status: 'active',
      products: 1,
      image: '👤'
    }
  ];

  return (
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
                  <div className={`w-3 h-3 rounded-full ${category.status === 'active' ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                  <span className="text-sm text-gray-600">
                    {category.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </TableCell>
              <TableCell>{category.products}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
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
  );
};

export default CategoriesTable;
