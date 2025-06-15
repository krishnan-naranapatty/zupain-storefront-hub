
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Phone, MessageSquare } from 'lucide-react';

const WhatsAppAccount: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Account Configuration</h2>
          <p className="text-sm text-gray-600 mt-1">Manage your WhatsApp account settings and connections</p>
        </div>
        <Button className="px-4 py-2">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              Connected Numbers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">+91 8939347493</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">+91 9328823678</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
              Account Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Business Verification</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Verified</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">API Access</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Enabled</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Message Limit</span>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">1000/day</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Configuration Options */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Additional WhatsApp account configuration and advanced settings will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsAppAccount;
