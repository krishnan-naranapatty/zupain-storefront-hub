
import React, { useState } from 'react';
import { MapPin, Phone, Power, Edit, Eye, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const StoresGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  const totalPages = Math.ceil(allStores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStores = allStores.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatRevenue = (revenue: number) => `₹${revenue.toLocaleString()}`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentStores.map((store) => (
          <Card key={store.id} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {store.brand === "Blameless" ? "B" : "V"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
                      {store.name}
                    </h3>
                    <p className="text-xs text-gray-500">{store.brand}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-1 h-7 w-7">
                    <MoreHorizontal className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-gray-900 text-sm">{store.location}</div>
                    <div className="text-xs text-gray-500 line-clamp-2">{store.address}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-900">{store.phone}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    store.type === 'Flagship' 
                      ? 'bg-purple-100 text-purple-800'
                      : store.type === 'Outlet'
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {store.type}
                  </span>
                  
                  <div className="flex items-center space-x-1">
                    <Power className="w-3 h-3 text-gray-400" />
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      store.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.status}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="font-semibold text-gray-900 text-sm">{formatRevenue(store.revenue)}</div>
                  <div className="text-xs text-gray-500">This month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
        <div className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(endIndex, allStores.length)} of {allStores.length} stores
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
    </div>
  );
};

export default StoresGrid;
