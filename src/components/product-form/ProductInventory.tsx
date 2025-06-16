
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

interface ProductInventoryProps {
  data: {
    trackInventory: boolean;
    currentStock: string;
    stock: string;
  };
  onChange: (data: any) => void;
}

const ProductInventory = ({ data, onChange }: ProductInventoryProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleChange = (field: string, value: string | boolean) => {
    onChange({ [field]: value });
  };

  const incrementStock = () => {
    const currentValue = parseInt(data.stock) || 0;
    handleChange('stock', (currentValue + 1).toString());
  };

  const decrementStock = () => {
    const currentValue = parseInt(data.stock) || 0;
    if (currentValue > 0) {
      handleChange('stock', (currentValue - 1).toString());
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
        <h3 className="text-lg font-semibold text-gray-900">Inventory (to add and edit the product stock)</h3>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-sm font-medium">Track Inventory</Label>
            <p className="text-xs text-gray-600">Enable inventory tracking for this product</p>
          </div>
          <Switch
            checked={data.trackInventory}
            onCheckedChange={(checked) => handleChange('trackInventory', checked)}
          />
        </div>

        {data.trackInventory && (
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="currentStock" className="text-sm font-medium">
                Current Stock
              </Label>
              <Input
                id="currentStock"
                placeholder="0"
                value={data.currentStock}
                onChange={(e) => handleChange('currentStock', e.target.value)}
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock" className="text-sm font-medium">
                Stock
              </Label>
              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0"
                  onClick={decrementStock}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Input
                  id="stock"
                  placeholder="Enter stock"
                  value={data.stock}
                  onChange={(e) => handleChange('stock', e.target.value)}
                  className="h-10 text-center"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0"
                  onClick={incrementStock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ProductInventory;
