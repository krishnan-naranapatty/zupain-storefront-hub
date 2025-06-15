
import React, { useState } from 'react';
import { MoreHorizontal, Edit, Eye, MapPin, Phone, Power, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

type SortField = 'name' | 'location' | 'type' | 'revenue' | 'status';
type SortDirection = 'asc' | 'desc' | null;

const StoresTable = () => {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const allStores = [
    {
      id: 1,
      name: "Vitanix consumer private limited",
      brand: "Blameless",
      location: "Mumbai",
      address: "7th floor B block, Kadamb Greens, zundal",
      phone: "+91 9727776523",
      status: "Active",
      type: "Flagship",
      revenue: 245000
    },
    {
      id: 2,
      name: "Vitanix Delhi Central",
      brand: "Blameless", 
      location: "Delhi",
      address: "Shop 24, Connaught Place, New Delhi",
      phone: "+91 9876543210",
      status: "Active",
      type: "Outlet",
      revenue: 185000
    },
    {
      id: 3,
      name: "Vitanix Bangalore Tech",
      brand: "Vitanix",
      location: "Bangalore", 
      address: "3rd Floor, Brigade Road, Bangalore",
      phone: "+91 8765432109",
      status: "Inactive",
      type: "Franchise",
      revenue: 98000
    },
    {
      id: 4,
      name: "Vitanix Pune Mall",
      brand: "Blameless",
      location: "Pune",
      address: "Level 2, Phoenix Mall, Pune",
      phone: "+91 7654321098", 
      status: "Active",
      type: "Outlet",
      revenue: 165000
    },
    {
      id: 5,
      name: "Vitanix Chennai Express",
      brand: "Vitanix",
      location: "Chennai",
      address: "1st Floor, Express Avenue Mall, Chennai",
      phone: "+91 6543210987",
      status: "Active",
      type: "Outlet",
      revenue: 142000
    },
    {
      id: 6,
      name: "Blameless Kolkata Hub",
      brand: "Blameless",
      location: "Kolkata",
      address: "Park Street, Kolkata",
      phone: "+91 5432109876",
      status: "Active",
      type: "Franchise",
      revenue: 128000
    },
    {
      id: 7,
      name: "Vitanix Hyderabad Central",
      brand: "Vitanix",
      location: "Hyderabad",
      address: "Banjara Hills, Hyderabad",
      phone: "+91 4321098765",
      status: "Inactive",
      type: "Outlet",
      revenue: 87000
    },
    {
      id: 8,
      name: "Blameless Ahmedabad Plaza",
      brand: "Blameless",
      location: "Ahmedabad",
      address: "SG Highway, Ahmedabad",
      phone: "+91 3210987654",
      status: "Active",
      type: "Flagship",
      revenue: 198000
    },
    {
      id: 9,
      name: "Vitanix Jaipur Junction",
      brand: "Vitanix",
      location: "Jaipur",
      address: "MI Road, Jaipur",
      phone: "+91 2109876543",
      status: "Active",
      type: "Franchise",
      revenue: 134000
    },
    {
      id: 10,
      name: "Blameless Lucknow Mall",
      brand: "Blameless",
      location: "Lucknow",
      address: "Hazratganj, Lucknow",
      phone: "+91 1098765432",
      status: "Active",
      type: "Outlet",
      revenue: 156000
    },
    {
      id: 11,
      name: "Vitanix Indore Center",
      brand: "Vitanix",
      location: "Indore",
      address: "Vijay Nagar, Indore",
      phone: "+91 0987654321",
      status: "Inactive",
      type: "Outlet",
      revenue: 76000
    },
    {
      id: 12,
      name: "Blameless Bhopal Square",
      brand: "Blameless",
      location: "Bhopal",
      address: "New Market, Bhopal",
      phone: "+91 9876543210",
      status: "Active",
      type: "Franchise",
      revenue: 119000
    }
  ];

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortField(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    if (sortDirection === 'asc') return <ChevronUp className="w-4 h-4" />;
    if (sortDirection === 'desc') return <ChevronDown className="w-4 h-4" />;
    return null;
  };

  const sortedStores = React.useMemo(() => {
    if (!sortField || !sortDirection) return allStores;

    return [...allStores].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortField === 'name' || sortField === 'location' || sortField === 'type' || sortField === 'status') {
        aValue = (aValue as string).toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortField, sortDirection]);

  const totalPages = Math.ceil(sortedStores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStores = sortedStores.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatRevenue = (revenue: number) => `₹${revenue.toLocaleString()}`;

  return (
    <Card className="border-0 shadow-sm">
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('name')}
                  className="flex items-center space-x-1 hover:text-gray-900 font-medium"
                >
                  <span>Store</span>
                  {getSortIcon('name')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('location')}
                  className="flex items-center space-x-1 hover:text-gray-900 font-medium"
                >
                  <span>Location</span>
                  {getSortIcon('location')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">Contact</TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('type')}
                  className="flex items-center space-x-1 hover:text-gray-900 font-medium"
                >
                  <span>Type</span>
                  {getSortIcon('type')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('revenue')}
                  className="flex items-center space-x-1 hover:text-gray-900 font-medium"
                >
                  <span>Revenue</span>
                  {getSortIcon('revenue')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900">
                <button
                  onClick={() => handleSort('status')}
                  className="flex items-center space-x-1 hover:text-gray-900 font-medium"
                >
                  <span>Status</span>
                  {getSortIcon('status')}
                </button>
              </TableHead>
              <TableHead className="font-semibold text-gray-900 w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentStores.map((store) => (
              <TableRow key={store.id} className="hover:bg-gray-50/50 border-b border-gray-100">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {store.brand === "Blameless" ? "B" : "V"}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{store.name}</div>
                      <div className="text-sm text-gray-500">{store.brand}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">{store.location}</div>
                      <div className="text-sm text-gray-500 max-w-xs truncate">{store.address}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">{store.phone}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    store.type === 'Flagship' 
                      ? 'bg-purple-100 text-purple-800'
                      : store.type === 'Outlet'
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {store.type}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="font-semibold text-gray-900">{formatRevenue(store.revenue)}</div>
                  <div className="text-sm text-gray-500">This month</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Power className="w-4 h-4 text-gray-400" />
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      store.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between p-4 border-t">
        <div className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(endIndex, sortedStores.length)} of {sortedStores.length} stores
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Card>
  );
};

export default StoresTable;
