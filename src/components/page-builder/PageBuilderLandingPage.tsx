
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PageBuilderLandingPage: React.FC = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Landing Page</h2>
      
      <Card>
        <CardContent className="py-12 md:py-16 text-center px-4">
          <div className="text-3xl md:text-4xl mb-4">🏠</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Landing Page Builder</h3>
          <p className="text-sm text-gray-500">Create and customize your landing pages here</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageBuilderLandingPage;
