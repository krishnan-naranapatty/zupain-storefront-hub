
import React, { useState } from 'react';
import { Settings, Palette, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSettings = () => {
  const { currentPalette, changePalette, availablePalettes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="space-x-2">
          <Palette className="w-4 h-4" />
          <span>Theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Color Themes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {availablePalettes.map((palette) => (
              <div
                key={palette.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                  currentPalette.id === palette.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => {
                  changePalette(palette.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{palette.name}</h4>
                    <div className="flex space-x-1 mt-2">
                      <div className={`w-4 h-4 rounded-full ${palette.primary}`}></div>
                      <div className={`w-4 h-4 rounded-full ${palette.accent}`}></div>
                      <div className={`w-4 h-4 rounded-full ${palette.sidebar}`}></div>
                    </div>
                  </div>
                  {currentPalette.id === palette.id && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeSettings;
