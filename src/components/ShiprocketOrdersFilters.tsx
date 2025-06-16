
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calendar, Truck, Package, RotateCcw } from 'lucide-react';

interface ShiprocketOrdersFiltersProps {
  activeFilters: {
    status: string;
    dateRange: string;
    courier: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

const ShiprocketOrdersFilters = ({ activeFilters, onFilterChange }: ShiprocketOrdersFiltersProps) => {
  const handleReset = () => {
    onFilterChange('status', 'all');
    onFilterChange('dateRange', 'all');
    onFilterChange('courier', 'all');
  };

  return (
    <Card className="bg-gradient-to-r from-gray-50 via-blue-50 to-indigo-50 border border-gray-200 shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 px-3 py-2 min-w-64">
            <Search className="w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search by Order ID, AWB, or Customer" 
              className="border-0 p-0 focus-visible:ring-0 bg-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <Package className="w-4 h-4 text-gray-600" />
            <Select value={activeFilters.status} onValueChange={(value) => onFilterChange('status', value)}>
              <SelectTrigger className="w-48 bg-white">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="ready-to-ship">Ready to Ship</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="in-transit">In Transit</SelectItem>
                <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="exception">Exception</SelectItem>
                <SelectItem value="undelivered">Undelivered</SelectItem>
                <SelectItem value="rto">RTO</SelectItem>
                <SelectItem value="lost">Lost</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Range Filter */}
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-600" />
            <Select value={activeFilters.dateRange} onValueChange={(value) => onFilterChange('dateRange', value)}>
              <SelectTrigger className="w-48 bg-white">
                <SelectValue placeholder="All Dates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Courier Partner Filter */}
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-gray-600" />
            <Select value={activeFilters.courier} onValueChange={(value) => onFilterChange('courier', value)}>
              <SelectTrigger className="w-48 bg-white">
                <SelectValue placeholder="All Couriers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Couriers</SelectItem>
                <SelectItem value="fedex">FedEx</SelectItem>
                <SelectItem value="bluedart">BlueDart</SelectItem>
                <SelectItem value="delhivery">Delhivery</SelectItem>
                <SelectItem value="ecom">Ecom Express</SelectItem>
                <SelectItem value="dtdc">DTDC</SelectItem>
                <SelectItem value="xpressbees">XpressBees</SelectItem>
                <SelectItem value="shadowfax">Shadowfax</SelectItem>
                <SelectItem value="india-post">India Post</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reset Filters */}
          <Button variant="outline" onClick={handleReset} className="flex items-center space-x-2">
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </Button>

          {/* Advanced Filters */}
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShiprocketOrdersFilters;
