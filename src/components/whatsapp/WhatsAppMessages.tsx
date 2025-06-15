
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhatsAppMessages: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Message History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">WhatsApp message history and conversations will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsAppMessages;
