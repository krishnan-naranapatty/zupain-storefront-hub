import React from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface OrderDetailsProps {
  orderId: string;
  onBack: () => void;
}

const OrderDetails = ({ orderId, onBack }: OrderDetailsProps) => {
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
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600">
        <span>Home</span>
        <span className="mx-2">{">"}</span>
        <span>Orders</span>
        <span className="mx-2">{">"}</span>
        <span className="text-gray-900">Order Details</span>
      </div>

      {/* Header */}
      <div className="flex items-center">
        <Button variant="ghost" onClick={onBack} className="mr-4 p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel - Order Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              {/* Order Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Order ID</label>
                  <p className="text-gray-900 font-medium">{orderData.id}</p>
                </div>
                <div></div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Order Date</label>
                  <p className="text-gray-900">{orderData.date}</p>
                </div>
                <div></div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Delivery Date</label>
                  <p className="text-gray-900">{orderData.deliveryDate}</p>
                </div>
                <div></div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Delivery Time Slot</label>
                  <p className="text-gray-900">{orderData.deliveryTimeSlot}</p>
                </div>
                <div></div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <div className="mt-1">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {orderData.status}
                    </Badge>
                  </div>
                </div>
                <div></div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Order Type</label>
                  <p className="text-gray-900">{orderData.orderType}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Details */}
          <Card>
            <Collapsible defaultOpen={true}>
              <CollapsibleTrigger className="w-full">
                <div className="bg-slate-600 text-white p-4 flex items-center justify-between rounded-t-lg">
                  <h3 className="font-medium">Customer Details</h3>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="p-6 space-y-4 border border-t-0 rounded-b-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Customer Name</label>
                      <p className="text-gray-900">{orderData.customer.name}</p>
                    </div>
                    <div></div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Customer Number</label>
                      <p className="text-gray-900">{orderData.customer.phone}</p>
                    </div>
                    <div></div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Delivery Address</label>
                      <p className="text-gray-900 whitespace-pre-line">{orderData.customer.address}</p>
                    </div>
                    <div></div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-900">{orderData.customer.email}</p>
                    </div>
                    <div></div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Total Orders</label>
                      <p className="text-gray-900">{orderData.customer.totalOrders}</p>
                    </div>
                    <div></div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Total Sales</label>
                      <p className="text-gray-900">{orderData.customer.totalSales}</p>
                    </div>
                    <div></div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-600">Created Date</label>
                      <p className="text-gray-900">{orderData.customer.createdDate}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      View Order History
                    </Button>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>

        {/* Right Panel - Order Summary */}
        <div className="space-y-6">
          <Card>
            <div className="bg-slate-600 text-white p-4 rounded-t-lg">
              <h3 className="font-medium">Orders</h3>
            </div>
            <CardContent className="p-0 border border-t-0 rounded-b-lg">
              {/* Order Header */}
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ChevronDown className="w-4 h-4 mr-2" />
                    <span className="font-medium">{orderData.id}</span>
                  </div>
                  <span className="font-medium">₹{orderData.pricing.total.toFixed(2)}</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {orderData.date}
                  <span className="ml-4 text-green-600">Online</span>
                </div>
              </div>

              {/* Product */}
              <div className="p-4 border-b">
                <div className="flex space-x-3">
                  <img 
                    src={orderData.items[0].image} 
                    alt={orderData.items[0].name}
                    className="w-12 h-12 rounded object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 leading-tight">
                      {orderData.items[0].name}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-600">50ml X {orderData.items[0].quantity}</span>
                      <span className="text-sm font-medium">₹{orderData.items[0].price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Item Total</span>
                  <span>₹{orderData.pricing.itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">GST</span>
                  <span>₹{orderData.pricing.gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Charges</span>
                  <span>₹{orderData.pricing.deliveryCharges.toFixed(2)}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{orderData.pricing.total.toFixed(2)}</span>
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