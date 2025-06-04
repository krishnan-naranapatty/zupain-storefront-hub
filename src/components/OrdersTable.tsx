
import React from 'react';
import { Download, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const OrdersTable = () => {
  const orders = [
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

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center space-x-2">
                  <span>Order ID</span>
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center space-x-2">
                  <span>Customer Name</span>
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center space-x-2">
                  <span>Bill Date</span>
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center space-x-2">
                  <span>Status</span>
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">Payment Method</TableHead>
              <TableHead className="font-semibold text-gray-900">Payment Proof</TableHead>
              <TableHead className="font-semibold text-gray-900">
                <div className="flex items-center space-x-2">
                  <span>Amount</span>
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">Bills</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50">
                <TableCell className="font-medium text-blue-600">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="text-gray-600">{order.billDate}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={order.statusColor}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="font-semibold">{order.amount}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

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
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">6</PaginationLink>
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

export default OrdersTable;
