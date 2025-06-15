
import React from 'react';
import { Upload, Image } from 'lucide-react';

const ImageUploadSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Coupon Image</h3>
      <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-blue-50/50 hover:bg-blue-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <Image className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-gray-700 font-medium mb-1">
            Upload coupon image
          </p>
          <p className="text-sm text-gray-500 mb-1">Recommended: 300 x 300 pixels</p>
          <p className="text-xs text-gray-400">Max file size: 2MB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadSection;
