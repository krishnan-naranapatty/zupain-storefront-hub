
import React, { useState } from 'react';
import { Search, Download, Upload, Users, Plus, Filter, Grid, List, User, Phone, ShoppingCart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';


const CustomersHeader = () => {
  const { currentPalette } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const filterOptions = [
    { id: 'all', label: 'All Customers', count: 25 },
    { id: 'new-not-signed', label: 'New (Not Signed)', count: 8 },
    { id: 'new-signed', label: 'New (Signed In)', count: 6 },
    { id: 'repeated', label: 'Returning', count: 4 },
    { id: 'abandoned', label: 'Abandoned Cart', count: 4 }
  ];

  const customersData = [
    {
      id: 1,
      name: "Khushboo",
      initial: "K",
      type: "Return Customer",
      mobile: "+91 9157101975",
      totalOrders: 8,
      totalSales: "₹3,303.00",
      totalSalesValue: 3303,
      totalCart: 0
    },
    {
      id: 2,
      name: "",
      initial: "",
      type: "New Customer(Signed IN)",
      mobile: "6363618762",
      totalOrders: 0,
      totalSales: "₹0.00",
      totalSalesValue: 0,
      totalCart: "1 items"
    },
    {
      id: 3,
      name: "skc",
      initial: "S",
      type: "Return Customer",
      mobile: "91 8849626093",
      totalOrders: 5,
      totalSales: "₹5.00",
      totalSalesValue: 5,
      totalCart: 0
    },
    {
      id: 4,
      name: "skc",
      initial: "S",
      type: "Return Customer",
      mobile: "91 8124001125",
      totalOrders: 2,
      totalSales: "₹1,600.00",
      totalSalesValue: 1600,
      totalCart: 0
    },
    {
      id: 5,
      name: "Riya",
      initial: "R",
      type: "Return Customer",
      mobile: "91 9236084106",
      totalOrders: 2,
      totalSales: "₹2.00",
      totalSalesValue: 2,
      totalCart: "1 items"
    },
    {
      id: 6,
      name: "ABHA",
      initial: "A",
      type: "New Customer(Signed IN)",
      mobile: "91 9727776523",
      totalOrders: 1,
      totalSales: "₹1.00",
      totalSalesValue: 1,
      totalCart: "1 items"
    }
  ];

  const getCustomerTypeColor = (type: string) => {
    if (type === "Return Customer") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    return "bg-blue-50 text-blue-700 border-blue-200";
  };

  const renderCardsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {customersData.map((customer) => (
        <Card key={customer.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden bg-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-semibold text-lg">
                      {customer.initial || customer.name?.charAt(0)?.toUpperCase() || '?'}
                    </span>
                  </div>
                  {customer.type === "Return Customer" && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{customer.name || "Anonymous"}</h3>
                  <p className="text-xs text-gray-500">ID: {customer.id}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Badge 
                variant="outline" 
                className={`${getCustomerTypeColor(customer.type)} font-medium border w-full justify-center`}
              >
                {customer.type}
              </Badge>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="font-mono">{customer.mobile}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <ShoppingCart className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-gray-500">Orders</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{customer.totalOrders}</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-gray-500">Revenue</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{customer.totalSales}</span>
                </div>
              </div>
              
              {typeof customer.totalCart === 'string' && (
                <div className="pt-2 border-t border-gray-100">
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 w-full justify-center">
                    Cart: {customer.totalCart}
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Enhanced Page Title with Icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h1>
            <p className="text-gray-600">Build stronger relationships with your customers</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Live data</span>
          </div>
          <span>•</span>
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Enhanced Search and Filter Card */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-white to-blue-50/30 rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left Section: Enhanced Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Enhanced Search Section */}
              <div className="flex-1 max-w-md">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search customers by name, mobile, or email..."
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 text-sm placeholder-gray-400"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <kbd className="px-2 py-1 text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded">⌘K</kbd>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Filter Dropdown */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filter by:</span>
                </div>
                <Select value={activeFilter} onValueChange={setActiveFilter}>
                  <SelectTrigger className="w-[200px] bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <SelectValue placeholder="Select filter" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 shadow-xl z-50 rounded-xl p-2">
                    {filterOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id} className="rounded-lg">
                        <div className="flex items-center justify-between w-full">
                          <span>{option.label}</span>
                          <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            {option.count}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Right Section: View Toggle and Action Buttons */}
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <Button
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'table' 
                      ? 'bg-white shadow-sm text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="w-4 h-4 mr-2" />
                  Table
                </Button>
                <Button
                  variant={viewMode === 'cards' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'cards' 
                      ? 'bg-white shadow-sm text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid className="w-4 h-4 mr-2" />
                  Cards
                </Button>
              </div>
              
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-xl px-4 py-2.5 transition-all duration-200">
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Import</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-emerald-50 border-2 border-gray-200 hover:border-emerald-300 rounded-xl px-4 py-2.5 transition-all duration-200">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Export</span>
              </Button>
              <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-4 py-2.5 shadow-lg hover:shadow-xl transition-all duration-200">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Add Customer</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default CustomersHeader;
