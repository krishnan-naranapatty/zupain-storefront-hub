
import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DateRangeSectionProps {
  formData: {
    startDate: Date | undefined;
    endDate: Date | undefined;
  };
  onInputChange: (field: string, value: any) => void;
}

const DateRangeSection: React.FC<DateRangeSectionProps> = ({ formData, onInputChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Label className="text-sm font-medium text-red-500 mb-2 block">* Start date & time</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal h-12 border-2 border-gray-200 rounded-lg hover:bg-gray-50",
                !formData.startDate && "text-gray-500"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.startDate ? format(formData.startDate, "dd/MM/yyyy") : "Select start date & time"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50" align="start">
            <Calendar
              mode="single"
              selected={formData.startDate}
              onSelect={(date) => onInputChange('startDate', date)}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Label className="text-sm font-medium text-red-500 mb-2 block">* End date & time</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal h-12 border-2 border-gray-200 rounded-lg hover:bg-gray-50",
                !formData.endDate && "text-gray-500"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.endDate ? format(formData.endDate, "dd/MM/yyyy") : "Select End date & time"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-50" align="start">
            <Calendar
              mode="single"
              selected={formData.endDate}
              onSelect={(date) => onInputChange('endDate', date)}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DateRangeSection;
