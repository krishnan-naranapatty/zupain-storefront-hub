
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Eye, MoreHorizontal, Download, RefreshCw, Truck, MapPin, Phone, Mail, Package, Calendar, CreditCard, ArrowUpDown, Copy, ExternalLink } from 'lucide-react';

interface ShiprocketOrdersTableProps {
  activeFilters: {
    status: string;
    dateRange: string;
    courier: string;
  };
}

const ShiprocketOrdersTable = ({ activeFilters }: ShiprocketOrdersTableProps) => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  const handleSort = (key: string) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getStatusColor = (status: string) => {
    const statusColors = {
      'new': 'bg-blue-100 text-blue-800',
      'ready-to-ship': 'bg-purple-100 text-purple-800',
      'shipped': 'bg-orange-100 text-orange-800',
      'in-transit': 'bg-yellow-100 text-yellow-800',
      'out-for-delivery': 'bg-cyan-100 text-cyan-800',
      'delivered': 'bg-green-100 text-green-800',
      'exception': 'bg-red-100 text-red-800',
      'undelivered': 'bg-gray-100 text-gray-800',
      'rto': 'bg-pink-100 text-pink-800',
      'lost': 'bg-red-200 text-red-900'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  const shiprocketOrders = [
    {
      id: 'SR001234567',
      orderId: 'ORD-2024-001',
      awb: 'AWB123456789',
      customerName: 'Rajesh Kumar',
      customerPhone: '+91 9876543210',
      customerEmail: 'rajesh.kumar@email.com',
      pickupAddress: 'Mumbai, Maharashtra',
      deliveryAddress: 'Delhi, NCR',
      courier: 'FedEx',
      status: 'in-transit',
      orderDate: '2024-01-15',
      shipDate: '2024-01-16',
      estimatedDelivery: '2024-01-18',
      actualDelivery: '',
      weight: '0.5 kg',
      dimensions: '20x15x10 cm',
      codAmount: '₹1,250.00',
      shippingCharges: '₹85.00',
      trackingUrl: 'https://track.fedex.com/123456789'
    },
    {
      id: 'SR001234568',
      orderId: 'ORD-2024-002',
      awb: 'AWB123456790',
      customerName: 'Priya Sharma',
      customerPhone: '+91 9876543211',
      customerEmail: 'priya.sharma@email.com',
      pickupAddress: 'Bangalore, Karnataka',
      deliveryAddress: 'Chennai, Tamil Nadu',
      courier: 'BlueDart',
      status: 'delivered',
      orderDate: '2024-01-14',
      shipDate: '2024-01-15',
      estimatedDelivery: '2024-01-17',
      actualDelivery: '2024-01-17',
      weight: '1.2 kg',
      dimensions: '25x20x15 cm',
      codAmount: '₹2,499.00',
      shippingCharges: '₹120.00',
      trackingUrl: 'https://track.bluedart.com/123456790'
    },
    {
      id: 'SR001234569',
      orderId: 'ORD-2024-003',
      awb: 'AWB123456791',
      customerName: 'Amit Patel',
      customerPhone: '+91 9876543212',
      customerEmail: 'amit.patel@email.com',
      pickupAddress: 'Pune, Maharashtra',
      deliveryAddress: 'Ahmedabad, Gujarat',
      courier: 'Delhivery',
      status: 'exception',
      orderDate: '2024-01-13',
      shipDate: '2024-01-14',
      estimatedDelivery: '2024-01-16',
      actualDelivery: '',
      weight: '0.8 kg',
      dimensions: '30x25x12 cm',
      codAmount: '₹3,750.00',
      shippingCharges: '₹95.00',
      trackingUrl: 'https://track.delhivery.com/123456791'
    },
    {
      id: 'SR001234570',
      orderId: 'ORD-2024-004',
      awb: 'AWB123456792',
      customerName: 'Sneha Reddy',
      customerPhone: '+91 9876543213',
      customerEmail: 'sneha.reddy@email.com',
      pickupAddress: 'Hyderabad, Telangana',
      deliveryAddress: 'Vijayawada, Andhra Pradesh',
      courier: 'DTDC',
      status: 'ready-to-ship',
      orderDate: '2024-01-15',
      shipDate: '',
      estimatedDelivery: '2024-01-19',
      actualDelivery: '',
      weight: '2.1 kg',
      dimensions: '35x30x20 cm',
      codAmount: '₹4,999.00',
      shippingCharges: '₹150.00',
      trackingUrl: ''
    },
    {
      id: 'SR001234571',
      orderId: 'ORD-2024-005',
      awb: 'AWB123456793',
      customerName: 'Vikram Singh',
      customerPhone: '+91 9876543214',
      customerEmail: 'vikram.singh@email.com',
      pickupAddress: 'Jaipur, Rajasthan',
      deliveryAddress: 'Indore, Madhya Pradesh',
      courier: 'XpressBees',
      status: 'out-for-delivery',
      orderDate: '2024-01-14',
      shipDate: '2024-01-15',
      estimatedDelivery: '2024-01-17',
      actualDelivery: '',
      weight: '0.3 kg',
      dimensions: '15x12x8 cm',
      codAmount: '₹899.00',
      shippingCharges: '₹65.00',
      trackingUrl: 'https://track.xpressbees.com/123456793'
    }
  ];

  const filteredOrders = shiprocketOrders.filter(order => {
    if (activeFilters.status !== 'all' && order.status !== activeFilters.status) return false;
    if (activeFilters.courier !== 'all' && order.courier.toLowerCase() !== activeFilters.courier) return false;
    return true;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">
                  <Button variant="ghost" onClick={() => handleSort('id')} className="p-0 h-auto font-semibold">
                    Shipment ID <ArrowUpDown className="w-3 h-3 ml-1" />
                  </Button>
                </TableHead>
                <TableHead className="font-semibold">
                  <Button variant="ghost" onClick={() => handleSort('orderId')} className="p-0 h-auto font-semibold">
                    Order ID <ArrowUpDown className="w-3 h-3 ml-1" />
                  </Button>
                </TableHead>
                <TableHead className="font-semibold">AWB Number</TableHead>
                <TableHead className="font-semibold">Customer Details</TableHead>
                <TableHead className="font-semibold">
                  <Button variant="ghost" onClick={() => handleSort('status')} className="p-0 h-auto font-semibold">
                    Status <ArrowUpDown className="w-3 h-3 ml-1" />
                  </Button>
                </TableHead>
                <TableHead className="font-semibold">
                  <Button variant="ghost" onClick={() => handleSort('courier')} className="p-0 h-auto font-semibold">
                    Courier <ArrowUpDown className="w-3 h-3 ml-1" />
                  </Button>
                </TableHead>
                <TableHead className="font-semibold">Route</TableHead>
                <TableHead className="font-semibold">Dates</TableHead>
                <TableHead className="font-semibold">Package Info</TableHead>
                <TableHead className="font-semibold">
                  <Button variant="ghost" onClick={() => handleSort('codAmount')} className="p-0 h-auto font-semibold">
                    COD Amount <ArrowUpDown className="w-3 h-3 ml-1" />
                  </Button>
                </TableHead>
                <TableHead className="font-semibold text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-sm font-semibold text-blue-600">{order.id}</span>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(order.id)} className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{order.orderId}</span>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(order.orderId)} className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    {order.awb ? (
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm">{order.awb}</span>
                        <Button variant="ghost" size="sm" onClick={() => copyToClipboard(order.awb)} className="h-6 w-6 p-0">
                          <Copy className="w-3 h-3" />
                        </Button>
                        {order.trackingUrl && (
                          <Button variant="ghost" size="sm" onClick={() => window.open(order.trackingUrl, '_blank')} className="h-6 w-6 p-0">
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">Not assigned</span>
                    )}
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{order.customerName}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="w-3 h-3" />
                        <span>{order.customerPhone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="w-3 h-3" />
                        <span className="truncate max-w-32">{order.customerEmail}</span>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(order.status)}>
                      {order.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{order.courier}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-green-600" />
                        <span className="text-green-600">From:</span>
                        <span>{order.pickupAddress}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-red-600" />
                        <span className="text-red-600">To:</span>
                        <span>{order.deliveryAddress}</span>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">Order:</span>
                        <span>{order.orderDate}</span>
                      </div>
                      {order.shipDate && (
                        <div className="flex items-center space-x-2">
                          <Truck className="w-3 h-3 text-blue-400" />
                          <span className="text-blue-600">Shipped:</span>
                          <span>{order.shipDate}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-orange-400" />
                        <span className="text-orange-600">ETA:</span>
                        <span>{order.estimatedDelivery}</span>
                      </div>
                      {order.actualDelivery && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3 text-green-400" />
                          <span className="text-green-600">Delivered:</span>
                          <span>{order.actualDelivery}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <Package className="w-3 h-3 text-gray-400" />
                        <span>{order.weight}</span>
                      </div>
                      <div className="text-gray-600">{order.dimensions}</div>
                      <div className="text-gray-600">Charges: {order.shippingCharges}</div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold">{order.codAmount}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="h-8">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="w-3 h-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem>
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Update Status
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download Label
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Truck className="w-4 h-4 mr-2" />
                            Track Shipment
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open in Shiprocket
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500 text-lg">No shipments found for the selected filters.</p>
            <p className="text-gray-400 text-sm">Try adjusting your filter criteria.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShiprocketOrdersTable;
