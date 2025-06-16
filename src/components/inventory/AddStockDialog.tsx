
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  variant: string;
}

interface AddStockDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddStockDialog = ({ open, onOpenChange }: AddStockDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<Record<number, string>>({});
  const [storeProducts, setStoreProducts] = useState<Product[]>([]);
  const { toast } = useToast();

  const masterProducts: Product[] = [
    {
      id: 1,
      image: '/placeholder.svg',
      name: 'Blameless Hydrating & Brightening Serum',
      description: 'With Watermelon, Niacinamide & Lotus Extracts | For Oily, Acne-Prone & Congested Skin | 50ml',
      variant: ''
    },
    {
      id: 2,
      image: '/placeholder.svg',
      name: 'Blameless Oil Control + Brightening Serum',
      description: 'Niacinamide, Multani Mitti, Hyaluronic Acid & Daisy Extract | Lightweight Gel for Oily, Acne-Prone Skin | Controls Sebum, Minimizes Pores & Evens Tone | 50ml',
      variant: ''
    },
    {
      id: 3,
      image: '/placeholder.svg',
      name: 'Blameless Avocado + Green Tea Sunscreen SPF 50',
      description: 'Silicon based Ultra-Matte Gel | Broad Spectrum, Blue Light & Infrared Protection | Non-Greasy, Fast-Absorbing | For Face & Body | 50ml',
      variant: ''
    },
    {
      id: 4,
      image: '/placeholder.svg',
      name: 'Blameless Pore Refining & Acne Control Serum',
      description: 'Salicylic Acid, Neem, Green Tea & Hibiscus | Lightweight Gel for Acne-Prone Skin | 50ml',
      variant: ''
    }
  ];

  const filteredProducts = masterProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuantityChange = (productId: number, quantity: string) => {
    setQuantities(prev => ({ ...prev, [productId]: quantity }));
  };

  const handleAddProduct = (product: Product) => {
    const quantity = quantities[product.id] || '0';
    const numQuantity = parseInt(quantity);
    
    if (numQuantity <= 0) {
      toast({
        title: "Invalid Quantity",
        description: "Please enter a valid quantity greater than 0.",
        variant: "destructive"
      });
      return;
    }

    // Check if product already exists in store
    const existingProductIndex = storeProducts.findIndex(p => p.id === product.id);
    
    if (existingProductIndex >= 0) {
      toast({
        title: "Product Already Added",
        description: "This product is already in the store list.",
        variant: "destructive"
      });
      return;
    }

    setStoreProducts(prev => [...prev, product]);
    toast({
      title: "Product Added",
      description: `${product.name} has been added with quantity ${numQuantity}.`,
    });
  };

  const handleRemoveProduct = (productId: number) => {
    setStoreProducts(prev => prev.filter(p => p.id !== productId));
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  const handleSaveStock = () => {
    if (storeProducts.length === 0) {
      toast({
        title: "No Products Selected",
        description: "Please add at least one product to save stock.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Stock Updated",
      description: `Successfully updated stock for ${storeProducts.length} products.`,
    });
    
    // Reset dialog state
    setStoreProducts([]);
    setQuantities({});
    setSearchQuery('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Add Stock</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6 h-[70vh]">
          {/* Master Product List */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Master Product List</h3>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Product Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-1 overflow-y-auto h-full border rounded-lg">
              <div className="grid grid-cols-4 gap-4 p-3 bg-gray-50 border-b font-medium text-sm">
                <span>Product Name</span>
                <span className="text-center">Variant</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Add</span>
              </div>
              
              {filteredProducts.map((product) => (
                <div key={product.id} className="grid grid-cols-4 gap-4 p-3 border-b hover:bg-gray-50 items-center">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-10 h-10 rounded-lg object-cover border"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</p>
                      <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-sm text-gray-600">{product.variant || '-'}</span>
                  </div>
                  
                  <div className="flex justify-center">
                    <Input
                      type="number"
                      placeholder="0"
                      value={quantities[product.id] || ''}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      className="w-16 h-8 text-center text-sm"
                      min="0"
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      size="sm"
                      onClick={() => handleAddProduct(product)}
                      className="h-8 px-4 bg-blue-600 hover:bg-blue-700"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Store Product List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Store Product List</h3>
              <Button 
                onClick={handleSaveStock}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Add Stock
              </Button>
            </div>
            
            <div className="space-y-1 overflow-y-auto h-full border rounded-lg">
              <div className="grid grid-cols-4 gap-4 p-3 bg-gray-50 border-b font-medium text-sm">
                <span>Product Name</span>
                <span className="text-center">Variant</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Add / Remove</span>
              </div>
              
              {storeProducts.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p>No data</p>
                </div>
              ) : (
                storeProducts.map((product) => (
                  <div key={product.id} className="grid grid-cols-4 gap-4 p-3 border-b hover:bg-gray-50 items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover border"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-sm text-gray-600">{product.variant || '-'}</span>
                    </div>
                    
                    <div className="flex justify-center">
                      <Input
                        type="number"
                        value={quantities[product.id] || ''}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        className="w-16 h-8 text-center text-sm"
                        min="0"
                      />
                    </div>
                    
                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRemoveProduct(product.id)}
                        className="h-8 px-4 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddStockDialog;
