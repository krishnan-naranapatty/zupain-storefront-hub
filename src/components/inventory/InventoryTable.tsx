
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Package } from 'lucide-react';

const InventoryTable = () => {
  const [inventoryData] = useState([
    {
      id: 1,
      image: '/placeholder.svg',
      name: 'Blameless Avocado + Green Tea Sunscreen SPF 50',
      description: 'Silicon based Ultra-Matte Gel | Broad Spectrum, Blue Light & Infrared Protection | Non-Greasy, Fast-Absorbing | For Face & Body | 50ml',
      variant: '',
      inStock: 201,
      outStock: 3,
      availability: 198,
      status: 'In Stock'
    },
    {
      id: 2,
      image: '/placeholder.svg',
      name: 'Blameless Pore Refining & Acne Control Serum',
      description: 'Salicylic Acid, Neem, Green Tea & Hibiscus | Lightweight Gel for Acne-Prone Skin | 50ml',
      variant: '',
      inStock: 200,
      outStock: 1,
      availability: 199,
      status: 'In Stock'
    },
    {
      id: 3,
      image: '/placeholder.svg',
      name: 'Blameless Oil Control + Brightening Serum',
      description: 'Niacinamide, Multani Mitti, Hyaluronic Acid & Daisy Extract | Lightweight Gel for Oily, Acne-Prone Skin | Controls Sebum, Minimizes Pores & Evens Tone | 50ml',
      variant: '',
      inStock: 201,
      outStock: 4,
      availability: 197,
      status: 'In Stock'
    },
    {
      id: 4,
      image: '/placeholder.svg',
      name: 'Blameless Hydrating & Brightening Serum',
      description: 'With Watermelon, Niacinamide & Lotus Extracts | For Oily, Acne-Prone & Congested Skin | 50ml',
      variant: '',
      inStock: 1101,
      outStock: 902,
      availability: 199,
      status: 'Low Stock'
    }
  ]);

  const getStatusBadge = (status: string, availability: number) => {
    if (availability === 0) return <Badge variant="destructive">Out of Stock</Badge>;
    if (availability <= 10) return <Badge variant="secondary" className="bg-orange-100 text-orange-800">Low Stock</Badge>;
    return <Badge variant="secondary" className="bg-green-100 text-green-800">In Stock</Badge>;
  };

  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/80">
            <TableHead className="w-80 font-medium">Product Name</TableHead>
            <TableHead className="w-32 text-center font-medium">Variant</TableHead>
            <TableHead className="w-32 text-center font-medium">In Stock</TableHead>
            <TableHead className="w-32 text-center font-medium">Out Stock</TableHead>
            <TableHead className="w-32 text-center font-medium">Availability</TableHead>
            <TableHead className="w-32 text-center font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventoryData.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-50/50">
              <TableCell className="py-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-sm text-gray-600">{item.variant || '-'}</span>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-sm font-medium text-blue-600">{item.inStock}</span>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-sm font-medium text-red-600">{item.outStock}</span>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-sm font-medium text-gray-900">{item.availability}</span>
                  {getStatusBadge(item.status, item.availability)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Button variant="outline" size="sm" className="p-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Package className="w-4 h-4 text-blue-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTable;
