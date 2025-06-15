
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Trash } from 'lucide-react';

interface MenuFormProps {
  menu?: any;
  onClose: () => void;
  onSave: () => void;
}

const MenuForm: React.FC<MenuFormProps> = ({ menu, onClose, onSave }) => {
  const [menuName, setMenuName] = useState(menu?.name || '');
  const [selectedType, setSelectedType] = useState('collection');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSave = () => {
    console.log('Saving menu:', { menuName, selectedType, selectedItems });
    onSave();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onClose}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">
          {menu ? 'Edit Menu' : 'Add Menu'}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Menu Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Menu Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Menu Name */}
            <div className="space-y-2">
              <Label htmlFor="menu-name" className="text-sm font-medium text-gray-700">
                Menu Name *
              </Label>
              <Input
                id="menu-name"
                placeholder="Enter the menu title..."
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
              />
            </div>

            {/* Choose Collection/Category/Page */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-gray-700">
                Choose Collection / Category / Page *
              </Label>
              
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="menuType"
                    value="collection"
                    checked={selectedType === 'collection'}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Collection</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="menuType"
                    value="category"
                    checked={selectedType === 'category'}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Category</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="menuType"
                    value="page"
                    checked={selectedType === 'page'}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Page</span>
                </label>
              </div>
            </div>

            {/* Selected Menu Items */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-gray-700">
                Selected Menu Items
              </Label>
              
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  {selectedItems.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-2">📄</div>
                      <p className="text-sm text-gray-500">No data</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {selectedItems.map((item: any, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.type}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Trash className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Table Headers */}
              {selectedItems.length > 0 && (
                <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-700 px-2">
                  <span>Menu Items</span>
                  <span>Menu Type</span>
                  <span>Actions</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 pt-4">
              <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white">
                {menu ? 'Update' : 'Save'}
              </Button>
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview/Additional Options */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Menu Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Preview how your menu will appear on the website
              </p>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <p className="text-gray-500">Menu preview will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MenuForm;
