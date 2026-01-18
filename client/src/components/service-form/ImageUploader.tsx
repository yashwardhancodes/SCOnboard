import { Upload, X } from "lucide-react";
import type { ChangeEvent } from "react";

interface Props {
  previews: string[];
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemove: (index: number) => void;
}

export const ImageUploader = ({ previews, error, onChange, onRemove }: Props) => (
  <div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">Images</h3>
    {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
    
    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex justify-center hover:bg-gray-50">
      <label className="cursor-pointer text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <span className="text-indigo-600 font-medium">Upload files</span>
        <input type="file" multiple accept="image/*" className="hidden" onChange={onChange} />
      </label>
    </div>

    <div className="mt-4 grid grid-cols-4 gap-4">
      {previews.map((src, idx) => (
        <div key={idx} className="relative group">
          <img src={src} className="h-24 w-full object-cover rounded" alt="preview" />
          <button type="button" onClick={() => onRemove(idx)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
);