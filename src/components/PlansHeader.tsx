
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const PlansHeader = () => {
  const { currentPalette } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Tabs defaultValue="plans" className="w-full">
        <TabsList className="grid w-fit grid-cols-2">
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-6 mt-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscriptions</h2>
            
            <Card className={`${currentPalette.cardBg} border`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                    Active
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <span className="block">252 days left</span>
                  </div>
                  <div>
                    <span className="block">Start date: 22/02/25</span>
                  </div>
                  <div>
                    <span className="block">End date: 22/02/26</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  Payment method: manual
                </div>
                
                <Button 
                  className={`${currentPalette.primary} text-white hover:opacity-90`}
                  onClick={() => navigate('/change-plan')}
                >
                  Change Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wallet" className="space-y-6 mt-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Wallet</h2>
            <Card className={`${currentPalette.cardBg} border`}>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">₹0.00</h3>
                  <p className="text-gray-600">Current Balance</p>
                  <Button className={`${currentPalette.primary} text-white hover:opacity-90 mt-4`}>
                    Add Money
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlansHeader;
