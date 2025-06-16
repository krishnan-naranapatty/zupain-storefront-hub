
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Plus, Upload } from 'lucide-react';

interface Variant {
  id: string;
  name: string;
  options: string;
  images: any[];
}

interface ProductVariantsProps {
  variants: Variant[];
  onChange: (variants: Variant[]) => void;
}

const ProductVariants = ({ variants, onChange }: ProductVariantsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const addVariant = () => {
    const newVariant: Variant = {
      id: Date.now().toString(),
      name: '',
      options: '',
      images: []
    };
    onChange([...variants, newVariant]);
  };

  const updateVariant = (id: string, field: string, value: string) => {
    const updatedVariants = variants.map(variant =>
      variant.id === id ? { ...variant, [field]: value } : variant
    );
    onChange(updatedVariants);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
        <h3 className="text-lg font-semibold text-gray-900">Add Variants (to products like size, color, etc.)</h3>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-6 pt-4">
        {variants.map((variant, index) => (
          <div key={variant.id} className="space-y-4 p-4 border rounded-lg">
            <h4 className="font-medium text-gray-900">Variant {index + 1}</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Variant Name</Label>
                <Input
                  placeholder="Enter variant Name"
                  value={variant.name}
                  onChange={(e) => updateVariant(variant.id, 'name', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Variant Options</Label>
                <Input
                  placeholder="Enter variant Options"
                  value={variant.options}
                  onChange={(e) => updateVariant(variant.id, 'options', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Upload multiple images for variant combination</Label>
              <Button variant="outline" className="w-32">
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>

            {/* Variant Table */}
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-7 gap-4 p-3 bg-gray-50 border-b text-sm font-medium">
                <div>Out Of Stock</div>
                <div>Stock</div>
                <div>Variant Name</div>
                <div>MRP Price</div>
                <div>Discount %</div>
                <div>Selling Price</div>
                <div>Action</div>
              </div>
              <div className="p-8 text-center text-gray-500">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  📄
                </div>
                No data
              </div>
            </div>
          </div>
        ))}

        <Button 
          onClick={addVariant}
          variant="outline" 
          className="w-full border-dashed border-2 h-12"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Variant
        </Button>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ProductVariants;
