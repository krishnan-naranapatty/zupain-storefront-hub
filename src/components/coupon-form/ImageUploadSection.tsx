
import React from 'react';
import { Upload } from 'lucide-react';

const ImageUploadSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            <Upload className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Drag & drop files or Browse</span>
          </p>
          <p className="text-xs text-gray-500 mb-1">300 x 300</p>
          <p className="text-xs text-blue-500 mb-1">Image aspect ratio for better fit</p>
          <p className="text-xs text-red-500">Max file size: Image 2MB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSection;
