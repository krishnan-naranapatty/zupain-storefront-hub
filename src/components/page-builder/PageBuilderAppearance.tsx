
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Edit, Copy, Eye } from 'lucide-react';

const PageBuilderAppearance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Appearance</h2>
        <div className="flex space-x-3">
          <Button variant="outline">Update Theme</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Customize</Button>
        </div>
      </div>

      {/* Current Layout Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-blue-900">Current Layout</h3>
              <p className="text-sm text-blue-700">SE0</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout Library */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Layout Library</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                These layouts are only visible to you. You can switch to another layout by publishing it to your store
              </p>
            </div>
            <div className="flex space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Create New
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Empty State */}
          <div className="text-center py-16">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No data</h3>
            <p className="text-sm text-gray-500">Your custom layouts will appear here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageBuilderAppearance;
