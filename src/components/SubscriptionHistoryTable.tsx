
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Download } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface SubscriptionRecord {
  id: string;
  refId: string;
  plan: string;
  paymentMode: string;
  dateTime: string;
  amount: string;
  status: 'Active' | 'Expired';
}

const SubscriptionHistoryTable = () => {
  const { currentPalette } = useTheme();
  
  const subscriptions: SubscriptionRecord[] = [
    {
      id: '1',
      refId: 'd7b083e0-d874-4e2d-870f-773fd2dc73a',
      plan: '',
      paymentMode: 'manual',
      dateTime: '05-06-2025 04:20 pm',
      amount: '₹15,000.00',
      status: 'Active'
    },
    {
      id: '2',
      refId: '2d858f6-9acf-46cb-827d-d92466ee065d',
      plan: '',
      paymentMode: 'manual',
      dateTime: '03-03-2025 11:16 am',
      amount: '₹0.00',
      status: 'Expired'
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'Active') {
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Active
        </Badge>
      );
    }
    return (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
        Expired
      </Badge>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Subscription History</h3>
        <Button variant="outline" size="sm" className="space-x-2">
          <Download className="w-4 h-4" />
          <span>Download</span>
        </Button>
      </div>

      <div className={`${currentPalette.cardBg} rounded-lg shadow-sm border`}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Ref ID</TableHead>
              <TableHead className="min-w-[100px]">Plan</TableHead>
              <TableHead className="min-w-[120px]">Payment mode</TableHead>
              <TableHead className="min-w-[150px]">Date & Time</TableHead>
              <TableHead className="min-w-[120px]">Amount</TableHead>
              <TableHead className="min-w-[100px]">Status</TableHead>
              <TableHead className="w-20 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((subscription) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-mono text-sm min-w-[200px]">
                  {subscription.refId}
                </TableCell>
                <TableCell className="min-w-[100px]">
                  {subscription.plan || '-'}
                </TableCell>
                <TableCell className="min-w-[120px]">
                  {subscription.paymentMode}
                </TableCell>
                <TableCell className="min-w-[150px]">
                  {subscription.dateTime}
                </TableCell>
                <TableCell className="font-medium min-w-[120px]">
                  {subscription.amount}
                </TableCell>
                <TableCell className="min-w-[100px]">
                  {getStatusBadge(subscription.status)}
                </TableCell>
                <TableCell className="w-20 text-center">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex items-center justify-center p-4">
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
    </div>
  );
};

export default SubscriptionHistoryTable;
