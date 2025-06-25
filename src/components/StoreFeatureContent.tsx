
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  Globe, 
  Star, 
  Shield, 
  Zap, 
  Settings, 
  Clock,
  TrendingUp,
  Users,
  Package,
  AlertCircle,
  CheckCircle,
  Info
} from 'lucide-react';

const StoreFeatureContent = () => {
  const [activeFeatures, setActiveFeatures] = useState({
    customerReviews: true,
    lowStockAlert: false,
    authorizedDomain: false,
    priceConsistency: true,
    reservationTimeout: true
  });

  const [storeConfig, setStoreConfig] = useState({
    currency: 'INR',
    dateFormat: 'MM/DD/YYYY',
    deliveryCharge: '0',
    codCharge: '0',
    reservationTimeout: '30',
    lowStockThreshold: '5',
    authorizedDomain: '',
    goldPrice: '7000',
    silverPrice: '1000'
  });

  const toggleFeature = (feature: string) => {
    setActiveFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const updateConfig = (key: string, value: string) => {
    setStoreConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const FeatureCard = ({ 
    icon: Icon, 
    title, 
    description, 
    isActive, 
    onToggle, 
    children,
    status = 'ready'
  }: {
    icon: any;
    title: string;
    description: string;
    isActive: boolean;
    onToggle: () => void;
    children?: React.ReactNode;
    status?: 'ready' | 'setup' | 'warning';
  }) => (
    <Card className={`transition-all duration-200 hover:shadow-lg ${
      isActive 
        ? 'border-blue-500 bg-blue-50/30' 
        : 'border-gray-200 hover:border-gray-300'
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {status === 'setup' && (
              <Badge variant="outline" className="text-orange-600 border-orange-200">
                Setup Required
              </Badge>
            )}
            {status === 'warning' && (
              <Badge variant="outline" className="text-red-600 border-red-200">
                Needs Attention
              </Badge>
            )}
            <Switch checked={isActive} onCheckedChange={onToggle} />
          </div>
        </div>
      </CardHeader>
      {isActive && children && (
        <CardContent className="pt-0 border-t bg-gray-50/50">
          {children}
        </CardContent>
      )}
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-blue-800 font-medium">Store Feature Configuration</p>
          <p className="text-xs text-blue-600 mt-1">
            Configure your store features and settings to enhance customer experience
          </p>
        </div>
      </div>

      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">
              {Object.values(activeFeatures).filter(Boolean).length}
            </span>
          </div>
          <p className="text-sm text-gray-500">Active Features</p>
        </Card>
        <Card className="text-center p-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-2xl font-bold text-green-600">95%</span>
          </div>
          <p className="text-sm text-gray-500">Setup Complete</p>
        </Card>
        <Card className="text-center p-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">1.2k</span>
          </div>
          <p className="text-sm text-gray-500">Active Users</p>
        </Card>
        <Card className="text-center p-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Package className="w-5 h-5 text-orange-600" />
            <span className="text-2xl font-bold text-orange-600">156</span>
          </div>
          <p className="text-sm text-gray-500">Products</p>
        </Card>
      </div>

      {/* Basic Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Basic Configuration</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">General Settings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Currency</Label>
                  <Select value={storeConfig.currency} onValueChange={(value) => updateConfig('currency', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INR">INR (Indian Rupee)</SelectItem>
                      <SelectItem value="USD">USD (US Dollar)</SelectItem>
                      <SelectItem value="EUR">EUR (Euro)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium">Date Format</Label>
                  <Select value={storeConfig.dateFormat} onValueChange={(value) => updateConfig('dateFormat', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Payment Settings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Delivery Charge (₹)</Label>
                  <Input 
                    value={storeConfig.deliveryCharge}
                    onChange={(e) => updateConfig('deliveryCharge', e.target.value)}
                    className="mt-1"
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">COD Charge (₹)</Label>
                  <Input 
                    value={storeConfig.codCharge}
                    onChange={(e) => updateConfig('codCharge', e.target.value)}
                    className="mt-1"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Store Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Store Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FeatureCard
            icon={Star}
            title="Customer Reviews"
            description="Allow customers to leave reviews and ratings for products"
            isActive={activeFeatures.customerReviews}
            onToggle={() => toggleFeature('customerReviews')}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <span className="text-sm font-medium">Show review stars on product cards</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <span className="text-sm font-medium">Require purchase to review</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <span className="text-sm font-medium">Moderate reviews before publishing</span>
                <Switch defaultChecked />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={AlertCircle}
            title="Low Stock Alerts"
            description="Get notified when product inventory runs low"
            isActive={activeFeatures.lowStockAlert}
            onToggle={() => toggleFeature('lowStockAlert')}
            status="setup"
          >
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Alert Threshold</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Input 
                    value={storeConfig.lowStockThreshold}
                    onChange={(e) => updateConfig('lowStockThreshold', e.target.value)}
                    className="w-20"
                    placeholder="5"
                  />
                  <span className="text-sm text-gray-500">items remaining</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Email Notifications</span>
                </div>
                <p className="text-xs text-blue-700">
                  You'll receive email alerts when any product drops below the threshold
                </p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Clock}
            title="Product Reservation Timeout"
            description="Automatically release reserved products after specified time"
            isActive={activeFeatures.reservationTimeout}
            onToggle={() => toggleFeature('reservationTimeout')}
          >
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Timeout Duration</Label>
                <div className="flex items-center space-x-2 mt-1">
                  <Input 
                    value={storeConfig.reservationTimeout}
                    onChange={(e) => updateConfig('reservationTimeout', e.target.value)}
                    className="w-20"
                    placeholder="30"
                  />
                  <Select defaultValue="mins">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mins">Minutes</SelectItem>
                      <SelectItem value="hours">Hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Shield}
            title="Authorized Domain Access"
            description="Restrict store access to specific domains for security"
            isActive={activeFeatures.authorizedDomain}
            onToggle={() => toggleFeature('authorizedDomain')}
            status="warning"
          >
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Authorized Domain</Label>
                <Input 
                  value={storeConfig.authorizedDomain}
                  onChange={(e) => updateConfig('authorizedDomain', e.target.value)}
                  className="mt-1"
                  placeholder="@example.com"
                />
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-900">Security Notice</span>
                </div>
                <p className="text-xs text-yellow-700">
                  Only users with email addresses from the specified domain can access your store
                </p>
              </div>
            </div>
          </FeatureCard>
        </CardContent>
      </Card>

      {/* Pricing & Currency */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center space-x-2">
            <DollarSign className="w-5 h-5" />
            <span>Pricing & Currency Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Precious Metals Pricing</h4>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Gold (Per Gram)</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500">₹</span>
                    <Input 
                      value={storeConfig.goldPrice}
                      onChange={(e) => updateConfig('goldPrice', e.target.value)}
                      placeholder="7000"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Silver (Per Gram)</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500">₹</span>
                    <Input 
                      value={storeConfig.silverPrice}
                      onChange={(e) => updateConfig('silverPrice', e.target.value)}
                      placeholder="1000"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Price Calculator Preview</h4>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Gold (10g):</span>
                    <span className="font-medium">₹{(parseInt(storeConfig.goldPrice) * 10).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Silver (50g):</span>
                    <span className="font-medium">₹{(parseInt(storeConfig.silverPrice) * 50).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span>Total:</span>
                      <span>₹{((parseInt(storeConfig.goldPrice) * 10) + (parseInt(storeConfig.silverPrice) * 50)).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Advanced Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Performance Optimization</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Image Compression</Label>
                    <p className="text-sm text-gray-500">Automatically optimize product images</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Lazy Loading</Label>
                    <p className="text-sm text-gray-500">Load images as users scroll</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Cache Headers</Label>
                    <p className="text-sm text-gray-500">Improve page load speeds</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Security Settings</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Require 2FA for admin access</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Session Timeout</Label>
                    <p className="text-sm text-gray-500">Auto logout after inactivity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">SSL Enforcement</Label>
                    <p className="text-sm text-gray-500">Force HTTPS connections</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default StoreFeatureContent;
