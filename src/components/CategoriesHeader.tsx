
import React from 'react';
import { Plus, Package, TrendingUp, Eye, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const CategoriesHeader = () => {
  const { currentPalette } = useTheme();

  return (
    <div className="space-y-8">
      {/* Enhanced Page Title with Icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Categories Management</h1>
            <p className="text-gray-600">Organize and manage your product categories</p>
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

      {/* Dashboard Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500 rounded-xl shadow-sm">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Categories</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50 to-emerald-100/50 hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-500 rounded-xl shadow-sm">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Categories</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100/50 hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-500 rounded-xl shadow-sm">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Inactive Categories</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-md transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-500 rounded-xl shadow-sm">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Section */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-white to-blue-50/30 rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Actions</h3>
              <p className="text-gray-600">Manage your categories efficiently with these tools</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesHeader;
