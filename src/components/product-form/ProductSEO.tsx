
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

interface ProductSEOProps {
  data: {
    pageTitle: string;
    metaDescription: string;
    urlHandle: string;
  };
  onChange: (data: any) => void;
}

const ProductSEO = ({ data, onChange }: ProductSEOProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (field: string, value: string) => {
    onChange({ [field]: value });
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
        <h3 className="text-lg font-semibold text-gray-900">Add SEO</h3>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-6 pt-4">
        <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
          https://blameless.zupain.com/pdl/
        </div>

        <div className="space-y-2">
          <Label htmlFor="pageTitle" className="text-sm font-medium">
            Page Title
          </Label>
          <Input
            id="pageTitle"
            placeholder="Page Title"
            value={data.pageTitle}
            onChange={(e) => handleChange('pageTitle', e.target.value)}
            className="h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="metaDescription" className="text-sm font-medium">
            Meta Description
          </Label>
          <Textarea
            id="metaDescription"
            placeholder="Meta Description"
            value={data.metaDescription}
            onChange={(e) => handleChange('metaDescription', e.target.value)}
            className="min-h-20 resize-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="urlHandle" className="text-sm font-medium">
            Url Handle
          </Label>
          <div className="flex">
            <div className="bg-gray-100 border border-r-0 rounded-l px-3 py-2 text-sm text-gray-600">
              https://blameless.zupain.com/Product-Name/pdl/
            </div>
            <Input
              id="urlHandle"
              placeholder="Url Handle"
              value={data.urlHandle}
              onChange={(e) => handleChange('urlHandle', e.target.value)}
              className="h-10 rounded-l-none"
            />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ProductSEO;
