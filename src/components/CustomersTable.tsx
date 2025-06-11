
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const customersData = [
  {
    id: 1,
    name: "Khushboo",
    initial: "K",
    type: "Return Customer",
    mobile: "+91 9157101975",
    totalOrders: 8,
    totalSales: "₹3,303.00",
    totalCart: 0
  },
  {
    id: 2,
    name: "",
    initial: "",
    type: "New Customer(Signed IN)",
    mobile: "6363618762",
    totalOrders: 0,
    totalSales: "₹0.00",
    totalCart: "1 items"
  },
  {
    id: 3,
    name: "skc",
    initial: "S",
    type: "Return Customer",
    mobile: "91 8849626093",
    totalOrders: 5,
    totalSales: "₹5.00",
    totalCart: 0
  },
  {
    id: 4,
    name: "skc",
    initial: "S",
    type: "Return Customer",
    mobile: "91 8124001125",
    totalOrders: 2,
    totalSales: "₹1,600.00",
    totalCart: 0
  },
  {
    id: 5,
    name: "Riya",
    initial: "R",
    type: "Return Customer",
    mobile: "91 9236084106",
    totalOrders: 2,
    totalSales: "₹2.00",
    totalCart: "1 items"
  },
  {
    id: 6,
    name: "ABHA",
    initial: "A",
    type: "New Customer(Signed IN)",
    mobile: "91 9727776523",
    totalOrders: 1,
    totalSales: "₹1.00",
    totalCart: "1 items"
  },
  {
    id: 7,
    name: "Testing",
    initial: "T",
    type: "New Customer(Signed IN)",
    mobile: "+91 9080235290",
    totalOrders: 1,
    totalSales: "₹1,000.00",
    totalCart: 0
  },
  {
    id: 8,
    name: "Test",
    initial: "T",
    type: "New Customer(Signed IN)",
    mobile: "91 1122334455",
    totalOrders: 1,
    totalSales: "₹1.00",
    totalCart: 0
  },
  {
    id: 9,
    name: "nav",
    initial: "N",
    type: "New Customer(Signed IN)",
    mobile: "91 8934347493",
    totalOrders: 0,
    totalSales: "₹0.00",
    totalCart: 0
  },
  {
    id: 10,
    name: "swe",
    initial: "S",
    type: "New Customer(Signed IN)",
    mobile: "+91 6369131926",
    totalOrders: 0,
    totalSales: "₹0.00",
    totalCart: 0
  }
];

const CustomersTable = () => {
  const getCustomerTypeColor = (type: string) => {
    if (type === "Return Customer") {
      return "bg-green-100 text-green-800";
    }
    return "bg-blue-100 text-blue-800";
  };

  return (
    <Card className="border-0 shadow-sm">
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="font-semibold text-gray-900">Customer Name</TableHead>
              <TableHead className="font-semibold text-gray-900">Customer Type</TableHead>
              <TableHead className="font-semibold text-gray-900">Mobile Number</TableHead>
              <TableHead className="font-semibold text-gray-900">Total Orders</TableHead>
              <TableHead className="font-semibold text-gray-900">Total Sales</TableHead>
              <TableHead className="font-semibold text-gray-900">Total Cart</TableHead>
              <TableHead className="font-semibold text-gray-900 w-20">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customersData.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-gray-50/50 border-b border-gray-100">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-sm">
                        {customer.initial}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCustomerTypeColor(customer.type)}`}>
                    {customer.type}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">{customer.mobile}</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">{customer.totalOrders}</span>
                </TableCell>
                <TableCell>
                  <span className="font-semibold text-gray-900">{customer.totalSales}</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">
                    {typeof customer.totalCart === 'string' ? customer.totalCart : customer.totalCart}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                    <Download className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-gray-500">
          Showing 1-10 of 25 customers
        </div>
        
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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Card>
  );
};

export default CustomersTable;
