
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, User, Globe, Building2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const { currentPalette } = useTheme();

  const tabs = [
    'Profile',
    'Delivery Charges',
    'Delivery Slots',
    'Pages',
    'Store Feature',
    'Footer Management',
    'Integration'
  ];

  const ImageUploadBox = ({ title, dimensions, maxSize }: { title: string; dimensions: string; maxSize: string }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <Upload className="h-8 w-8 mx-auto mb-4 text-gray-400" />
      <div className="text-sm text-gray-600 mb-2">Drag & drop files or Browse</div>
      <div className="text-xs text-gray-500 mb-1">{dimensions}</div>
      <div className="text-xs text-gray-400 mb-2">image aspect ratio for better fit</div>
      <div className="text-xs text-red-500">Max file size: image {maxSize}</div>
    </div>
  );

  const ProfileContent = () => (
    <div className="space-y-6">
      {/* Brand Information Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Brand Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Image Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Brand Logo</Label>
              <ImageUploadBox title="Brand Logo" dimensions="1400 x 700px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Admin logo</Label>
              <ImageUploadBox title="Admin Logo" dimensions="1400 x 700px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Login Image</Label>
              <ImageUploadBox title="Login Image" dimensions="1920 x 1080px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">OTP Image</Label>
              <div className="border border-gray-300 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/4ff3d28b-2200-4f99-9ed2-66de37a21137.png" 
                  alt="OTP illustration" 
                  className="w-full h-24 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Admin login Image</Label>
              <ImageUploadBox title="Admin Login Image" dimensions="1920 x 1080px" maxSize="2MB" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Favicon Image</Label>
              <ImageUploadBox title="Favicon Image" dimensions="34 x 34px" maxSize="2MB" />
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-medium text-gray-900 mb-4">Business Details</h3>
                <div>
                  <Label htmlFor="owner-name" className="text-sm font-medium text-gray-700">
                    Owner Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="owner-name" 
                    defaultValue="Lokhal" 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="krishnan@lokhal.com" 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    id="address" 
                    className="mt-1" 
                    rows={3} 
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="India" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Please select the city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                <div>
                  <Label htmlFor="business-name" className="text-sm font-medium text-gray-700">
                    Business Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="business-name" 
                    defaultValue="Lokhal" 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex space-x-2 mt-1">
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="+91" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input 
                      placeholder="Mobile Number" 
                      className="flex-1" 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                    State <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Please select the state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">
                    Pincode <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="pincode" 
                    placeholder="Pincode" 
                    className="mt-1" 
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const TabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <ProfileContent />;
      case 'Delivery Charges':
        return <div className="text-center py-12 text-gray-500">Delivery Charges settings coming soon...</div>;
      case 'Delivery Slots':
        return <div className="text-center py-12 text-gray-500">Delivery Slots settings coming soon...</div>;
      case 'Pages':
        return <div className="text-center py-12 text-gray-500">Pages settings coming soon...</div>;
      case 'Store Feature':
        return <div className="text-center py-12 text-gray-500">Store Feature settings coming soon...</div>;
      case 'Footer Management':
        return <div className="text-center py-12 text-gray-500">Footer Management settings coming soon...</div>;
      case 'Integration':
        return <div className="text-center py-12 text-gray-500">Integration settings coming soon...</div>;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <Layout>
      <div className={`min-h-screen ${currentPalette.background}`}>
        {/* Header */}
        <div className="border-b bg-white px-3 md:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
              <span className="mr-2">⚙️</span>
              Settings
            </h1>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm" className={currentPalette.primary}>
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b overflow-x-auto">
          <div className="flex space-x-1 px-3 md:px-6 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-3 text-xs md:text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  tab === activeTab
                    ? `border-blue-500 text-blue-600 bg-blue-50`
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-6">
          <TabContent />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
