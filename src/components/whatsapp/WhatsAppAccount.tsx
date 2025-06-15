
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhatsAppAccount: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">WhatsApp account configuration and settings will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsAppAccount;
