
import React, { useState, useMemo } from 'react';
import { Download, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
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
    totalSalesValue: 3303,
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
    totalSalesValue: 0,
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
    totalSalesValue: 5,
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
    totalSalesValue: 1600,
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
    totalSalesValue: 2,
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
    totalSalesValue: 1,
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
    totalSalesValue: 1000,
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
    totalSalesValue: 1,
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
    totalSalesValue: 0,
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
    totalSalesValue: 0,
    totalCart: 0
  }
];

type SortKey = 'name' | 'type' | 'mobile' | 'totalOrders' | 'totalSalesValue';
type SortDirection = 'asc' | 'desc' | null;

const CustomersTable = () => {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortKey(null);
        setSortDirection(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) {
      return customersData;
    }

    return [...customersData].sort((a, b) => {
      let aValue = a[sortKey];
      let bValue = b[sortKey];

      // Handle empty names
      if (sortKey === 'name') {
        aValue = aValue || 'ZZZ'; // Put empty names at the end
        bValue = bValue || 'ZZZ';
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.toLowerCase().localeCompare(bValue.toLowerCase());
        return sortDirection === 'asc' ? comparison : -comparison;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [sortKey, sortDirection]);

  const getSortIcon = (key: SortKey) => {
    if (sortKey !== key) {
      return <ChevronsUpDown className="w-4 h-4 text-gray-400" />;
    }
    
    if (sortDirection === 'asc') {
      return <ChevronUp className="w-4 h-4 text-blue-600" />;
    } else if (sortDirection === 'desc') {
      return <ChevronDown className="w-4 h-4 text-blue-600" />;
    }
    
    return <ChevronsUpDown className="w-4 h-4 text-gray-400" />;
  };

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
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('name')}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  Customer Name
                  {getSortIcon('name')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('type')}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  Customer Type
                  {getSortIcon('type')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('mobile')}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  Mobile Number
                  {getSortIcon('mobile')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('totalOrders')}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  Total Orders
                  {getSortIcon('totalOrders')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('totalSalesValue')}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  Total Sales
                  {getSortIcon('totalSalesValue')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">Total Cart</TableHead>
              <TableHead className="font-semibold text-gray-900 w-20">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((customer) => (
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
