import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Trash2, Plus, Globe, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const FooterManagement = () => {
  const { currentPalette } = useTheme();
  
  // Footer Management state
  const [footerDescription, setFooterDescription] = useState('');
  const [socialMediaEnabled, setSocialMediaEnabled] = useState(true);
  const [socialLinks, setSocialLinks] = useState({
    instagram: { enabled: true, url: 'https://www.instagram.com/lokhal/news-centre-xNiYSL4vqJ9yWJJFGhRXPXfVqJw' },
    facebook: { enabled: true, url: 'https://www.facebook.com/lokhal/NEWS' },
    youtube: { enabled: true, url: 'https://www.youtube.com/lokhal/news-centro' },
    linkedin: { enabled: true, url: '' }
  });

  const [footerColumns, setFooterColumns] = useState([
    {
      id: 1,
      title: '',
      links: [
        { id: 1, enabled: true, type: 'pages', value: '' },
        { id: 2, enabled: true, type: 'pages', value: '' },
        { id: 3, enabled: true, type: 'url', value: '' },
        { id: 4, enabled: true, type: 'url', value: '' }
      ]
    },
    {
      id: 2,
      title: '',
      links: [
        { id: 1, enabled: true, type: 'pages', value: '' },
        { id: 2, enabled: true, type: 'pages', value: '' },
        { id: 3, enabled: true, type: 'url', value: '' },
        { id: 4, enabled: true, type: 'url', value: '' }
      ]
    },
    {
      id: 3,
      title: '',
      links: [
        { id: 1, enabled: true, type: 'pages', value: '' },
        { id: 2, enabled: true, type: 'pages', value: '' },
        { id: 3, enabled: true, type: 'url', value: '' },
        { id: 4, enabled: true, type: 'url', value: '' }
      ]
    }
  ]);

  // Mock pages data for selection
  const pages = [
    { id: '1', name: 'Help', path: 'help' },
    { id: '2', name: 'About Us', path: 'about-us' },
    { id: '3', name: 'Legals', path: 'legals' },
    { id: '4', name: 'Terms & Conditions', path: 'terms-conditions' },
    { id: '5', name: 'Privacy Policy', path: 'privacy-policy' },
    { id: '6', name: 'Contact us', path: 'contact-us' }
  ];

  const updateSocialLink = (platform: string, field: string, value: string | boolean) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        [field]: value
      }
    }));
  };

  const updateColumnTitle = (columnId: number, title: string) => {
    setFooterColumns(prev => prev.map(col => 
      col.id === columnId ? { ...col, title } : col
    ));
  };

  const updateColumnLink = (columnId: number, linkId: number, field: string, value: string | boolean) => {
    setFooterColumns(prev => prev.map(col => 
      col.id === columnId 
        ? {
            ...col,
            links: col.links.map(link =>
              link.id === linkId ? { ...link, [field]: value } : link
            )
          }
        : col
    ));
  };

  const addFooterLink = (columnId: number) => {
    setFooterColumns(prev => prev.map(col =>
      col.id === columnId
        ? {
            ...col,
            links: [
              ...col.links,
              {
                id: Math.max(...col.links.map(l => l.id)) + 1,
                enabled: true,
                type: 'pages',
                value: ''
              }
            ]
          }
        : col
    ));
  };

  const removeFooterLink = (columnId: number, linkId: number) => {
    setFooterColumns(prev => prev.map(col =>
      col.id === columnId
        ? {
            ...col,
            links: col.links.filter(link => link.id !== linkId)
          }
        : col
    ));
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return Instagram;
      case 'facebook': return Facebook;
      case 'youtube': return Youtube;
      case 'linkedin': return Linkedin;
      default: return Globe;
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <Globe className="w-5 h-5 text-gray-600" />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Footer Management</h2>
          <p className="text-xs text-gray-500">Configure your website footer sections and links</p>
        </div>
      </div>

      {/* Logo Description - Compact */}
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Logo Description</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Textarea
            placeholder="Enter footer description..."
            value={footerDescription}
            onChange={(e) => setFooterDescription(e.target.value)}
            className="min-h-[60px] text-sm"
          />
        </CardContent>
      </Card>

      {/* Social Media Links - Redesigned */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Social Media Links</CardTitle>
            <Switch 
              checked={socialMediaEnabled}
              onCheckedChange={setSocialMediaEnabled}
            />
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-4">
          {Object.entries(socialLinks).map(([platform, data]) => {
            const Icon = getSocialIcon(platform);
            return (
              <div key={platform} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className={`p-2 rounded-md ${
                    platform === 'instagram' ? 'bg-pink-100' :
                    platform === 'facebook' ? 'bg-blue-100' :
                    platform === 'youtube' ? 'bg-red-100' :
                    platform === 'linkedin' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      platform === 'instagram' ? 'text-pink-600' :
                      platform === 'facebook' ? 'text-blue-600' :
                      platform === 'youtube' ? 'text-red-600' :
                      platform === 'linkedin' ? 'text-blue-700' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Input
                      value={data.url}
                      onChange={(e) => updateSocialLink(platform, 'url', e.target.value)}
                      placeholder={`Enter ${platform} URL`}
                      className="h-9 text-sm bg-white border-gray-200"
                    />
                  </div>
                </div>
                <Switch
                  checked={data.enabled}
                  onCheckedChange={(enabled) => updateSocialLink(platform, 'enabled', enabled)}
                />
              </div>
            );
          })}
          <Button size="sm" className="w-full bg-slate-800 hover:bg-slate-900 text-white h-9 text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Add New Social Media Link
          </Button>
        </CardContent>
      </Card>

      {/* Footer Columns - Compact Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {footerColumns.map((column, columnIndex) => (
          <Card key={column.id} className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Column {columnIndex + 1}</CardTitle>
                <span className="text-xs text-gray-500">
                  {column.links.filter(l => l.enabled).length} active
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              {/* Column Title */}
              <div>
                <Label className="text-xs text-gray-600">Column Title</Label>
                <Input
                  value={column.title}
                  onChange={(e) => updateColumnTitle(column.id, e.target.value)}
                  placeholder="Enter column title"
                  className="mt-1 h-8 text-xs"
                />
              </div>

              {/* Footer Links */}
              <div className="space-y-2">
                <Label className="text-xs text-gray-600">Footer Links</Label>
                {column.links.map((link, linkIndex) => (
                  <div key={link.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">Link {linkIndex + 1}</span>
                      <div className="flex items-center space-x-1">
                        <Switch
                          checked={link.enabled}
                          onCheckedChange={(enabled) => updateColumnLink(column.id, link.id, 'enabled', enabled)}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFooterLink(column.id, link.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50 h-6 w-6 p-0"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-1">
                      <Select
                        value={link.type}
                        onValueChange={(value) => updateColumnLink(column.id, link.id, 'type', value)}
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pages">Pages</SelectItem>
                          <SelectItem value="url">URL</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      {link.type === 'pages' ? (
                        <Select
                          value={link.value}
                          onValueChange={(value) => updateColumnLink(column.id, link.id, 'value', value)}
                        >
                          <SelectTrigger className="h-8 text-xs">
                            <SelectValue placeholder="Select page" />
                          </SelectTrigger>
                          <SelectContent>
                            {pages.map(page => (
                              <SelectItem key={page.id} value={page.path}>
                                {page.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          value={link.value}
                          onChange={(e) => updateColumnLink(column.id, link.id, 'value', e.target.value)}
                          placeholder="Enter URL"
                          className="h-8 text-xs"
                        />
                      )}
                    </div>
                  </div>
                ))}
                
                <Button
                  onClick={() => addFooterLink(column.id)}
                  variant="outline"
                  size="sm"
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white border-slate-800 h-7 text-xs"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Add Another Label
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-end space-x-2 pt-2">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm" className={`${currentPalette.primary} text-white px-6`}>
          Save Footer Settings
        </Button>
      </div>
    </div>
  );
};

export default FooterManagement;
