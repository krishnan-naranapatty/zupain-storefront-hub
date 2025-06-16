
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Plus, X } from 'lucide-react';

interface ProductImagesProps {
  images: any[];
  onChange: (images: any[]) => void;
}

const ProductImages = ({ images, onChange }: ProductImagesProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    // In a real app, you'd upload these files and get URLs back
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      file
    }));
    onChange([...images, ...newImages]);
  };

  const removeImage = (id: number) => {
    onChange(images.filter(img => img.id !== id));
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Images</h3>
        <p className="text-sm text-gray-600">Add up to 10 images. First image will be the main product image.</p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {/* Main upload area */}
        <Card 
          className="aspect-square border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer transition-colors p-4 flex flex-col items-center justify-center"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-sm text-gray-600 text-center">
            Drag & drop or Browse
          </span>
          <span className="text-xs text-gray-400 mt-1">
            400 x 400 / 320 x 400
          </span>
          <span className="text-xs text-gray-400">
            Max file size: 5MB / Video 10 MB
          </span>
        </Card>

        {/* Additional upload slots */}
        {Array.from({ length: 4 }).map((_, index) => (
          <Card 
            key={index}
            className="aspect-square border-2 border-dashed border-gray-200 hover:border-gray-300 cursor-pointer transition-colors flex items-center justify-center"
            onClick={() => fileInputRef.current?.click()}
          >
            <Plus className="w-6 h-6 text-gray-400" />
          </Card>
        ))}

        {/* Uploaded images */}
        {images.map((image) => (
          <Card key={image.id} className="aspect-square relative overflow-hidden">
            <img 
              src={image.url} 
              alt="Product" 
              className="w-full h-full object-cover"
            />
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2 w-6 h-6 p-0"
              onClick={() => removeImage(image.id)}
            >
              <X className="w-3 h-3" />
            </Button>
          </Card>
        ))}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">AI</span>
          </div>
          <span className="text-sm text-gray-700">AI Description Generator</span>
          <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
            Try Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
