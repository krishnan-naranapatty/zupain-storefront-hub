
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash, Search, FolderOpen, Menu, Palette } from 'lucide-react';
import MenuForm from '@/components/page-builder/MenuForm';
import CollectionForm from '@/components/page-builder/CollectionForm';

const PageBuilderMenu: React.FC = () => {
  const [showMenuForm, setShowMenuForm] = useState(false);
  const [showCollectionForm, setShowCollectionForm] = useState(false);
  const [editingMenu, setEditingMenu] = useState<any>(null);
  const [activeSection, setActiveSection] = useState('collections');

  const menuItems = [
    { id: 1, name: 'Shop By Category', status: true },
    { id: 2, name: 'About Us', status: true },
    { id: 3, name: 'Blog', status: true }
  ];

  const collections = [
    // Empty array to show "No data" state
  ];

  const navigationTabs = [
    { 
      id: 'collections', 
      label: 'Collections', 
      icon: FolderOpen
    },
    { 
      id: 'menu', 
      label: 'Menu Items', 
      icon: Menu
    },
    { 
      id: 'menu-theme', 
      label: 'Menu Theme', 
      icon: Palette
    }
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

  const renderCollectionsContent = () => (
    <div className="space-y-6">
      {/* Collections Header */}          
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Collections</h3>
          <p className="text-sm text-gray-500 mt-1">Group products together by theme or purpose</p>
        </div>
        <Button 
          onClick={handleCreateCollection}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Collection
        </Button>
      </div>

      {/* Collection Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm leading-relaxed">
          <strong>What is a Collection?</strong> Collections allow you to group products together based on a specific theme or purpose, regardless of their individual categories. For example, while products like pants, shirts, and t-shirts each belong to different categories, you can create a "Casual Men's Clothing" collection that brings them together for shoppers looking for that particular style.
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center justify-end">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search collections..." 
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Collections Table */}
      <Card className="border border-gray-200 shadow-sm">
        <CardContent className="p-0">
          {collections.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-5xl mb-6">📁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No data</h3>
              <p className="text-gray-600">Your collections will appear here</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-100">
                  <TableHead className="font-semibold text-gray-700 py-4">Collection Image</TableHead>
                  <TableHead className="font-semibold text-gray-700 py-4">Collection</TableHead>
                  <TableHead className="font-semibold text-gray-700 py-4">Status</TableHead>
                  <TableHead className="font-semibold text-gray-700 py-4">Action</TableHead>
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
    </div>
  );

  const renderMenuContent = () => (
    <div className="space-y-6">
      {/* Menu Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Menu Items</h3>
          <p className="text-sm text-gray-500 mt-1">Configure your navigation menu</p>
        </div>
      </div>

      {/* Search */}
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
    </div>
  );

  const renderMenuThemeContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Menu Theme</h3>
          <p className="text-sm text-gray-500 mt-1">Customize your menu appearance</p>
        </div>
      </div>
      
      <div className="text-center py-16">
        <div className="text-4xl mb-4">🎨</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Theme Customization</h3>
        <p className="text-gray-500">Design tools for menu styling will appear here</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Menu Builder</h2>
        <Button 
          onClick={handleAddMenu}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Menu
        </Button>
      </div>

      {/* Navigation Tabs - Updated to match WhatsApp style */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {navigationTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeSection === 'collections' && renderCollectionsContent()}
        {activeSection === 'menu' && renderMenuContent()}
        {activeSection === 'menu-theme' && renderMenuThemeContent()}
      </div>

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
