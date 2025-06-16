
import React from 'react';

interface OrdersFilterProps {
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const OrdersFilter = ({ activeFilter, onFilterChange }: OrdersFilterProps) => {
  // This component is now empty since the dropdown has been moved to OrdersTable
  return null;
};

export default OrdersFilter;
