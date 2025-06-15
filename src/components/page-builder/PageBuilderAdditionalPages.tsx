
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const PageBuilderAdditionalPages: React.FC = () => {
  const additionalPages = [
    { id: 1, name: 'Shop By Category', type: 'Collection' },
    { id: 2, name: 'About Us', type: 'Page' },
    { id: 3, name: 'Blog', type: 'Page' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Additional Pages</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Page
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalPages.map((page) => (
          <Card key={page.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              {/* Page Preview */}
              <div className="aspect-[4/3] bg-gray-100 border-b relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded"></div>
                    </div>
                    <p className="text-xs text-gray-400">collection_image</p>
                  </div>
                </div>
              </div>

              {/* Page Info */}
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-1">{page.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{page.type}</p>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Preview
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PageBuilderAdditionalPages;
