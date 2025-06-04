
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, MoreHorizontal } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Admin</h1>
          <p className="text-gray-600">Here's what's happening with your store today.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="last-week">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="space-x-2">
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
