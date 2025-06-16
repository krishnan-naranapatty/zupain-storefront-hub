
import React, { useState, useMemo } from 'react';
import { Download, ChevronUp, ChevronDown, ChevronsUpDown, Search, Filter, MoreVertical, User, Phone, ShoppingCart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';

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

      if (sortKey === 'name') {
        aValue = aValue || 'ZZZ';
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

  const getCustomerTypeVariant = (type: string) => {
    if (type === "Return Customer") {
      return "default";
    }
    return "secondary";
  };

  const getCustomerTypeColor = (type: string) => {
    if (type === "Return Customer") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    return "bg-blue-50 text-blue-700 border-blue-200";
  };

  return (
    <div className="space-y-6">
      {/* Modern Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500 rounded-lg">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">25</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 border-0 shadow-sm bg-gradient-to-br from-emerald-50 to-emerald-100/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-500 rounded-lg">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Return Customers</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500 rounded-lg">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Carts</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-500 rounded-lg">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">New Signups</p>
              <p className="text-2xl font-bold text-gray-900">6</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Modern Table Card */}
      <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
        <div className="bg-white rounded-xl">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-100 bg-gray-50/50">
                <TableHead className="font-semibold text-gray-700 py-4">
                  <button
                    onClick={() => handleSort('name')}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                  >
                    <User className="w-4 h-4" />
                    Customer
                    <div className="group-hover:text-blue-600">
                      {getSortIcon('name')}
                    </div>
                  </button>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">
                  <button
                    onClick={() => handleSort('type')}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                  >
                    Type
                    <div className="group-hover:text-blue-600">
                      {getSortIcon('type')}
                    </div>
                  </button>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">
                  <button
                    onClick={() => handleSort('mobile')}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                  >
                    <Phone className="w-4 h-4" />
                    Mobile
                    <div className="group-hover:text-blue-600">
                      {getSortIcon('mobile')}
                    </div>
                  </button>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">
                  <button
                    onClick={() => handleSort('totalOrders')}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                  >
                    Orders
                    <div className="group-hover:text-blue-600">
                      {getSortIcon('totalOrders')}
                    </div>
                  </button>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">
                  <button
                    onClick={() => handleSort('totalSalesValue')}
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
                  >
                    Revenue
                    <div className="group-hover:text-blue-600">
                      {getSortIcon('totalSalesValue')}
                    </div>
                  </button>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  Cart
                </TableHead>
                <TableHead className="font-semibold text-gray-700 w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((customer, index) => (
                <TableRow 
                  key={customer.id} 
                  className={`hover:bg-blue-50/30 transition-colors duration-200 border-b border-gray-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                  }`}
                >
                  <TableCell className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-white font-semibold text-sm">
                            {customer.initial || customer.name?.charAt(0)?.toUpperCase() || '?'}
                          </span>
                        </div>
                        {customer.type === "Return Customer" && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-2 h-2 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{customer.name || "Anonymous"}</p>
                        <p className="text-xs text-gray-500">ID: {customer.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`${getCustomerTypeColor(customer.type)} font-medium border`}
                    >
                      {customer.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900 font-mono text-sm">{customer.mobile}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {customer.totalOrders}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-right">
                      <span className="font-bold text-gray-900 text-lg">{customer.totalSales}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      {typeof customer.totalCart === 'string' ? (
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          {customer.totalCart}
                        </Badge>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="p-2 h-8 w-8 hover:bg-blue-50">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Modern Pagination */}
        <div className="flex items-center justify-between p-6 border-t border-gray-100 bg-gray-50/30">
          <div className="text-sm text-gray-600 font-medium">
            Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">25</span> customers
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="hover:bg-blue-50" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-blue-500 text-white hover:bg-blue-600">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="hover:bg-blue-50">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="hover:bg-blue-50" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Card>
    </div>
  );
};

export default CustomersTable;
