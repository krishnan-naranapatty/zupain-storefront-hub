
import React from 'react';
import { Edit, Share, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ProductsTable = () => {
  const products = [
    {
      id: 1,
      image: '/placeholder.svg',
      name: 'Blameless Hydrating & Brightening Serum | With Watermelon, Niacinamide & Lotus Extracts | For Oily, Acne-Prone & Congested Skin | 50ml',
      price: '₹9,990.00',
      inventory: true,
      status: true,
      rating: 5,
      ratingCount: '2'
    },
    {
      id: 2,
      image: '/placeholder.svg',
      name: 'Blameless Oil Control + Brightening Serum | Niacinamide, Multani Mitti, Hyaluronic Acid & Daisy Extract | Lightweight Gel for Oily, Acne-Prone Skin | Controls Sebum, Minimizes Pores & Evens Tone | 50ml',
      price: '₹999.00',
      inventory: true,
      status: true,
      rating: 4,
      ratingCount: '1'
    },
    {
      id: 3,
      image: '/placeholder.svg',
      name: 'Blameless Avocado + Green Tea Sunscreen SPF 50 PA++++ |Silicon based Ultra-Matte Gel |Broad Spectrum, Blue Light & Infrared Protection | Non-Greasy, Fast-Absorbing | For Face & Body | 50ml',
      price: '₹749.00',
      inventory: true,
      status: true,
      rating: 5,
      ratingCount: '2'
    },
    {
      id: 4,
      image: '/placeholder.svg',
      name: 'Blameless Pore Refining & Acne Control Serum | Salicylic Acid, Neem, Green Tea & Hibiscus | Lightweight Gel for Acne-Prone Skin | 50ml',
      price: '₹949.00',
      inventory: true,
      status: true,
      rating: 5,
      ratingCount: '1'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12"></TableHead>
              <TableHead className="w-96">Product Name</TableHead>
              <TableHead className="w-32">Price</TableHead>
              <TableHead className="w-32">Inventory</TableHead>
              <TableHead className="w-32">Product Status</TableHead>
              <TableHead className="w-40">Average ratings</TableHead>
              <TableHead className="w-32">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-50">
                <TableCell>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                </TableCell>
                <TableCell>
                  <div className="max-w-md">
                    <p className="text-sm text-gray-900 line-clamp-2">{product.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm font-medium">{product.price}</span>
                </TableCell>
                <TableCell>
                  <Switch checked={product.inventory} />
                </TableCell>
                <TableCell>
                  <Switch checked={product.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({product.ratingCount})</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-1 text-green-600">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 text-blue-600">
                      <Share className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center">
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

export default ProductsTable;
