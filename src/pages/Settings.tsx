
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
    <div className="group border-2 border-dashed border-gray-200 hover:border-blue-300 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-purple-50/50 cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Upload className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
        </div>
        <div className="text-sm font-semibold text-gray-700 mb-3 group-hover:text-gray-900 transition-colors">
          <span>Drag & drop files or Browse</span>
        </div>
        <div className="text-xs text-gray-500 mb-2 font-medium">{dimensions}</div>
        <div className="text-xs text-gray-400 mb-3">image aspect ratio for better fit</div>
        <div className="text-xs text-red-500 bg-red-50 px-3 py-1 rounded-full inline-block">
          Max file size: image {maxSize}
        </div>
      </div>
    </div>
  );

  const ProfileContent = () => (
    <div className="space-y-8">
      {/* Brand Information Section */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white via-white to-blue-50/30 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          <CardTitle className="flex items-center space-x-3 text-xl font-bold relative z-10">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <User className="w-6 h-6" />
            </div>
            <span>Brand Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {/* Image Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Brand Logo</span>
              </Label>
              <ImageUploadBox title="Brand Logo" dimensions="1400 x 700px" maxSize="2MB" />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                <Globe className="w-4 h-4 text-purple-600" />
                <span>Admin logo</span>
              </Label>
              <ImageUploadBox title="Admin Logo" dimensions="1400 x 700px" maxSize="2MB" />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-gray-700">Login Image</Label>
              <ImageUploadBox title="Login Image" dimensions="1920 x 1080px" maxSize="2MB" />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-gray-700">OTP Image</Label>
              <div className="border-2 border-green-200 rounded-2xl p-6 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/lovable-uploads/4ff3d28b-2200-4f99-9ed2-66de37a21137.png" 
                  alt="OTP illustration" 
                  className="w-full h-32 object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-gray-700">Admin login Image</Label>
              <ImageUploadBox title="Admin Login Image" dimensions="1920 x 1080px" maxSize="2MB" />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-gray-700">Favicon Image</Label>
              <ImageUploadBox title="Favicon Image" dimensions="34 x 34px" maxSize="2MB" />
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50/50">
              <CardContent className="p-6 space-y-5">
                <h3 className="font-semibold text-gray-800 text-lg mb-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Business Details</span>
                </h3>
                <div>
                  <Label htmlFor="owner-name" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Owner Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="owner-name" 
                    defaultValue="Lokhal" 
                    className="border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="krishnan@lokhal.com" 
                    className="border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" 
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Textarea 
                    id="address" 
                    className="border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80" 
                    rows={3} 
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80">
                      <SelectValue placeholder="India" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-gray-200 shadow-xl bg-white">
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm font-semibold text-gray-700 mb-2 block">City</Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80">
                      <SelectValue placeholder="Please select the city" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-gray-200 shadow-xl bg-white">
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50/50">
              <CardContent className="p-6 space-y-5">
                <h3 className="font-semibold text-gray-800 text-lg mb-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Contact Information</span>
                </h3>
                <div>
                  <Label htmlFor="business-name" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Business Name <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="business-name" 
                    defaultValue="Lokhal" 
                    className="border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-24 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80">
                        <SelectValue placeholder="+91" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-gray-200 shadow-xl bg-white">
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input 
                      placeholder="Mobile Number" 
                      className="flex-1 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80" 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="state" className="text-sm font-semibold text-gray-700 mb-2 block">
                    State <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80">
                      <SelectValue placeholder="Please select the state" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-gray-200 shadow-xl bg-white">
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pincode" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Pincode <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="pincode" 
                    placeholder="Pincode" 
                    className="border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/80" 
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
