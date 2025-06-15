
import React, { useState } from 'react';
import { Edit, MoreHorizontal, Eye, Copy, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const ProductsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allProducts = [
    {
      id: 1,
      image: '/placeholder.svg',
      name: 'Blameless Hydrating & Brightening Serum',
      description: 'With Watermelon, Niacinamide & Lotus Extracts | For Oily, Acne-Prone & Congested Skin',
      sku: 'BLS-HBS-50ML',
      category: 'Skincare',
      price: 999,
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
      price: 849,
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
      price: 749,
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
      price: 949,
      inventory: 0,
      status: 'Draft',
      rating: 4.7,
      orders: 89
    },
    {
      id: 5,
      image: '/placeholder.svg',
      name: 'Vitanix Vitamin C Face Wash',
      description: 'Brightening cleanser with natural vitamin C and gentle exfoliants',
      sku: 'VTX-VCW-100ML',
      category: 'Skincare',
      price: 699,
      inventory: 234,
      status: 'Active',
      rating: 4.5,
      orders: 567
    },
    {
      id: 6,
      image: '/placeholder.svg',
      name: 'Vitanix Collagen Booster Serum',
      description: 'Anti-aging serum with peptides and hyaluronic acid',
      sku: 'VTX-CBS-30ML',
      category: 'Beauty',
      price: 1299,
      inventory: 89,
      status: 'Active',
      rating: 4.7,
      orders: 123
    },
    {
      id: 7,
      image: '/placeholder.svg',
      name: 'Herbal Glow Night Cream',
      description: 'Nourishing night cream with natural herbs and botanical extracts',
      sku: 'HG-NC-50ML',
      category: 'Skincare',
      price: 899,
      inventory: 156,
      status: 'Active',
      rating: 4.4,
      orders: 345
    },
    {
      id: 8,
      image: '/placeholder.svg',
      name: 'Pure Essence Toner',
      description: 'Alcohol-free toner with rose water and witch hazel',
      sku: 'PE-T-200ML',
      category: 'Skincare',
      price: 549,
      inventory: 78,
      status: 'Active',
      rating: 4.3,
      orders: 234
    },
    {
      id: 9,
      image: '/placeholder.svg',
      name: 'Omega-3 Fish Oil Capsules',
      description: 'High-strength omega-3 fatty acids for heart and brain health',
      sku: 'O3-FO-60CAP',
      category: 'Supplements',
      price: 1199,
      inventory: 267,
      status: 'Active',
      rating: 4.6,
      orders: 678
    },
    {
      id: 10,
      image: '/placeholder.svg',
      name: 'Multivitamin Complex',
      description: 'Complete daily nutrition with 25 essential vitamins and minerals',
      sku: 'MV-C-90TAB',
      category: 'Supplements',
      price: 799,
      inventory: 45,
      status: 'Active',
      rating: 4.5,
      orders: 456
    },
    {
      id: 11,
      image: '/placeholder.svg',
      name: 'Green Tea Extract',
      description: 'Antioxidant-rich supplement for metabolism and energy',
      sku: 'GTE-60CAP',
      category: 'Wellness',
      price: 649,
      inventory: 123,
      status: 'Active',
      rating: 4.2,
      orders: 189
    },
    {
      id: 12,
      image: '/placeholder.svg',
      name: 'Probiotics Daily',
      description: '10 billion CFU probiotic blend for digestive health',
      sku: 'PD-30CAP',
      category: 'Wellness',
      price: 1049,
      inventory: 89,
      status: 'Active',
      rating: 4.8,
      orders: 234
    }
  ];

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  const formatPrice = (price: number) => `₹${price}.00`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => {
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
                  <span className="text-lg font-semibold text-gray-900">{formatPrice(product.price)}</span>
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

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, allProducts.length)} of {allProducts.length} products
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductsGrid;
