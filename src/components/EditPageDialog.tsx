
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

interface EditPageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  page?: {
    id: string;
    name: string;
    path: string;
    content: string;
  } | null;
  onSave: (pageData: { name: string; path: string; content: string }) => void;
}

const EditPageDialog = ({ open, onOpenChange, page, onSave }: EditPageDialogProps) => {
  const [formData, setFormData] = useState({
    name: page?.name || '',
    path: page?.path || '',
    content: page?.content || ''
  });

  const handleSave = () => {
    onSave(formData);
    onOpenChange(false);
  };

  const handleCancel = () => {
    setFormData({
      name: page?.name || '',
      path: page?.path || '',
      content: page?.content || ''
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{page ? 'Edit Page' : 'Add New Page'}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Document Name */}
          <div>
            <Label htmlFor="document-name" className="text-sm font-medium text-gray-700">
              Document Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="document-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter document name"
              className="mt-1"
            />
          </div>

          {/* Document Path */}
          <div>
            <Label htmlFor="document-path" className="text-sm font-medium text-gray-700">
              Document Path <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center mt-1">
              <span className="bg-gray-100 border border-r-0 border-gray-300 px-3 py-2 text-gray-500 text-sm rounded-l-md">
                /
              </span>
              <Input
                id="document-path"
                value={formData.path}
                onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                placeholder="help"
                className="rounded-l-none"
              />
            </div>
          </div>

          {/* File Upload Area */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Upload Files</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <div className="text-sm text-gray-600 mb-2">Drag & drop files or Browse</div>
              <div className="text-xs text-gray-400">Upload only teaching file</div>
            </div>
          </div>

          {/* Content Editor */}
          <div>
            <Label htmlFor="content" className="text-sm font-medium text-gray-700">
              Page Content
            </Label>
            <div className="mt-1">
              {/* Toolbar */}
              <div className="border border-b-0 bg-gray-50 px-3 py-2 rounded-t-md">
                <div className="flex items-center space-x-1 text-sm">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <span className="font-bold">B</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <span className="italic">I</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <span className="underline">U</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <span className="line-through">S</span>
                  </Button>
                  <div className="w-px h-6 bg-gray-300 mx-2"></div>
                  <select className="text-sm border-0 bg-transparent">
                    <option>Normal</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                  </select>
                  <select className="text-sm border-0 bg-transparent ml-2">
                    <option>16</option>
                    <option>14</option>
                    <option>18</option>
                  </select>
                </div>
              </div>
              {/* Content Area */}
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Start writing your page content..."
                className="min-h-[300px] rounded-t-none border-t-0"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPageDialog;
