
import React from 'react';
import { Upload } from 'lucide-react';

const ImageUploadSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <Upload className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-base text-gray-700 mb-2 font-medium">
            <span>Drag & drop files or Browse</span>
          </p>
          <p className="text-sm text-gray-500 mb-1">300 x 300</p>
          <p className="text-sm text-blue-500 mb-1">Image aspect ratio for better fit</p>
          <p className="text-sm text-red-500">Max file size: Image 2MB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSection;
