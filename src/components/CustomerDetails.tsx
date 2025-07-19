import React from 'react';
import { ArrowLeft, User, Phone, Mail, Calendar, MapPin, ShoppingBag, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface CustomerDetailsProps {
  customerId: string;
  onBack: () => void;
}

const CustomerDetails = ({ customerId, onBack }: CustomerDetailsProps) => {
  // Mock data - in real app this would come from API
  const customerData = {
    name: 'nav',
    phone: '91 8939347493',
    email: 'navinkumar.manoharan@kaaylabs.com',
    totalOrders: 3,
    totalSales: 2847,
    createdDate: 'April 10, 2025 12:33 PM',
    address: {
      home: 'Bay View Dr St, Valmiki Nagar, Chennai, Tamil Nadu, India - 600042'
    },
    orders: [
      {
        id: 'ORID0059',
        date: 'July 14, 2025 10:16 AM',
        amount: 949.00,
        status: 'Online'
      },
      {
        id: 'ORID0058',
        date: 'July 9, 2025 12:18 PM',
        amount: 949.00,
        status: 'Online'
      },
      {
        id: 'ORID0057',
        date: 'July 9, 2025 12:17 PM',
        amount: 949.00,
        status: 'Online'
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Modern Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-muted-foreground">Home</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">Customers</span>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium text-foreground">Customer Details</span>
      </div>

      {/* Modern Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" onClick={onBack} className="h-10 w-10 p-0">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Customer Details</h1>
            <p className="text-muted-foreground">View and manage customer information</p>
          </div>
        </div>
      </div>

      {/* Compact Layout - Single Row for Desktop */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Customer Info - Takes up 4 columns on xl screens */}
        <div className="xl:col-span-4">
          <Card className="h-fit border-0 shadow-sm bg-gradient-to-br from-white to-slate-50/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <User className="w-5 h-5 text-primary" />
                <span>Customer Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Customer Name</label>
                <p className="text-xl font-bold text-foreground">{customerData.name}</p>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Phone Number
                </label>
                <p className="text-foreground">{customerData.phone}</p>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  Email Address
                </label>
                <p className="text-foreground text-sm">{customerData.email}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">Total Orders</label>
                  <p className="text-2xl font-bold text-primary">{customerData.totalOrders}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">Total Sales</label>
                  <p className="text-2xl font-bold text-green-600">₹{customerData.totalSales}</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Created Date
                </label>
                <p className="text-foreground">{customerData.createdDate}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Address - Takes up 4 columns on xl screens */}
        <div className="xl:col-span-4">
          <Card className="h-fit border-0 shadow-sm bg-gradient-to-br from-white to-slate-50/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Home</label>
                <p className="text-foreground leading-relaxed bg-slate-50 p-4 rounded-lg border">
                  {customerData.address.home}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders - Takes up 4 columns on xl screens */}
        <div className="xl:col-span-4">
          <Card className="h-fit border-0 shadow-sm bg-gradient-to-br from-white to-primary/5">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg pb-4">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <ShoppingBag className="w-5 h-5" />
                <span>Orders</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-80 overflow-y-auto">
                {customerData.orders.map((order, index) => (
                  <div key={order.id} className={`p-4 ${index !== customerData.orders.length - 1 ? 'border-b' : ''} hover:bg-slate-50/50 transition-colors cursor-pointer`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-semibold text-primary">{order.id}</p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">₹{order.amount.toFixed(2)}</p>
                        <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 text-xs">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;