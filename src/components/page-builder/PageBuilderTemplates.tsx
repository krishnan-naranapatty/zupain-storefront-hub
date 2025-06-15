
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutGrid, Copy, Edit, Eye } from 'lucide-react';

const PageBuilderTemplates: React.FC = () => {
  const [activeTab, setActiveTab] = useState('templates');

  const templates = [
    {
      id: 1,
      name: 'Copy of landing page 2',
      type: 'landing',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Main Site',
      type: 'main',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'landing page 1',
      type: 'landing',
      thumbnail: '/placeholder.svg'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Page Builder</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Create New Template
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="global-templates">Global Templates</TabsTrigger>
          <TabsTrigger value="global-style">Global Style</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Get Started</h3>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  {/* Template Preview */}
                  <div className="aspect-[4/3] bg-gray-100 border-b relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <LayoutGrid className="w-8 h-8 text-gray-500" />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">LOGO</p>
                        <p className="text-xs text-gray-400 mt-2">BANNER TO BE UPLOADED</p>
                      </div>
                    </div>
                    
                    {/* Category circles */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 mb-3">{template.name}</h4>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="global-templates" className="space-y-6">
          <div className="text-center py-16">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Global Templates</h3>
            <p className="text-gray-500">No data</p>
            <p className="text-sm text-gray-400">Your global templates will appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="global-style" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Style Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Font Settings */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Font Family *
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Montserrat bold</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Background color
                    </label>
                    <input type="color" className="w-full h-10 border border-gray-300 rounded-md" />
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Submit
                  </Button>
                </div>

                {/* Font Preview */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Font Preview</h3>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="space-y-4">
                      <p className="text-lg font-bold">
                        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
                      </p>
                      <p className="text-sm">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                      </p>
                      <p className="text-xs">1 2 3 4 5 6 7 8 9 0</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PageBuilderTemplates;
