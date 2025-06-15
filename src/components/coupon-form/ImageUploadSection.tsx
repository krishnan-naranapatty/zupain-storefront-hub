
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Upload } from 'lucide-react';

const ImageUploadSection: React.FC = () => {
  return (
    <div>
      <Card className="border-2 border-dashed border-gray-300 p-8">
        <CardContent className="flex flex-col items-center justify-center text-center p-0">
          <Upload className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">Drag & drop files or Browse</p>
          <p className="text-xs text-gray-500">300 x 300</p>
          <p className="text-xs text-gray-500">Image aspect ratio for better fit</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUploadSection;
