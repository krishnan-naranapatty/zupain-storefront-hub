import React, { useState } from 'react';
import { Download, ArrowUpDown, Calendar, User, CreditCard, Package, Kanban, Clock, LayoutGrid, Eye, Edit3, Trash2, MessageSquare, Truck, ChevronDown, ChevronRight, Grid3X3, List, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import OrdersTimeline from './OrdersTimeline';

interface OrdersTableProps {
  activeFilter: string;
}

const OrdersTable = ({ activeFilter }: OrdersTableProps) => {
  const [viewMode, setViewMode] = useState<'kanban' | 'timeline' | 'cards' | 'list'>('cards');
  const [expandedOrders, setExpandedOrders] = useState<Set<string>>(new Set());

  const toggleOrderExpansion = (orderId: string) => {
    const newExpanded = new Set(expandedOrders);
    if (newExpanded.has(orderId)) {
      newExpanded.delete(orderId);
    } else {
      newExpanded.add(orderId);
    }
    setExpandedOrders(newExpanded);
  };

  const allOrders = [
    {
      id: 'ORID0056',
      customer: 'Jaya Khubani',
      billDate: 'May 11, 2025 9:25 PM',
      status: 'Cancelled',
      paymentMethod: 'Cod',
      amount: '₹749.00',
      statusColor: 'bg-red-100 text-red-800',
      items: 3,
      address: '123 Main Street, Mumbai, Maharashtra 400001',
      phone: '+91 9876543210',
      email: 'jaya.khubani@email.com'
    },
    {
      id: 'ORID0055',
      customer: 'Khushboo',
      billDate: 'May 11, 2025 9:19 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹2,298.00',
      statusColor: 'bg-green-100 text-green-800',
      items: 5,
      address: '456 Park Avenue, Delhi, Delhi 110001',
      phone: '+91 9876543211',
      email: 'khushboo@email.com'
    },
    {
      id: 'ORID0054',
      customer: 'Sitaben',
      billDate: 'May 11, 2025 12:40 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      items: 2,
      address: '789 Garden Road, Pune, Maharashtra 411001',
      phone: '+91 9876543212',
      email: 'sitaben@email.com'
    },
    {
      id: 'ORID0053',
      customer: 'Setu',
      billDate: 'May 10, 2025 2:09 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      items: 2,
      address: '321 Lake View, Bangalore, Karnataka 560001',
      phone: '+91 9876543213',
      email: 'setu@email.com'
    },
    {
      id: 'ORID0052',
      customer: 'Mukesh Kumar',
      billDate: 'May 10, 2025 1:54 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      items: 2,
      address: '654 Hill Station, Chennai, Tamil Nadu 600001',
      phone: '+91 9876543214',
      email: 'mukesh.kumar@email.com'
    },
    {
      id: 'ORID0051',
      customer: 'Shital',
      billDate: 'May 10, 2025 1:51 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹999.00',
      statusColor: 'bg-green-100 text-green-800',
      items: 3,
      address: '987 Valley Road, Hyderabad, Telangana 500001',
      phone: '+91 9876543215',
      email: 'shital@email.com'
    },
    {
      id: 'ORID0050',
      customer: 'Kamlesh',
      billDate: 'May 10, 2025 1:44 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      items: 2,
      address: '147 River Side, Kolkata, West Bengal 700001',
      phone: '+91 9876543216',
      email: 'kamlesh@email.com'
    },
    {
      id: 'ORID0049',
      customer: 'Khushboo',
      billDate: 'May 9, 2025 12:18 PM',
      status: 'Cancelled',
      paymentMethod: 'Cod',
      amount: '₹1.00',
      statusColor: 'bg-red-100 text-red-800',
      items: 1,
      address: '456 Park Avenue, Delhi, Delhi 110001',
      phone: '+91 9876543211',
      email: 'khushboo@email.com'
    },
    {
      id: 'ORID0048',
      customer: 'Khushboo',
      billDate: 'April 27, 2025 5:43 PM',
      status: 'Cancelled',
      paymentMethod: 'Razorpay',
      amount: '₹999.00',
      statusColor: 'bg-red-100 text-red-800',
      items: 3,
      address: '456 Park Avenue, Delhi, Delhi 110001',
      phone: '+91 9876543211',
      email: 'khushboo@email.com'
    },
  ];

  const kanbanColumns = [
    { 
      id: 'pending', 
      title: 'Pending', 
      status: 'Pending',
      color: 'bg-orange-50 border-orange-200',
      headerColor: 'bg-orange-500'
    },
    { 
      id: 'confirmed', 
      title: 'Confirmed', 
      status: 'Confirmed',
      color: 'bg-blue-50 border-blue-200',
      headerColor: 'bg-blue-500'
    },
    { 
      id: 'delivered', 
      title: 'Delivered', 
      status: 'Delivered',
      color: 'bg-green-50 border-green-200',
      headerColor: 'bg-green-500'
    },
    { 
      id: 'cancelled', 
      title: 'Cancelled', 
      status: 'Cancelled',
      color: 'bg-red-50 border-red-200',
      headerColor: 'bg-red-500'
    },
  ];

  const filteredOrders = activeFilter === 'all' 
    ? allOrders 
    : allOrders.filter(order => order.status.toLowerCase() === activeFilter.toLowerCase());

  const groupedOrders = kanbanColumns.reduce((acc, column) => {
    acc[column.status] = filteredOrders.filter(order => order.status === column.status);
    return acc;
  }, {} as Record<string, typeof allOrders>);

  const filters = [
    { id: 'all', label: 'All', count: 56, color: 'bg-blue-600' },
    { id: 'pending', label: 'Pending', count: 10, color: 'bg-orange-500' },
    { id: 'confirmed', label: 'Confirmed', count: 7, color: 'bg-green-600' },
    { id: 'in-packing', label: 'In Packing', count: 0, color: 'bg-purple-500' },
    { id: 'dispatched', label: 'Dispatched', count: 0, color: 'bg-blue-500' },
    { id: 'delivered', label: 'Delivered', count: 7, color: 'bg-green-500' },
    { id: 'cancelled', label: 'Cancelled', count: 0, color: 'bg-red-500' },
    { id: 'checkout', label: 'Checkout', count: 30, color: 'bg-gray-500' },
    { id: 'cancel-request', label: 'Cancel Request', count: 0, color: 'bg-yellow-500' },
  ];

  const activeFilterData = filters.find(filter => filter.id === activeFilter) || filters[0];

  return (
    <div className="space-y-6">
      {/* Enhanced Controls Container */}
      <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Source/Platform Dropdown - Outside Integrations */}
              <div className="flex flex-col group">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">External Sources</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-3 bg-white hover:bg-blue-50 border-blue-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md group-hover:scale-105">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                      <span className="font-medium text-blue-700">Jingls (0)</span>
                      <ChevronDown className="w-4 h-4 text-blue-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white border border-blue-200 shadow-xl rounded-lg">
                    <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-blue-700">Jingls (0)</span>
                        <span className="text-xs text-gray-500">Third-party platform</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer opacity-50 hover:bg-gray-50">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-600">ONDC</span>
                        <span className="text-xs text-gray-400">Coming Soon</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Status Filter Dropdown - Order Status */}
              <div className="flex flex-col group">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Order Status</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      className={`flex items-center space-x-3 ${activeFilterData.color} text-white hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg border-0 group-hover:scale-105`}
                    >
                      <div className="w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
                      <span className="font-medium">{activeFilterData.label} ({activeFilterData.count})</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white border border-green-200 shadow-xl rounded-lg">
                    {filters.map((filter) => (
                      <DropdownMenuItem 
                        key={filter.id}
                        className="cursor-pointer hover:bg-green-50 transition-colors"
                        onClick={() => {}} // This will be handled by the parent component
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 ${filter.color} rounded-full`}></div>
                            <span className="text-sm font-medium">{filter.label}</span>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">({filter.count})</span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Filters Dropdown - Advanced Options */}
              <div className="flex flex-col group">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">Advanced Filters</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-3 bg-white hover:bg-purple-50 border-purple-200 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md group-hover:scale-105">
                      <Filter className="w-4 h-4 text-purple-600" />
                      <span className="font-medium text-purple-700">More Filters</span>
                      <ChevronDown className="w-4 h-4 text-purple-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white border border-purple-200 shadow-xl rounded-lg">
                    <DropdownMenuItem className="cursor-pointer hover:bg-purple-50 transition-colors">
                      <Calendar className="w-4 h-4 mr-3 text-purple-600" />
                      <span className="text-sm font-medium">Date Range</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-purple-50 transition-colors">
                      <Package className="w-4 h-4 mr-3 text-purple-600" />
                      <span className="text-sm font-medium">Order Status</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-purple-50 transition-colors">
                      <CreditCard className="w-4 h-4 mr-3 text-purple-600" />
                      <span className="text-sm font-medium">Payment Method</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-purple-50 transition-colors">
                      <User className="w-4 h-4 mr-3 text-purple-600" />
                      <span className="text-sm font-medium">Customer</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-purple-50 transition-colors">
                      <ArrowUpDown className="w-4 h-4 mr-3 text-purple-600" />
                      <span className="text-sm font-medium">Amount Range</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Enhanced Right-aligned View Options */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-2 shadow-inner">
              <Button
                variant={viewMode === 'kanban' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('kanban')}
                className={`h-10 w-10 p-0 transition-all duration-200 ${
                  viewMode === 'kanban' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-110' 
                    : 'hover:bg-white hover:shadow-md'
                }`}
              >
                <Kanban className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'timeline' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('timeline')}
                className={`h-10 w-10 p-0 transition-all duration-200 ${
                  viewMode === 'timeline' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-110' 
                    : 'hover:bg-white hover:shadow-md'
                }`}
              >
                <Clock className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'cards' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('cards')}
                className={`h-10 w-10 p-0 transition-all duration-200 ${
                  viewMode === 'cards' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110' 
                    : 'hover:bg-white hover:shadow-md'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={`h-10 w-10 p-0 transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-110' 
                    : 'hover:bg-white hover:shadow-md'
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Render based on view mode */}
      {viewMode === 'timeline' ? (
        <OrdersTimeline activeFilter={activeFilter} />
      ) : viewMode === 'cards' ? (
        // ... keep existing code (cards view) the same ...
        <>
          {/* Cards View - Similar to Stores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="group hover:shadow-lg transition-all duration-300 border hover:border-blue-200">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg text-blue-700">{order.id}</h3>
                      <Badge variant="secondary" className={order.statusColor}>
                        {order.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      <span className="font-medium text-sm">{order.customer}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-xs">{order.billDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CreditCard className="w-4 h-4 mr-2" />
                      <span className="text-sm">{order.paymentMethod}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Package className="w-4 h-4 mr-2" />
                      <span className="text-sm">{order.items} items</span>
                    </div>

                    {/* Amount */}
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="text-xl font-bold text-gray-900">{order.amount}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Edit3 className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results message for cards view */}
          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <Grid3X3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 text-lg">No orders found for the selected filter.</p>
            </div>
          )}
        </>
      ) : viewMode === 'list' ? (
        // ... keep existing code (list view) the same ...
        <>
          {/* List View with Expandable Details */}
          <div className="space-y-2">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="border hover:shadow-md transition-all duration-200">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleOrderExpansion(order.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            {expandedOrders.has(order.id) ? (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                            <span className="font-semibold text-blue-600">{order.id}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="font-medium">{order.customer}</span>
                          </div>
                          <Badge variant="secondary" className={order.statusColor}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">{order.billDate}</span>
                          <span className="font-bold text-lg">{order.amount}</span>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 pb-4 border-t bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                        {/* Order Details */}
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Order Details</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center space-x-2">
                              <Package className="w-3 h-3 text-gray-400" />
                              <span>{order.items} items</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CreditCard className="w-3 h-3 text-gray-400" />
                              <span>{order.paymentMethod}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-3 h-3 text-gray-400" />
                              <span>{order.billDate}</span>
                            </div>
                          </div>
                        </div>

                        {/* Customer Info */}
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Customer Info</h4>
                          <div className="space-y-1 text-sm">
                            <div>{order.email}</div>
                            <div>{order.phone}</div>
                            <div className="text-gray-600">{order.address}</div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Actions</h4>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-3 h-3 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit3 className="w-3 h-3 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-3 h-3 mr-1" />
                              Message
                            </Button>
                            <Button variant="outline" size="sm">
                              <Truck className="w-3 h-3 mr-1" />
                              Track
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-3 h-3 mr-1" />
                              Export
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* No results message for list view */}
          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <List className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500 text-lg">No orders found for the selected filter.</p>
            </div>
          )}
        </>
      ) : (
        // ... keep existing code (kanban view) the same ...
        <>
          {/* Kanban Board */}
          <div className="flex gap-6 overflow-x-auto pb-4">
            {kanbanColumns.map((column) => {
              const orders = groupedOrders[column.status] || [];
              
              return (
                <div key={column.id} className="flex-shrink-0 w-80">
                  {/* Column Header */}
                  <div className={`${column.headerColor} text-white p-4 rounded-t-lg flex items-center justify-between`}>
                    <div className="flex items-center space-x-2">
                      <Kanban className="w-5 h-5" />
                      <h3 className="font-semibold">{column.title}</h3>
                    </div>
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm font-medium">
                      {orders.length}
                    </span>
                  </div>

                  {/* Column Content */}
                  <div className={`${column.color} border-l border-r border-b rounded-b-lg min-h-96`}>
                    <ScrollArea className="h-96 p-4">
                      <div className="space-y-3">
                        {orders.map((order) => (
                          <Card key={order.id} className="bg-white border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                            <CardContent className="p-4">
                              {/* Order ID and Status */}
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-blue-600">{order.id}</h4>
                                <Badge variant="secondary" className={order.statusColor}>
                                  {order.status}
                                </Badge>
                              </div>

                              {/* Customer */}
                              <div className="flex items-center mb-2">
                                <User className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="font-medium text-gray-900 text-sm">{order.customer}</span>
                              </div>

                              {/* Date */}
                              <div className="flex items-center mb-2">
                                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-gray-600 text-xs">{order.billDate}</span>
                              </div>

                              {/* Payment Method */}
                              <div className="flex items-center mb-3">
                                <CreditCard className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-gray-600 text-sm">{order.paymentMethod}</span>
                              </div>

                              {/* Amount and Actions */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <span className="text-lg font-bold text-gray-900">{order.amount}</span>
                                <div className="flex items-center space-x-1">
                                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                    <Package className="w-3 h-3 text-gray-400" />
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                    <Download className="w-3 h-3 text-gray-400" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        {/* Empty state for columns */}
                        {orders.length === 0 && (
                          <div className="text-center py-8 text-gray-500">
                            <Kanban className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No {column.title.toLowerCase()} orders</p>
                          </div>
                        )}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No results message for filters */}
          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No orders found for the selected filter.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrdersTable;
