
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
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Validity Period</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Start Date <span className="text-red-500">*</span>
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-11 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  !formData.startDate && "text-gray-500"
                )}
              >
                <CalendarIcon className="mr-3 h-4 w-4 text-gray-400" />
                {formData.startDate ? format(formData.startDate, "dd MMM yyyy") : "Select start date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50" align="start">
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
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            End Date <span className="text-red-500">*</span>
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-11 border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  !formData.endDate && "text-gray-500"
                )}
              >
                <CalendarIcon className="mr-3 h-4 w-4 text-gray-400" />
                {formData.endDate ? format(formData.endDate, "dd MMM yyyy") : "Select end date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50" align="start">
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
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> The coupon will be active from the start date at 12:00 AM and will expire on the end date at 11:59 PM.
        </p>
      </div>
    </div>
  );
};

export default DateRangeSection;
