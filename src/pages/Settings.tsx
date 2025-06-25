
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Plus, Settings as SettingsIcon } from 'lucide-react';
import ApiUserLoginModal from '@/components/ApiUserLoginModal';

const Settings = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('en');
  const [volume, setVolume] = useState([50]);

  // Integration state
  const [activeRegion, setActiveRegion] = useState('India');
  const [activeIntegrationTab, setActiveIntegrationTab] = useState('payments');
  const [integrations, setIntegrations] = useState({
    razorpay: { enabled: false, connected: false },
    cod: { enabled: true, connected: true },
    phonepe: { enabled: false, connected: false },
    paytm: { enabled: false, connected: false },
    shiprocket: { enabled: false, connected: false },
    delhivery: { enabled: false, connected: false },
    bluedart: { enabled: false, connected: false },
  });

  // Modal state
  const [isApiLoginModalOpen, setIsApiLoginModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
  };

  const handleIntegrationToggle = (key: string) => {
    setIntegrations(prev => ({
      ...prev,
      [key]: { ...prev[key], enabled: !prev[key].enabled }
    }));
  };

  const handleConnectIntegration = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsApiLoginModalOpen(true);
  };

  const handleApiConnection = async (credentials: { email: string; password: string }) => {
    console.log('Connecting to', selectedService, 'with credentials:', credentials);
    // Here you would typically make an API call to connect the service
    setIntegrations(prev => ({
      ...prev,
      [selectedService]: { ...prev[selectedService], connected: true }
    }));
  };

  const paymentIntegrations = [
    { key: 'razorpay', name: 'Razorpay', description: 'Payment gateway for India' },
    { key: 'cod', name: 'Cash on Delivery', description: 'Traditional payment method' },
    { key: 'phonepe', name: 'PhonePe', description: 'UPI payment method' },
    { key: 'paytm', name: 'Paytm', description: 'Digital wallet and payment gateway' },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preferences Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Notifications</Label>
                    <Switch
                      id="notifications"
                      checked={notificationsEnabled}
                      onCheckedChange={handleNotificationsToggle}
                    />
                  </div>
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select value={language} onValueChange={handleLanguageChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="volume">Volume</Label>
                    <Slider
                      id="volume"
                      defaultValue={volume}
                      max={100}
                      step={1}
                      onValueChange={handleVolumeChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integrations Section */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Integrations</h2>

          {/* Region Tabs */}
          <div className="flex space-x-4">
            {['India', 'USA', 'Europe'].map(region => (
              <Button
                key={region}
                variant={activeRegion === region ? 'default' : 'outline'}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </Button>
            ))}
          </div>

          {/* Integration Tabs */}
          <div className="flex space-x-4">
            {['payments', 'shipment', 'analytics'].map(tab => (
              <Button
                key={tab}
                variant={activeIntegrationTab === tab ? 'default' : 'outline'}
                onClick={() => setActiveIntegrationTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>

          {/* Payment Content */}
          {activeIntegrationTab === 'payments' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Payment Providers</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Provider
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                {paymentIntegrations.map((provider) => (
                  <Card key={provider.key}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{provider.name}</h4>
                            <p className="text-sm text-gray-500">{provider.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Switch
                            checked={integrations[provider.key]?.enabled || false}
                            onCheckedChange={() => handleIntegrationToggle(provider.key)}
                          />
                          <Button variant="ghost" size="sm">
                            <SettingsIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

        {/* Shipment Content */}
        {activeIntegrationTab === 'shipment' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Shipping Providers</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Provider
                </Button>
              </div>
            </div>
            
            <div className="grid gap-4">
              {[
                { key: 'shiprocket', name: 'Shiprocket', description: 'Multi-carrier shipping platform' },
                { key: 'delhivery', name: 'Delhivery', description: 'End-to-end logistics solutions' },
                { key: 'bluedart', name: 'Blue Dart', description: 'Express air and integrated transportation' },
              ].map((provider) => (
                <Card key={provider.key}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">{provider.name}</h4>
                          <p className="text-sm text-gray-500">{provider.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Switch
                          checked={integrations[provider.key]?.enabled || false}
                          onCheckedChange={() => handleIntegrationToggle(provider.key)}
                        />
                        {integrations[provider.key]?.enabled && (
                          <Button
                            variant={integrations[provider.key]?.connected ? "outline" : "default"}
                            size="sm"
                            onClick={() => handleConnectIntegration(provider.key)}
                          >
                            {integrations[provider.key]?.connected ? "Connected" : "Connect"}
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <SettingsIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

          {/* Analytics Content */}
          {activeIntegrationTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Analytics Providers</h3>
              </div>
              <p>Coming Soon!</p>
            </div>
          )}

          <Button>Save Changes</Button>
        </div>
      </div>

      <ApiUserLoginModal
        isOpen={isApiLoginModalOpen}
        onClose={() => setIsApiLoginModalOpen(false)}
        serviceName={selectedService}
        onConnect={handleApiConnection}
      />
    </div>
  );
};

export default Settings;
