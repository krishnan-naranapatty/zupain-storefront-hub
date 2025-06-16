
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

interface ProductAdditionalDetailsProps {
  data: {
    shelfLife: string;
    countryOfOrigin: string;
    seller: string;
    marketedBy: string;
    manufacturerDetails: string;
  };
  onChange: (data: any) => void;
}

const ProductAdditionalDetails = ({ data, onChange }: ProductAdditionalDetailsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (field: string, value: string) => {
    onChange({ [field]: value });
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
        <h3 className="text-lg font-semibold text-gray-900">Additional Details</h3>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-6 pt-4">
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="shelfLife" className="text-sm font-medium">
              Shelf Life
            </Label>
            <Input
              id="shelfLife"
              placeholder="Shelf Life"
              value={data.shelfLife}
              onChange={(e) => handleChange('shelfLife', e.target.value)}
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="countryOfOrigin" className="text-sm font-medium">
              Country of Origin
            </Label>
            <Select value={data.countryOfOrigin} onValueChange={(value) => handleChange('countryOfOrigin', value)}>
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Country of Origin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="seller" className="text-sm font-medium">
              Seller
            </Label>
            <Input
              id="seller"
              placeholder="Seller"
              value={data.seller}
              onChange={(e) => handleChange('seller', e.target.value)}
              className="h-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="marketedBy" className="text-sm font-medium">
              Marketed By
            </Label>
            <Input
              id="marketedBy"
              placeholder="Marketed By"
              value={data.marketedBy}
              onChange={(e) => handleChange('marketedBy', e.target.value)}
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="manufacturerDetails" className="text-sm font-medium">
              Enter Manufacturer Details
            </Label>
            <Textarea
              id="manufacturerDetails"
              placeholder="Manufacturer Details"
              value={data.manufacturerDetails}
              onChange={(e) => handleChange('manufacturerDetails', e.target.value)}
              className="min-h-10"
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ProductAdditionalDetails;
