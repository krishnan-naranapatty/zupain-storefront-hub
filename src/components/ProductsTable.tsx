import React from 'react';
import { Edit, MoreHorizontal, Eye, Copy, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface ProductsTableProps {
  className?: string;
}

const ProductsTable = ({ className }: ProductsTableProps) => {
  const products = [
    {
      id: 1,
      image: '/placeholder.svg',
      name: 'Blameless Hydrating & Brightening Serum',
      description: 'With Watermelon, Niacinamide & Lotus Extracts | For Oily, Acne-Prone & Congested Skin',
      sku: 'BLS-HBS-50ML',
      category: 'Skincare',
      price: '₹999.00',
      inventory: 145,
      status: 'Active',
      rating: 4.8,
      orders: 234
    },
    {
      id: 2,
      image: '/placeholder.svg',
      name: 'Blameless Oil Control + Brightening Serum',
      description: 'Niacinamide, Multani Mitti, Hyaluronic Acid & Daisy Extract | Lightweight Gel',
      sku: 'BLS-OCS-50ML',
      category: 'Skincare',
      price: '₹849.00',
      inventory: 67,
      status: 'Active',
      rating: 4.6,
      orders: 156
    },
    {
      id: 3,
      image: '/placeholder.svg',
      name: 'Blameless Avocado + Green Tea Sunscreen SPF 50',
      description: 'Silicon based Ultra-Matte Gel | Broad Spectrum, Blue Light & Infrared Protection',
      sku: 'BLS-AGS-50ML',
      category: 'Skincare',
      price: '₹749.00',
      inventory: 8,
      status: 'Active',
      rating: 4.9,
      orders: 445
    },
    {
      id: 4,
      image: '/placeholder.svg',
      name: 'Blameless Pore Refining & Acne Control Serum',
      description: 'Salicylic Acid, Neem, Green Tea & Hibiscus | Lightweight Gel for Acne-Prone Skin',
      sku: 'BLS-PRS-50ML',
      category: 'Skincare',
      price: '₹949.00',
      inventory: 0,
      status: 'Draft',
      rating: 4.7,
      orders: 89
    }
  ];

  const getInventoryStatus = (inventory: number) => {
    if (inventory === 0) return { text: 'Out of Stock', color: 'text-red-600 bg-red-50' };
    if (inventory <= 10) return { text: 'Low Stock', color: 'text-orange-600 bg-orange-50' };
    return { text: 'In Stock', color: 'text-green-600 bg-green-50' };
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      Active: 'bg-green-100 text-green-800',
      Draft: 'bg-gray-100 text-gray-800',
      Archived: 'bg-red-100 text-red-800'
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.Draft;
  };

  return (
    <div className={`space-y-6 ${className || ''}`}>
      <div className="bg-white rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/80">
              <TableHead className="w-16 pl-6">
                <input type="checkbox" className="rounded border-gray-300" />
              </TableHead>
              <TableHead className="w-80">Product</TableHead>
              <TableHead className="w-32">SKU</TableHead>
              <TableHead className="w-32">Category</TableHead>
              <TableHead className="w-32">Price</TableHead>
              <TableHead className="w-32">Inventory</TableHead>
              <TableHead className="w-32">Status</TableHead>
              <TableHead className="w-32">Rating</TableHead>
              <TableHead className="w-32">Total Orders</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => {
              const inventoryStatus = getInventoryStatus(product.inventory);
              return (
                <TableRow key={product.id} className="hover:bg-gray-50/50">
                  <TableCell className="pl-6">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover border"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                        <p className="text-xs text-gray-500 truncate mt-1">{product.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-mono text-gray-600">{product.sku}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-900">{product.category}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <span className="text-sm font-medium text-gray-900">{product.inventory}</span>
                      <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${inventoryStatus.color}`}>
                        {inventoryStatus.text}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(product.status)}`}>
                      {product.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-gray-900">{product.orders}</span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="p-1">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 bg-white border shadow-lg">
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Product
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Copy className="w-4 h-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-600">
                          <Archive className="w-4 h-4 mr-2" />
                          Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing 1 to 4 of 1,247 products
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
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
