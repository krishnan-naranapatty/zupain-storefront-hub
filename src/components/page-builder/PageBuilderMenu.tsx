
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash, Search } from 'lucide-react';
import MenuForm from '@/components/page-builder/MenuForm';
import CollectionForm from '@/components/page-builder/CollectionForm';

const PageBuilderMenu: React.FC = () => {
  const [showMenuForm, setShowMenuForm] = useState(false);
  const [showCollectionForm, setShowCollectionForm] = useState(false);
  const [editingMenu, setEditingMenu] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('collections');

  const menuItems = [
    { id: 1, name: 'Shop By Category', status: true },
    { id: 2, name: 'About Us', status: true },
    { id: 3, name: 'Blog', status: true }
  ];

  const collections = [
    // Empty array to show "No data" state
  ];

  const handleAddMenu = () => {
    setEditingMenu(null);
    setShowMenuForm(true);
  };

  const handleEditMenu = (menu: any) => {
    setEditingMenu(menu);
    setShowMenuForm(true);
  };

  const handleCreateCollection = () => {
    setShowCollectionForm(true);
  };

  const handleCollectionSave = () => {
    setShowCollectionForm(false);
    console.log('Collection saved');
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
          {/* Collections Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Collections</h3>
            <Button 
              onClick={handleCreateCollection}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Collection
            </Button>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search" className="pl-10" />
            </div>
          </div>

          {/* Collections Table */}
          <Card>
            <CardContent className="p-0">
              {collections.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="text-4xl mb-4">📁</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No data</h3>
                  <p className="text-gray-500">Your collections will appear here</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Collection Image</TableHead>
                      <TableHead>Collection</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {collections.map((collection: any) => (
                      <TableRow key={collection.id}>
                        <TableCell>
                          <div className="w-12 h-12 bg-gray-200 rounded border flex items-center justify-center">
                            <span className="text-xs text-gray-500">Image</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{collection.name}</TableCell>
                        <TableCell>
                          <Switch checked={collection.status} />
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="menu" className="space-y-6">
          {/* Search - More refined design */}
          <div className="flex items-center justify-end">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search menu items..." 
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Menu Table */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-100">
                    <TableHead className="font-semibold text-gray-700 py-4">Menu Name</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4">Status</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {menuItems.map((item) => (
                    <TableRow key={item.id} className="border-b border-gray-50 hover:bg-gray-25 transition-colors">
                      <TableCell className="font-medium text-gray-900 py-4">{item.name}</TableCell>
                      <TableCell className="py-4">
                        <Switch checked={item.status} />
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditMenu(item)}
                            className="hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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

      {/* Collection Form */}
      <CollectionForm
        isOpen={showCollectionForm}
        onClose={() => setShowCollectionForm(false)}
        onSave={handleCollectionSave}
      />
    </div>
  );
};

export default PageBuilderMenu;
