import React from 'react';
import { MoreHorizontal, Edit, Eye, MapPin, Phone, Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const storesData = [
  {
    id: 1,
    name: "Vitanix consumer private limited",
    brand: "Blameless",
    location: "Mumbai",
    address: "7th floor B block, Kadamb Greens, zundal",
    phone: "+91 9727776523",
    status: "Active",
    type: "Flagship",
    revenue: "₹2,45,000"
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
    revenue: "₹1,85,000"
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
    revenue: "₹98,000"
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
    revenue: "₹1,65,000"
  }
];

const StoresTable = () => {
  return (
    <Card className="border-0 shadow-sm">
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="font-semibold text-gray-900">Store</TableHead>
              <TableHead className="font-semibold text-gray-900">Location</TableHead>
              <TableHead className="font-semibold text-gray-900">Contact</TableHead>
              <TableHead className="font-semibold text-gray-900">Type</TableHead>
              <TableHead className="font-semibold text-gray-900">Revenue</TableHead>
              <TableHead className="font-semibold text-gray-900">Status</TableHead>
              <TableHead className="font-semibold text-gray-900 w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {storesData.map((store) => (
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
                  <div className="font-semibold text-gray-900">{store.revenue}</div>
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
          Showing 1-4 of 12 stores
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
              <PaginationLink href="#">3</PaginationLink>
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

export default StoresTable;
