
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Package } from 'lucide-react';

const InventoryCards = () => {
  const [inventoryData] = useState([
    {
      id: 1,
      image: '/placeholder.svg',
      name: 'Blameless Avocado + Green Tea Sunscreen SPF 50',
      description: 'Silicon based Ultra-Matte Gel | Broad Spectrum, Blue Light & Infrared Protection | Non-Greasy, Fast-Absorbing | For Face & Body | 50ml',
      variant: '',
      inStock: 201,
      outStock: 3,
      availability: 198,
      status: 'In Stock'
    },
    {
      id: 2,
      image: '/placeholder.svg',
      name: 'Blameless Pore Refining & Acne Control Serum',
      description: 'Salicylic Acid, Neem, Green Tea & Hibiscus | Lightweight Gel for Acne-Prone Skin | 50ml',
      variant: '',
      inStock: 200,
      outStock: 1,
      availability: 199,
      status: 'In Stock'
    },
    {
      id: 3,
      image: '/placeholder.svg',
      name: 'Blameless Oil Control + Brightening Serum',
      description: 'Niacinamide, Multani Mitti, Hyaluronic Acid & Daisy Extract | Lightweight Gel for Oily, Acne-Prone Skin | Controls Sebum, Minimizes Pores & Evens Tone | 50ml',
      variant: '',
      inStock: 201,
      outStock: 4,
      availability: 197,
      status: 'In Stock'
    },
    {
      id: 4,
      image: '/placeholder.svg',
      name: 'Blameless Hydrating & Brightening Serum',
      description: 'With Watermelon, Niacinamide & Lotus Extracts | For Oily, Acne-Prone & Congested Skin | 50ml',
      variant: '',
      inStock: 1101,
      outStock: 902,
      availability: 199,
      status: 'Low Stock'
    }
  ]);

  const getStatusBadge = (status: string, availability: number) => {
    if (availability === 0) return <Badge variant="destructive">Out of Stock</Badge>;
    if (availability <= 10) return <Badge variant="secondary" className="bg-orange-100 text-orange-800">Low Stock</Badge>;
    return <Badge variant="secondary" className="bg-green-100 text-green-800">In Stock</Badge>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {inventoryData.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="space-y-4">
              {/* Product Image and Name */}
              <div className="space-y-3">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-32 rounded-lg object-cover border"
                />
                <div>
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>

              {/* Variant */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 font-medium">Variant:</span>
                <span className="text-xs text-gray-600">{item.variant || '-'}</span>
              </div>

              {/* Stock Information */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">In Stock:</span>
                  <span className="text-sm font-medium text-blue-600">{item.inStock}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Out Stock:</span>
                  <span className="text-sm font-medium text-red-600">{item.outStock}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Availability:</span>
                  <span className="text-sm font-medium text-gray-900">{item.availability}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex justify-center">
                {getStatusBadge(item.status, item.availability)}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center space-x-1 pt-2 border-t">
                <Button variant="outline" size="sm" className="p-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <TrendingDown className="w-4 h-4 text-red-600" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Package className="w-4 h-4 text-blue-600" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InventoryCards;
