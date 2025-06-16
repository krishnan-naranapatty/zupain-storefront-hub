
import React from 'react';
import { Download, ArrowUpDown, Calendar, User, CreditCard, Package, Kanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface OrdersTableProps {
  activeFilter: string;
}

const OrdersTable = ({ activeFilter }: OrdersTableProps) => {
  const allOrders = [
    {
      id: 'ORID0056',
      customer: 'Jaya Khubani',
      billDate: 'May 11, 2025 9:25 PM',
      status: 'Cancelled',
      paymentMethod: 'Cod',
      amount: '₹749.00',
      statusColor: 'bg-red-100 text-red-800',
    },
    {
      id: 'ORID0055',
      customer: 'Khushboo',
      billDate: 'May 11, 2025 9:19 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹2,298.00',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'ORID0054',
      customer: 'Sitaben',
      billDate: 'May 11, 2025 12:40 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'ORID0053',
      customer: 'Setu',
      billDate: 'May 10, 2025 2:09 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'ORID0052',
      customer: 'Mukesh Kumar',
      billDate: 'May 10, 2025 1:54 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'ORID0051',
      customer: 'Shital',
      billDate: 'May 10, 2025 1:51 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹999.00',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'ORID0050',
      customer: 'Kamlesh',
      billDate: 'May 10, 2025 1:44 PM',
      status: 'Delivered',
      paymentMethod: 'Cod',
      amount: '₹850.00',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'ORID0049',
      customer: 'Khushboo',
      billDate: 'May 9, 2025 12:18 PM',
      status: 'Cancelled',
      paymentMethod: 'Cod',
      amount: '₹1.00',
      statusColor: 'bg-red-100 text-red-800',
    },
    {
      id: 'ORID0048',
      customer: 'Khushboo',
      billDate: 'April 27, 2025 5:43 PM',
      status: 'Cancelled',
      paymentMethod: 'Razorpay',
      amount: '₹999.00',
      statusColor: 'bg-red-100 text-red-800',
    },
  ];

  // Define Kanban columns based on order statuses
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

  // Filter orders based on active filter
  const filteredOrders = activeFilter === 'all' 
    ? allOrders 
    : allOrders.filter(order => order.status.toLowerCase() === activeFilter.toLowerCase());

  // Group orders by status for Kanban columns
  const groupedOrders = kanbanColumns.reduce((acc, column) => {
    acc[column.status] = filteredOrders.filter(order => order.status === column.status);
    return acc;
  }, {} as Record<string, typeof allOrders>);

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default OrdersTable;
