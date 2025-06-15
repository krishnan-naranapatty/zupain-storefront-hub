
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Copy, Calendar, Tag, Users, DollarSign } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface CouponsGridProps {
  onEditCoupon: (coupon: any) => void;
}

const CouponsGrid: React.FC<CouponsGridProps> = ({ onEditCoupon }) => {
  const { currentPalette } = useTheme();

  const mockCoupons = [
    {
      id: 1,
      code: 'Launch30',
      description: 'Launch discount coupon',
      type: 'Percentage',
      value: 30,
      usageLimit: 100,
      used: 25,
      minPurchase: 700,
      status: 'Active',
      startDate: '2025-04-30',
      endDate: '2025-05-31'
    },
    {
      id: 2,
      code: 'SAVE150',
      description: 'Fixed amount discount',
      type: 'Fixed',
      value: 150,
      usageLimit: 50,
      used: 10,
      minPurchase: 1000,
      status: 'Active',
      startDate: '2025-04-01',
      endDate: '2025-06-30'
    },
    {
      id: 3,
      code: 'EXPIRED10',
      description: 'Expired coupon',
      type: 'Percentage',
      value: 10,
      usageLimit: 200,
      used: 150,
      minPurchase: 500,
      status: 'Expired',
      startDate: '2025-01-01',
      endDate: '2025-03-31'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Expired':
        return 'bg-red-100 text-red-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockCoupons.map((coupon) => (
        <Card key={coupon.id} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {coupon.code}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => navigator.clipboard.writeText(coupon.code)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{coupon.description}</p>
                </div>
              </div>
              <Badge className={getStatusColor(coupon.status)}>
                {coupon.status}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900">
                    {coupon.type === 'Percentage' ? `${coupon.value}%` : `₹${coupon.value}`}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  Min: ₹{coupon.minPurchase}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Usage</span>
                  </div>
                  <span className="font-medium">
                    {coupon.used}/{coupon.usageLimit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(coupon.used / coupon.usageLimit) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500">
                  Valid until {coupon.endDate}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEditCoupon(coupon)}
                  className="h-8 w-8 p-0"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CouponsGrid;
