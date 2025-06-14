
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Copy } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface CouponsTableProps {
  onEditCoupon: (coupon: any) => void;
}

const CouponsTable: React.FC<CouponsTableProps> = ({ onEditCoupon }) => {
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
    <Card className={`${currentPalette.cardBg} border`}>
      <CardHeader>
        <CardTitle>All Coupons</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Coupon Code</th>
                <th className="text-left p-4">Description</th>
                <th className="text-left p-4">Discount</th>
                <th className="text-left p-4">Usage</th>
                <th className="text-left p-4">Min Purchase</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Valid Until</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCoupons.map((coupon) => (
                <tr key={coupon.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{coupon.code}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 flex items-center justify-center"
                        onClick={() => navigator.clipboard.writeText(coupon.code)}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{coupon.description}</td>
                  <td className="p-4">
                    {coupon.type === 'Percentage' ? `${coupon.value}%` : `₹${coupon.value}`}
                  </td>
                  <td className="p-4">
                    <span className="text-sm">
                      {coupon.used}/{coupon.usageLimit}
                    </span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(coupon.used / coupon.usageLimit) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="p-4">₹{coupon.minPurchase}</td>
                  <td className="p-4">
                    <Badge className={getStatusColor(coupon.status)}>
                      {coupon.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{coupon.endDate}</td>
                  <td className="p-4">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CouponsTable;
