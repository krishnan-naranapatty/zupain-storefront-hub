
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Plus } from 'lucide-react';

const WhatsAppCompose: React.FC = () => {
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Whatsapp Bulk Message</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="whatsapp-number" className="text-sm font-medium text-gray-700">
                Select whatsapp number:
              </Label>
              <Select value={selectedNumber} onValueChange={setSelectedNumber}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose whatsapp number" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {whatsappNumbers.map((number) => (
                    <SelectItem key={number} value={number} className="hover:bg-gray-50">
                      {number}
                    </SelectItem>
                  ))}
                  <div className="p-2 border-t border-gray-200">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add whatsapp number"
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
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Column - Image Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Media</Label>
            <Card className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-2">Drag & drop files or Browse</p>
                <p className="text-xs text-gray-500">300 x 300</p>
                <p className="text-xs text-gray-500">Image aspect ratio for better fit</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppCompose;
