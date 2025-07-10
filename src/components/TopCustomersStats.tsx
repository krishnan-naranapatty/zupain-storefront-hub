import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Star, TrendingUp, Crown, DollarSign, ShoppingBag, Calendar, Award } from 'lucide-react';

const TopCustomersStats = () => {
  // Sample top customers data
  const topCustomers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      totalSpent: 125400,
      orders: 47,
      avgOrderValue: 2668,
      status: 'VIP',
      joinDate: '2023-01-15',
      lastOrder: '2024-01-10',
      growth: '+34.2%',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      totalSpent: 98600,
      orders: 32,
      avgOrderValue: 3081,
      status: 'Premium',
      joinDate: '2023-03-22',
      lastOrder: '2024-01-08',
      growth: '+28.7%',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      totalSpent: 87300,
      orders: 29,
      avgOrderValue: 3010,
      status: 'Premium',
      joinDate: '2023-02-10',
      lastOrder: '2024-01-05',
      growth: '+22.1%',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      totalSpent: 72800,
      orders: 41,
      avgOrderValue: 1776,
      status: 'Regular',
      joinDate: '2023-05-08',
      lastOrder: '2024-01-12',
      growth: '+19.5%',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@email.com',
      totalSpent: 65900,
      orders: 25,
      avgOrderValue: 2636,
      status: 'Premium',
      joinDate: '2023-04-18',
      lastOrder: '2024-01-07',
      growth: '+16.8%',
      avatar: '/api/placeholder/40/40'
    }
  ];

  // Customer segments data for pie chart
  const customerSegments = [
    { name: 'VIP', value: 15, color: '#8b5cf6' },
    { name: 'Premium', value: 45, color: '#3b82f6' },
    { name: 'Regular', value: 120, color: '#10b981' },
    { name: 'New', value: 67, color: '#f59e0b' }
  ];

  // Monthly customer acquisition data
  const acquisitionData = [
    { month: 'Jul', customers: 23 },
    { month: 'Aug', customers: 32 },
    { month: 'Sep', customers: 28 },
    { month: 'Oct', customers: 45 },
    { month: 'Nov', customers: 38 },
    { month: 'Dec', customers: 52 }
  ];

  // Calculate totals
  const totalSpent = topCustomers.reduce((sum, customer) => sum + customer.totalSpent, 0);
  const totalOrders = topCustomers.reduce((sum, customer) => sum + customer.orders, 0);
  const avgCustomerValue = totalSpent / topCustomers.length;
  const totalCustomers = customerSegments.reduce((sum, segment) => sum + segment.value, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'bg-purple-100 text-purple-800';
      case 'Premium': return 'bg-blue-100 text-blue-800';
      case 'Regular': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'VIP': return <Crown className="h-3 w-3" />;
      case 'Premium': return <Star className="h-3 w-3" />;
      case 'Regular': return <Users className="h-3 w-3" />;
      default: return <Users className="h-3 w-3" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{totalCustomers}</div>
            <div className="text-sm text-gray-500">Total Customers</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-green-600">₹{(totalSpent / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-500">Top 5 Revenue</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-purple-600">₹{(avgCustomerValue / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-500">Avg. Customer Value</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <ShoppingBag className="h-5 w-5 text-orange-500" />
            </div>
            <div className="text-2xl font-bold text-orange-600">{totalOrders}</div>
            <div className="text-sm text-gray-500">Total Orders</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Customers List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Top Customers by Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCustomers.map((customer, index) => (
                <div key={customer.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                    #{index + 1}
                  </div>
                  
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900 truncate">{customer.name}</h4>
                      <Badge className={`text-xs ${getStatusColor(customer.status)}`}>
                        {getStatusIcon(customer.status)}
                        <span className="ml-1">{customer.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{customer.email}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{customer.orders} orders</span>
                      <span>•</span>
                      <span>Avg: ₹{(customer.avgOrderValue / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">₹{(customer.totalSpent / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-green-600">{customer.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Segments Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Customer Segments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                            <p className="font-medium text-gray-900">{data.name}</p>
                            <p className="text-sm text-gray-600">{data.value} customers</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {customerSegments.map((segment) => (
                <div key={segment.name} className="flex items-center text-sm">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="text-gray-600">{segment.name}: {segment.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Acquisition Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Customer Acquisition Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={acquisitionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#666"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#666"
                    fontSize={12}
                  />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                            <p className="font-medium text-gray-900">{label}</p>
                            <p className="text-blue-600">
                              New Customers: {payload[0]?.value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="customers" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Customer Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  Top Spender
                </h4>
                <p className="text-sm text-purple-700">
                  <strong>{topCustomers[0].name}</strong> has spent ₹{(topCustomers[0].totalSpent / 1000).toFixed(0)}K across {topCustomers[0].orders} orders
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Fastest Growing
                </h4>
                <p className="text-sm text-blue-700">
                  <strong>{topCustomers[0].name}</strong> shows {topCustomers[0].growth} growth this month
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Highest AOV
                </h4>
                <p className="text-sm text-green-700">
                  <strong>{topCustomers[1].name}</strong> has the highest average order value of ₹{(topCustomers[1].avgOrderValue / 1000).toFixed(1)}K
                </p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Acquisition Rate
                </h4>
                <p className="text-sm text-orange-700">
                  Acquiring an average of <strong>36 new customers</strong> per month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TopCustomersStats;