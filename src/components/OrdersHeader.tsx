
import React from 'react';
import { Download, Plus, Truck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface OrdersHeaderProps {
  showShiprocketOrders?: boolean;
  onToggleShiprocketOrders?: () => void;
}

const OrdersHeader = ({ showShiprocketOrders = false, onToggleShiprocketOrders }: OrdersHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {showShiprocketOrders && (
            <Button
              variant="outline"
              onClick={onToggleShiprocketOrders}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Orders</span>
            </Button>
          )}
          <h1 className="text-3xl font-bold text-gray-900">
            {showShiprocketOrders ? 'Shiprocket Orders' : 'Orders'}
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="space-x-2">
            <Download className="w-4 h-4" />
            <span>Download To Excel</span>
          </Button>
          <Button className="space-x-2">
            <Plus className="w-4 h-4" />
            <span>Shiprocket Order</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-gray-700 font-medium">Advanced Filters</span>
          
          {!showShiprocketOrders && (
            <Button
              variant="outline"
              onClick={onToggleShiprocketOrders}
              className="flex items-center space-x-2"
            >
              <Truck className="w-4 h-4" />
              <span>Shiprocket Orders</span>
            </Button>
          )}
        </div>
        
        <div className="relative w-80">
          <Input
            placeholder="Search orders..."
            className="pl-4"
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersHeader;
