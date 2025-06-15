
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PageBuilderGlobalStyle: React.FC = () => {
  const [fontFamily, setFontFamily] = useState('montserrat-bold');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Global Style</h2>
      
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Settings */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="font-family" className="text-sm font-medium text-gray-700">
                  Font Family *
                </Label>
                <Select value={fontFamily} onValueChange={setFontFamily}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select font family" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="montserrat-bold">Montserrat bold</SelectItem>
                    <SelectItem value="roboto">Roboto</SelectItem>
                    <SelectItem value="open-sans">Open Sans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="background-color" className="text-sm font-medium text-gray-700">
                  Background color
                </Label>
                <div className="flex space-x-2">
                  <Input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    type="text"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Submit
              </Button>
            </div>

            {/* Preview */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Font Preview</h3>
              <div className="p-6 bg-gray-50 rounded-lg border" style={{ backgroundColor: backgroundColor }}>
                <div className="space-y-4">
                  <h1 className="text-xl font-bold text-gray-900">
                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR
                    INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
                  </h1>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.sem tristique lorem convallis euismod feuglat vehicula convallis!
                  </p>
                  <div className="text-lg font-medium text-gray-800">
                    1 2 3 4 5 6 7 8 9 0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageBuilderGlobalStyle;
