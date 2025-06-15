
import React from 'react';
import { Edit, MoreHorizontal, Eye, Copy, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const ProductsGrid = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const inventoryStatus = getInventoryStatus(product.inventory);
        return (
          <div key={product.id} className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 rounded-lg object-cover border mb-4"
              />
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-1 bg-white/80 backdrop-blur-sm">
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
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-gray-900 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-gray-600">{product.sku}</span>
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(product.status)}`}>
                  {product.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-900">{product.inventory} units</span>
                  <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ml-2 ${inventoryStatus.color}`}>
                    {inventoryStatus.text}
                  </div>
                </div>
                <span className="text-sm text-gray-600">{product.orders} orders</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
