
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronLeft, MoreHorizontal, Package } from 'lucide-react';

const ShiprocketOrders = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const { currentPalette } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const filterButtons = [
    { id: 'all', label: 'All', count: null },
    { id: 'new', label: 'New', count: null },
    { id: 'ready-to-ship', label: 'Ready To Ship', count: null },
    { id: 'pickups', label: 'Pickups', count: null },
    { id: 'in-transit', label: 'In Transit', count: null },
    { id: 'delivered', label: 'Delivered', count: null }
  ];

  const orders = [
    {
      zupainOrderId: '1004',
      orderDate: '28 May 2025, 01:39 PM',
      shiprocketOrderDetails: '',
      customerName: 'test',
      customerEmail: 'ayush@gmail.com',
      customerPhone: '7061558454',
      packageWeight: 'Dead wt. : 0 Kg',
      packageDimensions: '0x0x0 (cm)',
      packageVolumetric: 'Volumetric wt. : 0 Kg',
      paymentAmount: '₹0.00',
      paymentStatus: 'Prepaid',
      pickupLocation: 'warehouse',
      status: 'NEW',
      action: 'Ship Now'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-green-100 text-green-800';
      case 'ready-to-ship':
        return 'bg-blue-100 text-blue-800';
      case 'in-transit':
        return 'bg-yellow-100 text-yellow-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`flex min-h-screen ${currentPalette.background}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <span>Home</span>
            <span>></span>
            <span>Orders</span>
            <span>></span>
            <span className="text-gray-900 font-medium">Shiprocket Orders</span>
          </div>

          {/* Page Header */}
          <div className="flex items-center space-x-3 mb-6">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
            <Package className="w-6 h-6 text-gray-700" />
            <h1 className="text-2xl font-semibold text-gray-900">Shiprocket Orders</h1>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2 mb-6">
            {filterButtons.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                } rounded-full px-4 py-2`}
              >
                {filter.label}
                {filter.count && (
                  <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {filter.count}
                  </span>
                )}
              </Button>
            ))}
          </div>

          {/* Orders Table */}
          <Card className="shadow-sm border border-gray-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-gray-700 font-medium">Zupain Order Details</TableHead>
                    <TableHead className="text-gray-700 font-medium">
                      <div className="flex items-center">
                        Shiprocket Order Details
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                              <MoreHorizontal className="w-3 h-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Sort A-Z</DropdownMenuItem>
                            <DropdownMenuItem>Sort Z-A</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableHead>
                    <TableHead className="text-gray-700 font-medium">
                      <div className="flex items-center">
                        Customer Details
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                              <MoreHorizontal className="w-3 h-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Sort A-Z</DropdownMenuItem>
                            <DropdownMenuItem>Sort Z-A</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableHead>
                    <TableHead className="text-gray-700 font-medium">Package Details</TableHead>
                    <TableHead className="text-gray-700 font-medium">
                      <div className="flex items-center">
                        Payment
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                              <MoreHorizontal className="w-3 h-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Sort A-Z</DropdownMenuItem>
                            <DropdownMenuItem>Sort Z-A</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableHead>
                    <TableHead className="text-gray-700 font-medium">Pickup Details</TableHead>
                    <TableHead className="text-gray-700 font-medium">
                      <div className="flex items-center">
                        Status
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="ml-1 h-4 w-4 p-0">
                              <MoreHorizontal className="w-3 h-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Sort A-Z</DropdownMenuItem>
                            <DropdownMenuItem>Sort Z-A</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableHead>
                    <TableHead className="text-gray-700 font-medium">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order, index) => (
                    <TableRow key={index} className="border-b border-gray-100">
                      <TableCell>
                        <div>
                          <div className="font-semibold text-gray-900">{order.zupainOrderId}</div>
                          <div className="text-sm text-gray-500">{order.orderDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-gray-500 text-sm">-</div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{order.customerName}</div>
                          <div className="text-sm text-gray-600">{order.customerEmail}</div>
                          <div className="text-sm text-gray-600">{order.customerPhone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <div className="text-gray-600">{order.packageWeight}</div>
                          <div className="text-gray-600">{order.packageDimensions}</div>
                          <div className="text-gray-600">{order.packageVolumetric}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{order.paymentAmount}</div>
                          <div className="text-sm text-green-600">{order.paymentStatus}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-gray-600">{order.pickupLocation}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm"
                          >
                            {order.action}
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Order</DropdownMenuItem>
                              <DropdownMenuItem>Cancel Order</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
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
        </main>
      </div>
    </div>
  );
};

export default ShiprocketOrders;
