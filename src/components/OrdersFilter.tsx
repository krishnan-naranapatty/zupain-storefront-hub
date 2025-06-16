
import React from 'react';

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

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeFilter === filter.id
              ? `${filter.color} text-white`
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  );
};

export default OrdersFilter;
