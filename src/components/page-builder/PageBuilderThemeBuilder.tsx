
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Edit, Trash } from 'lucide-react';
import ThemeEditor from '@/components/page-builder/ThemeEditor';

const PageBuilderThemeBuilder: React.FC = () => {
  const [showThemeEditor, setShowThemeEditor] = useState(false);
  const [editingTheme, setEditingTheme] = useState<any>(null);

  const themes = [
    { id: 1, name: 'Theme 1', isActive: true, isDefault: true },
    { id: 2, name: 'Theme 2', isActive: false, isDefault: true },
    { id: 3, name: 'Theme 3', isActive: false, isDefault: true },
    { id: 4, name: 'Theme 4', isActive: false, isDefault: true }
  ];

  const handleEditTheme = (theme: any) => {
    setEditingTheme(theme);
    setShowThemeEditor(true);
  };

  if (showThemeEditor) {
    return (
      <ThemeEditor
        theme={editingTheme}
        onClose={() => setShowThemeEditor(false)}
        onSave={() => setShowThemeEditor(false)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Theme Builder</h2>

      {/* Page Selection */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">📄</span>
            </div>
            <div>
              <h3 className="font-medium text-blue-900">Pages</h3>
              <p className="text-sm text-blue-700">Product Detail Page</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Themes Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Template Name</th>
                  <th className="text-left p-4 font-medium text-gray-900">Is Active</th>
                  <th className="text-left p-4 font-medium text-gray-900">Is Default</th>
                  <th className="text-left p-4 font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {themes.map((theme) => (
                  <tr key={theme.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 text-gray-900">{theme.name}</td>
                    <td className="p-4">
                      <Switch checked={theme.isActive} />
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        Yes
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditTheme(theme)}
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

      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" disabled>
            &lt;
          </Button>
          <Button variant="ghost" size="sm" className="bg-blue-600 text-white">
            1
          </Button>
          <Button variant="ghost" size="sm" disabled>
            &gt;
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default PageBuilderThemeBuilder;
