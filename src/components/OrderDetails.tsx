import React from 'react';
import { ArrowLeft, ChevronDown, Package2, Calendar, Clock, MapPin, Phone, Mail, User, CreditCard, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface OrderDetailsProps {
  orderId: string;
  onBack: () => void;
  onViewCustomer?: (customerId: string) => void;
}

const OrderDetails = ({ orderId, onBack, onViewCustomer }: OrderDetailsProps) => {
  // Mock data - in real app this would come from API
  const orderData = {
    id: 'ORID0059',
    date: 'July 14, 2025 10:16 AM',
    deliveryDate: 'July 14th, 2025',
    deliveryTimeSlot: '1:00 AM - 1:30 AM',
    status: 'Pending',
    orderType: 'Online',
    customer: {
      name: 'nav',
      phone: '91 8939347493',
      email: 'navinkumar.manoharan@kaaylabs.com',
      address: 'Bay View Dr St, Valmiki Nagar,\nChennai, Tamil Nadu, India 600042',
      totalOrders: 3,
      totalSales: 2847,
      createdDate: '10-04-2025, 12:33 PM'
    },
    items: [
      {
        id: 1,
        name: 'Blameless Pore Refining & Acne Control Serum | Salicylic Acid, Neem, Green Tea & Hibiscus | Lightweight Gel for Acne-Prone Skin | 50ml X 1',
        image: '/lovable-uploads/4ff3d28b-2200-4f99-9ed2-66de37a21137.png',
        price: 949.00,
        quantity: 1
      }
    ],
    pricing: {
      itemTotal: 949.00,
      gst: 0.00,
      deliveryCharges: 0.00,
      total: 949.00
    }
  };

  return (
    <div className="space-y-8">
      {/* Modern Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-muted-foreground">Home</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">Orders</span>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium text-foreground">Order Details</span>
      </div>

      {/* Modern Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" onClick={onBack} className="h-10 w-10 p-0">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Order Details</h1>
            <p className="text-muted-foreground">Manage and track order information</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700 font-medium px-4 py-2">
          {orderData.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Information Card */}
          <Card className="border-0 shadow-sm bg-gradient-to-br from-white to-slate-50/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-xl">
                <Package2 className="w-5 h-5 text-primary" />
                <span>Order Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">Order ID</label>
                  <p className="text-lg font-semibold text-foreground">{orderData.id}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Order Date
                  </label>
                  <p className="text-foreground">{orderData.date}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Delivery Date
                  </label>
                  <p className="text-foreground">{orderData.deliveryDate}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Delivery Time Slot
                  </label>
                  <p className="text-foreground">{orderData.deliveryTimeSlot}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground flex items-center">
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    Order Type
                  </label>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    {orderData.orderType}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Details Card */}
          <Card className="border-0 shadow-sm bg-gradient-to-br from-white to-slate-50/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-xl">
                <User className="w-5 h-5 text-primary" />
                <span>Customer Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">Customer Name</label>
                  <p className="text-lg font-semibold text-foreground">{orderData.customer.name}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    Phone Number
                  </label>
                  <p className="text-foreground">{orderData.customer.phone}</p>
                </div>
                
                <div className="md:col-span-2 space-y-1">
                  <label className="text-sm font-medium text-muted-foreground flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Delivery Address
                  </label>
                  <p className="text-foreground whitespace-pre-line bg-slate-50 p-3 rounded-lg border">
                    {orderData.customer.address}
                  </p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </label>
                  <p className="text-foreground">{orderData.customer.email}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">Total Orders</label>
                  <p className="text-2xl font-bold text-primary">{orderData.customer.totalOrders}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">Total Sales</label>
                  <p className="text-2xl font-bold text-green-600">₹{orderData.customer.totalSales}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">Created Date</label>
                  <p className="text-foreground">{orderData.customer.createdDate}</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-start">
                <Button 
                  variant="outline" 
                  className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10"
                  onClick={() => onViewCustomer?.(orderData.customer.name)}
                >
                  View Order History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Order Summary */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-primary/5">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
              <CardTitle className="text-lg font-semibold">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Order Header */}
              <div className="p-6 border-b bg-slate-50/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-lg">{orderData.id}</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">₹{orderData.pricing.total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{orderData.date}</span>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    {orderData.orderType}
                  </Badge>
                </div>
              </div>

              {/* Product */}
              <div className="p-6 border-b">
                <div className="flex space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border bg-white flex-shrink-0">
                    <img 
                      src={orderData.items[0].image} 
                      alt={orderData.items[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      {orderData.items[0].name}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-muted-foreground bg-slate-100 px-2 py-1 rounded">
                        50ml × {orderData.items[0].quantity}
                      </span>
                      <span className="text-lg font-bold text-primary">₹{orderData.items[0].price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Item Total</span>
                  <span className="font-medium">₹{orderData.pricing.itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">GST</span>
                  <span className="font-medium">₹{orderData.pricing.gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Delivery Charges</span>
                  <span className="font-medium">₹{orderData.pricing.deliveryCharges.toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-primary text-2xl">₹{orderData.pricing.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;