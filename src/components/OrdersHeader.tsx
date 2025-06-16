
import React from 'react';
import { Download, Truck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { downloadOrdersToExcel, downloadShiprocketOrdersToExcel } from '@/utils/excelExport';

interface OrdersHeaderProps {
  showShiprocketOrders?: boolean;
  onToggleShiprocketOrders?: () => void;
}

const OrdersHeader = ({ showShiprocketOrders = false, onToggleShiprocketOrders }: OrdersHeaderProps) => {
  // Sample orders data (in a real app, this would come from props or a hook)
  const sampleOrders = [
    {
      id: 'ORID0056',
      customer: 'Jaya Khubani',
      billDate: 'May 11, 2025 9:25 PM',
      status: 'Cancelled',
      paymentMethod: 'COD',
      amount: '₹749.00',
    },
    {
      id: 'ORID0055',
      customer: 'Khushboo',
      billDate: 'May 11, 2025 9:19 PM',
      status: 'Delivered',
      paymentMethod: 'COD',
      amount: '₹2,298.00',
    },
    // Add more sample data as needed
  ];

  const sampleShiprocketOrders = [
    {
      orderId: 'SR001',
      awbNumber: '123456789',
      customerName: 'John Doe',
      orderDate: '2024-12-15',
      status: 'Delivered',
      courierPartner: 'FedEx',
      destination: 'Mumbai, Maharashtra',
      amount: '₹1,200.00',
      weight: '0.5 kg',
    },
    {
      orderId: 'SR002',
      awbNumber: '987654321',
      customerName: 'Jane Smith',
      orderDate: '2024-12-14',
      status: 'In Transit',
      courierPartner: 'BlueDart',
      destination: 'Delhi, Delhi',
      amount: '₹850.00',
      weight: '0.3 kg',
    },
    // Add more sample data as needed
  ];

  const handleDownloadToExcel = () => {
    if (showShiprocketOrders) {
      downloadShiprocketOrdersToExcel(sampleShiprocketOrders);
    } else {
      downloadOrdersToExcel(sampleOrders);
    }
  };

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
          <Button 
            variant="outline" 
            className="space-x-2"
            onClick={handleDownloadToExcel}
          >
            <Download className="w-4 h-4" />
            <span>Download To Excel</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrdersHeader;
