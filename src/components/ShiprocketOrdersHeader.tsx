
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, RefreshCw, Plus, Truck, Package, AlertCircle } from 'lucide-react';
import { downloadShiprocketOrdersToExcel } from '@/utils/excelExport';

const ShiprocketOrdersHeader = () => {
  // Sample Shiprocket orders data
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

  const handleExport = () => {
    downloadShiprocketOrdersToExcel(sampleShiprocketOrders);
  };

  return (
    <div className="space-y-6">
      {/* Main Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Shiprocket Orders</h1>
          <p className="text-gray-600 mt-1">Manage and track your Shiprocket shipments</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Sync Orders</span>
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center space-x-2"
            onClick={handleExport}
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create Shipment</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Shipments</p>
                <p className="text-2xl font-bold text-blue-700">1,234</p>
                <p className="text-xs text-blue-500">+12% from last month</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-full">
                <Package className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Delivered</p>
                <p className="text-2xl font-bold text-green-700">1,056</p>
                <p className="text-xs text-green-500">85.6% success rate</p>
              </div>
              <div className="bg-green-500 p-3 rounded-full">
                <Truck className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 text-sm font-medium">In Transit</p>
                <p className="text-2xl font-bold text-orange-700">89</p>
                <p className="text-xs text-orange-500">7.2% of total</p>
              </div>
              <div className="bg-orange-500 p-3 rounded-full">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Issues</p>
                <p className="text-2xl font-bold text-red-700">89</p>
                <p className="text-xs text-red-500">Need attention</p>
              </div>
              <div className="bg-red-500 p-3 rounded-full">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShiprocketOrdersHeader;
