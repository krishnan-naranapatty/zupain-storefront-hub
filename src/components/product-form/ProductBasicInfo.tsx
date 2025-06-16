
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductBasicInfoProps {
  data: {
    name: string;
    description: string;
    category: string;
    gstPercentage: string;
  };
  onChange: (data: any) => void;
}

const ProductBasicInfo = ({ data, onChange }: ProductBasicInfoProps) => {
  const handleChange = (field: string, value: string) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="productName" className="text-sm font-medium">
            Product Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="productName"
            placeholder="Enter product name"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gstPercentage" className="text-sm font-medium">
            GST in %
          </Label>
          <Input
            id="gstPercentage"
            placeholder="Enter GST %"
            value={data.gstPercentage}
            onChange={(e) => handleChange('gstPercentage', e.target.value)}
            className="h-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium">
          Product Description
        </Label>
        <div className="border rounded-lg">
          {/* Toolbar */}
          <div className="border-b p-2 flex items-center space-x-2 bg-gray-50 rounded-t-lg">
            <Select defaultValue="heading3">
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="heading3">Heading 3</SelectItem>
                <SelectItem value="heading2">Heading 2</SelectItem>
                <SelectItem value="heading1">Heading 1</SelectItem>
                <SelectItem value="paragraph">Paragraph</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="montserrat">
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="montserrat">Montserrat</SelectItem>
                <SelectItem value="arial">Arial</SelectItem>
                <SelectItem value="helvetica">Helvetica</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea
            id="description"
            placeholder="Edit your content here"
            value={data.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="min-h-24 border-none focus:ring-0 resize-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm font-medium">
            Category <span className="text-red-500">*</span>
          </Label>
          <Select value={data.category} onValueChange={(value) => handleChange('category', value)}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Enter category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="skincare">Skincare</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
              <SelectItem value="wellness">Wellness</SelectItem>
              <SelectItem value="supplements">Supplements</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="priceType" className="text-sm font-medium">
            Product Price Type <span className="text-red-500">*</span>
          </Label>
          <Select defaultValue="direct">
            <SelectTrigger className="h-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="direct">Direct Price</SelectItem>
              <SelectItem value="variable">Variable Price</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductBasicInfo;
