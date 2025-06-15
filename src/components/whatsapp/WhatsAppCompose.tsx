
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Plus, Users, MessageSquare, Send, Download } from 'lucide-react';

const WhatsAppCompose: React.FC = () => {
  const [campaignName, setCampaignName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [userType, setUserType] = useState('all');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [whatsappNumbers, setWhatsappNumbers] = useState([
    '8939347493',
    '9328823678'
  ]);
  const [newNumber, setNewNumber] = useState('');

  const handleAddNumber = () => {
    if (newNumber.trim() && !whatsappNumbers.includes(newNumber.trim())) {
      setWhatsappNumbers([...whatsappNumbers, newNumber.trim()]);
      setNewNumber('');
    }
  };

  const handleSendMessage = () => {
    console.log('Sending message:', {
      campaignName,
      message,
      selectedAccount,
      userType,
      selectedNumber
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Create WhatsApp Campaign</h2>
        <Button 
          onClick={handleSendMessage} 
          className="bg-green-600 hover:bg-green-700 text-white px-6"
          disabled={!campaignName || !message || !selectedAccount}
        >
          <Send className="w-4 h-4 mr-2" />
          Send Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Step 1: Campaign Details */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
              Campaign Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="campaign-name" className="text-sm font-medium text-gray-700">
                Campaign Name *
              </Label>
              <Input
                id="campaign-name"
                placeholder="Enter campaign name"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                WhatsApp Message *
              </Label>
              <Textarea
                id="message"
                placeholder="Type your WhatsApp message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-[120px] resize-y"
              />
              <p className="text-xs text-gray-500">{message.length} characters</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Account Selection */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-600" />
              Send From
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                WhatsApp Number *
              </Label>
              <Select value={selectedNumber} onValueChange={setSelectedNumber}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select number" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg z-50">
                  {whatsappNumbers.map((number) => (
                    <SelectItem key={number} value={number} className="hover:bg-gray-50">
                      {number}
                    </SelectItem>
                  ))}
                  <div className="p-2 border-t border-gray-200">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add number"
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                        className="flex-1 text-sm"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddNumber();
                          }
                        }}
                      />
                      <Button 
                        onClick={handleAddNumber}
                        size="sm"
                        className="bg-slate-700 hover:bg-slate-800 text-white px-3"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 3: Audience Selection */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center">
            <Users className="w-5 h-5 mr-2 text-purple-600" />
            Select Audience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Account</Label>
                <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose account" />
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

              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">User Type</Label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="all"
                      checked={userType === 'all'}
                      onChange={(e) => setUserType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">All Users</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="filtered"
                      checked={userType === 'filtered'}
                      onChange={(e) => setUserType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">Filter Users</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-medium text-gray-700">Upload Users</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload user list</p>
                <Button variant="outline" size="sm" className="mb-2">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
                <div className="flex justify-center">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4 mr-1" />
                    Download Template
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Summary */}
      {(campaignName || message || selectedAccount) && (
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-800">Campaign Summary</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            {campaignName && <p><span className="font-medium">Campaign:</span> {campaignName}</p>}
            {selectedAccount && <p><span className="font-medium">Account:</span> {selectedAccount}</p>}
            {selectedNumber && <p><span className="font-medium">From:</span> {selectedNumber}</p>}
            {message && <p><span className="font-medium">Message:</span> {message.substring(0, 100)}{message.length > 100 ? '...' : ''}</p>}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WhatsAppCompose;
