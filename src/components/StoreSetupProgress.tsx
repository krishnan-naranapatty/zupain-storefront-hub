
import React from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StoreSetupProgress = () => {
  const setupSteps = [
    {
      title: 'Store Setup',
      subtitle: 'Add Store Info And Delivery Location',
      completed: false,
      action: 'Add Store'
    },
    {
      title: 'Social Media',
      subtitle: 'Add Social Media Information',
      completed: false,
      action: 'Add Info'
    },
    {
      title: 'Add Product',
      subtitle: 'Add Product Image And Related Info',
      completed: false,
      action: 'Add Product'
    },
    {
      title: 'Customize Your Website',
      subtitle: 'Customize Website Logo & Theme',
      completed: false,
      action: 'Customize'
    },
    {
      title: 'Order Processing Details',
      subtitle: 'Add Shipping And Payment Details',
      completed: false,
      action: 'Add Details'
    },
    {
      title: 'Create Coupon',
      subtitle: 'Create Coupons For Your Customer',
      completed: false,
      action: 'Create'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Store Setup Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {setupSteps.map((step, index) => (
          <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-sm font-medium text-gray-900">
                    {step.title}
                  </CardTitle>
                  <p className="text-xs text-gray-500 mt-1">
                    {step.subtitle}
                  </p>
                </div>
                {step.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300" />
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <Button 
                size="sm" 
                className="w-full"
                variant={step.completed ? "outline" : "default"}
              >
                {step.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Store and Policies Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg">Create Store</CardTitle>
            <p className="text-sm text-gray-600">
              Add store name, address, contact information, delivery location and other related information
            </p>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Add Store</Button>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader className="flex flex-row items-start space-y-0 space-x-3">
            <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
            <div>
              <CardTitle className="text-lg">Add Store Policies</CardTitle>
              <p className="text-sm text-gray-600">
                In the documentation page, you can add the store policies
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Learn How</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StoreSetupProgress;
