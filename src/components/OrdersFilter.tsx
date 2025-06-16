
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface OrdersFilterProps {
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const OrdersFilter = ({ activeFilter, onFilterChange }: OrdersFilterProps) => {
  const filters = [
    { id: 'all', label: 'All', count: 56, color: 'bg-blue-600' },
    { id: 'pending', label: 'Pending', count: 10, color: 'bg-orange-500' },
    { id: 'confirmed', label: 'Confirmed', count: 7, color: 'bg-green-600' },
    { id: 'in-packing', label: 'In Packing', count: 0, color: 'bg-purple-500' },
    { id: 'dispatched', label: 'Dispatched', count: 0, color: 'bg-blue-500' },
    { id: 'delivered', label: 'Delivered', count: 7, color: 'bg-green-500' },
    { id: 'cancelled', label: 'Cancelled', count: 0, color: 'bg-red-500' },
    { id: 'checkout', label: 'Checkout', count: 30, color: 'bg-gray-500' },
    { id: 'cancel-request', label: 'Cancel Request', count: 0, color: 'bg-yellow-500' },
  ];

  const activeFilterData = filters.find(filter => filter.id === activeFilter) || filters[0];

  return (
    <div className="flex items-center space-x-4">
      {/* Status Filter Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className={`flex items-center space-x-2 ${activeFilterData.color} text-white hover:opacity-90`}
          >
            <span>{activeFilterData.label} ({activeFilterData.count})</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 bg-white border shadow-lg">
          {filters.map((filter) => (
            <DropdownMenuItem 
              key={filter.id}
              className="cursor-pointer"
              onClick={() => onFilterChange(filter.id)}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-sm">{filter.label}</span>
                <span className="text-sm text-gray-500">({filter.count})</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default OrdersFilter;
