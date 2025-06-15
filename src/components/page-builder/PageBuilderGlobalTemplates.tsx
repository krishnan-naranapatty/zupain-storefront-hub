
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PageBuilderGlobalTemplates: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Global Templates</h2>
      
      <Card>
        <CardContent className="py-16 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No data</h3>
          <p className="text-sm text-gray-500">Your global templates will appear here</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageBuilderGlobalTemplates;
