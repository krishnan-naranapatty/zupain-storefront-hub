import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCw } from 'lucide-react';

const WhatsAppMessages: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState('');

  // Sample data for the table
  const messageData = [
    // Empty data to show "No data" state
  ];

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Message Campaigns</h2>
          <p className="text-sm text-gray-600 mt-1">View and manage your WhatsApp message campaigns</p>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="px-4 py-2"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>

          <div className="w-80">
            <Select value={selectedAccount} onValueChange={setSelectedAccount}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a account" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="8939347493" className="hover:bg-gray-50">
                  8939347493
                </SelectItem>
                <SelectItem value="9328823678" className="hover:bg-gray-50">
                  9328823678
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>Message Campaigns</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Job ID</th>
                  <th className="text-left p-4 font-medium text-gray-900">Campaign Name</th>
                  <th className="text-left p-4 font-medium text-gray-900">Status</th>
                  <th className="text-left p-4 font-medium text-gray-900">Created At</th>
                </tr>
              </thead>
              <tbody>
                {messageData.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-16 text-gray-500">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="text-4xl">📊</div>
                        <p className="text-lg">No data</p>
                        <p className="text-sm">Your message campaigns will appear here</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  messageData.map((message, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-gray-900">{message.jobId}</td>
                      <td className="p-4 text-gray-900">{message.campaignName}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          message.status === 'completed' 
                            ? 'bg-green-100 text-green-800'
                            : message.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {message.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">{message.createdAt}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsAppMessages;
