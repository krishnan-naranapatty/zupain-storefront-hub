
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash, Search } from 'lucide-react';
import MenuForm from '@/components/page-builder/MenuForm';

const PageBuilderMenu: React.FC = () => {
  const [showMenuForm, setShowMenuForm] = useState(false);
  const [editingMenu, setEditingMenu] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('collections');

  const menuItems = [
    { id: 1, name: 'Shop By Category', status: true },
    { id: 2, name: 'About Us', status: true },
    { id: 3, name: 'Blog', status: true }
  ];

  const handleAddMenu = () => {
    setEditingMenu(null);
    setShowMenuForm(true);
  };

  const handleEditMenu = (menu: any) => {
    setEditingMenu(menu);
    setShowMenuForm(true);
  };

  if (showMenuForm) {
    return (
      <MenuForm
        menu={editingMenu}
        onClose={() => setShowMenuForm(false)}
        onSave={() => setShowMenuForm(false)}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
        <Button 
          onClick={handleAddMenu}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Menu
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="menu-theme">Menu Theme</TabsTrigger>
        </TabsList>

        <TabsContent value="collections" className="space-y-6">
          <div className="text-center py-16">
            <div className="text-4xl mb-4">📁</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Collections</h3>
            <p className="text-gray-500">No collections found</p>
          </div>
        </TabsContent>

        <TabsContent value="menu" className="space-y-6">
          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search" className="pl-10" />
            </div>
          </div>

          {/* Menu Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-gray-900">Menu Name</th>
                      <th className="text-left p-4 font-medium text-gray-900">Status</th>
                      <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 text-gray-900">{item.name}</td>
                        <td className="p-4">
                          <Switch checked={item.status} />
                        </td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditMenu(item)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash className="w-4 h-4 text-red-500" />
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
        </TabsContent>

        <TabsContent value="menu-theme" className="space-y-6">
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Menu Theme</h3>
            <p className="text-gray-500">Customize your menu appearance</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PageBuilderMenu;
