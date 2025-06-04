
import React from 'react';
import { Download, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const OrdersHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
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
        <div className="flex items-center space-x-4">
          <div className="bg-blue-50 px-3 py-2 rounded-lg">
            <span className="text-sm font-medium text-blue-700">Jingls (0)</span>
          </div>
          <div className="bg-gray-100 px-3 py-2 rounded-lg">
            <span className="text-sm text-gray-600">ONDC (Coming Soon)</span>
          </div>
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
