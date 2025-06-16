
import React from 'react';
import { Calendar, User, CreditCard, Package, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface OrdersTimelineProps {
  activeFilter: string;
}

const OrdersTimeline = ({ activeFilter }: OrdersTimelineProps) => {
  const allOrders = [
    {
      id: 'ORID0056',
      customer: 'Jaya Khubani',
      billDate: 'May 11, 2025 9:25 PM',
      status: 'Cancelled',
      paymentMethod: 'Cod',
      amount: '₹749.00',
      statusColor: 'bg-red-100 text-red-800',
      timelineColor: 'bg-red-500',
    },
    {
      id: 'ORID0055',
      customer: 'Khushboo',
      billDate: 'May 11, 2025 9:19 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹2,298.00',
      statusColor: 'bg-green-100 text-green-800',
      timelineColor: 'bg-green-500',
    },
    {
      id: 'ORID0054',
      customer: 'Sitaben',
      billDate: 'May 11, 2025 12:40 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      timelineColor: 'bg-green-500',
    },
    {
      id: 'ORID0053',
      customer: 'Setu',
      billDate: 'May 10, 2025 2:09 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      timelineColor: 'bg-green-500',
    },
    {
      id: 'ORID0052',
      customer: 'Mukesh Kumar',
      billDate: 'May 10, 2025 1:54 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      timelineColor: 'bg-green-500',
    },
    {
      id: 'ORID0051',
      customer: 'Shital',
      billDate: 'May 10, 2025 1:51 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹999.00',
      statusColor: 'bg-green-100 text-green-800',
      timelineColor: 'bg-green-500',
    },
    {
      id: 'ORID0050',
      customer: 'Kamlesh',
      billDate: 'May 10, 2025 1:44 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
      timelineColor: 'bg-green-500',
    },
    {
      id: 'ORID0049',
      customer: 'Khushboo',
      billDate: 'May 9, 2025 12:18 PM',
      status: 'Cancelled',
      paymentMethod: 'Cod',
      amount: '₹1.00',
      statusColor: 'bg-red-100 text-red-800',
      timelineColor: 'bg-red-500',
    },
    {
      id: 'ORID0048',
      customer: 'Khushboo',
      billDate: 'April 27, 2025 5:43 PM',
      status: 'Cancelled',
      paymentMethod: 'Razorpay',
      amount: '₹999.00',
      statusColor: 'bg-red-100 text-red-800',
      timelineColor: 'bg-red-500',
    },
  ];

  // Filter orders based on active filter
  const filteredOrders = activeFilter === 'all' 
    ? allOrders 
    : allOrders.filter(order => order.status.toLowerCase() === activeFilter.toLowerCase());

  // Group orders by date for timeline
  const groupedByDate = filteredOrders.reduce((acc, order) => {
    const date = order.billDate.split(' ').slice(0, 3).join(' '); // Extract date part
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(order);
    return acc;
  }, {} as Record<string, typeof allOrders>);

  const dateKeys = Object.keys(groupedByDate).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="space-y-8">
      {dateKeys.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500 text-lg">No orders found for the selected filter.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {dateKeys.map((date, dateIndex) => (
            <div key={date} className="relative">
              {/* Date Header */}
              <div className="flex items-center mb-6">
                <div className="relative z-10 bg-blue-500 rounded-full p-3 mr-6">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <h3 className="font-semibold text-blue-900">{date}</h3>
                  <p className="text-sm text-blue-600">{groupedByDate[date].length} orders</p>
                </div>
              </div>

              {/* Orders for this date */}
              <div className="ml-20 space-y-4 mb-8">
                {groupedByDate[date].map((order, orderIndex) => (
                  <div key={order.id} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-16 top-4 w-4 h-4 ${order.timelineColor} rounded-full border-4 border-white shadow-md`}></div>
                    
                    {/* Order Card */}
                    <Card className="hover:shadow-md transition-all duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h4 className="font-semibold text-blue-600 text-lg">{order.id}</h4>
                              <p className="text-sm text-gray-500">{order.billDate.split(' ').slice(3).join(' ')}</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className={order.statusColor}>
                            {order.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          {/* Customer */}
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-gray-900">{order.customer}</span>
                          </div>

                          {/* Payment Method */}
                          <div className="flex items-center space-x-2">
                            <CreditCard className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">{order.paymentMethod}</span>
                          </div>

                          {/* Amount */}
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-900">{order.amount}</span>
                            <div className="flex items-center space-x-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Package className="w-4 h-4 text-gray-400" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Download className="w-4 h-4 text-gray-400" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersTimeline;
