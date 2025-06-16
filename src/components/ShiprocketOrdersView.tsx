
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Package, Calendar, User, Phone, Mail, MapPin, CreditCard, Truck, Copy } from 'lucide-react';
import ShiprocketOrdersFilters from './ShiprocketOrdersFilters';

const ShiprocketOrdersView = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'all',
    courier: 'all'
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filterButtons = [
    { id: 'all', label: 'All', count: 1 },
    { id: 'new', label: 'New', count: 1 },
    { id: 'ready-to-ship', label: 'Ready To Ship', count: 0 },
    { id: 'pickups', label: 'Pickups', count: 0 },
    { id: 'in-transit', label: 'In Transit', count: 0 },
    { id: 'delivered', label: 'Delivered', count: 0 }
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {/* Advanced Filters */}
      <ShiprocketOrdersFilters 
        activeFilters={filters}
        onFilterChange={handleFilterChange}
      />

      {/* Filter Buttons */}
      <div className="flex items-center space-x-2">
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
            {filter.count !== null && (
              <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                {filter.count}
              </span>
            )}
          </Button>
        ))}
      </div>

      {/* Orders Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-blue-600 flex items-center space-x-2">
                  <span>{order.zupainOrderId}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard(order.zupainOrderId)} 
                    className="h-6 w-6 p-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </CardTitle>
                <Badge variant="secondary" className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {order.orderDate}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Customer Details */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Customer Details
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-gray-900">{order.customerName}</div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-3 h-3 mr-2" />
                    {order.customerEmail}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-3 h-3 mr-2" />
                    {order.customerPhone}
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="bg-blue-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <Package className="w-4 h-4 mr-2" />
                  Package Details
                </h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>{order.packageWeight}</div>
                  <div>{order.packageDimensions}</div>
                  <div>{order.packageVolumetric}</div>
                </div>
              </div>

              {/* Payment & Pickup */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-700 mb-1 flex items-center text-sm">
                    <CreditCard className="w-3 h-3 mr-1" />
                    Payment
                  </h4>
                  <div className="font-medium text-gray-900">{order.paymentAmount}</div>
                  <div className="text-sm text-green-600">{order.paymentStatus}</div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-700 mb-1 flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" />
                    Pickup
                  </h4>
                  <div className="text-sm text-gray-600">{order.pickupLocation}</div>
                </div>
              </div>

              {/* Shiprocket Order Details */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Shiprocket Details
                </h4>
                <div className="text-sm text-gray-500">
                  {order.shiprocketOrderDetails || 'Not yet created'}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white flex-1 mr-2"
                >
                  {order.action}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Order</DropdownMenuItem>
                    <DropdownMenuItem>Track Shipment</DropdownMenuItem>
                    <DropdownMenuItem>Download Label</DropdownMenuItem>
                    <DropdownMenuItem>Cancel Order</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Orders State */}
      {orders.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Orders Found</h3>
          <p className="text-gray-500">No shiprocket orders match the selected filters.</p>
        </div>
      )}

      {/* Pagination */}
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

export default ShiprocketOrdersView;
