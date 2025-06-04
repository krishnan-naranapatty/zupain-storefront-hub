
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Eye } from 'lucide-react';

const DashboardStats = () => {
  const statsCards = [
    {
      title: 'Total Orders',
      value: '0',
      change: '+100.00%',
      trend: 'up',
      icon: ShoppingCart,
      timeframe: 'Last Week'
    },
    {
      title: 'Total Sales',
      value: '0',
      change: '+100.00%',
      trend: 'up', 
      icon: DollarSign,
      timeframe: 'Last Week'
    },
    {
      title: 'Total User Visits',
      value: '5531',
      todayVisits: '0',
      icon: Eye,
      timeframe: 'Today Visits vs Total Visits'
    }
  ];

  const quickStats = [
    { label: 'Categories', value: '2' },
    { label: 'Sub Categories', value: '0' },
    { label: 'Total Products', value: '4' },
    { label: 'All Customers', value: '18' },
    { label: 'Avg. Order Value', value: '0', suffix: '.00%' }
  ];

  return (
    <div className="space-y-6">
      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                  {stat.todayVisits !== undefined && (
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      Today: {stat.todayVisits}
                    </span>
                  )}
                </div>
                {stat.change && (
                  <div className="flex items-center space-x-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                )}
                <p className="text-xs text-gray-500">{stat.timeframe}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="border border-gray-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
