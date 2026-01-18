import { CATEGORY_OPTIONS } from "../../types/ServiceFormData";

interface Props {
  selected: string[];
  error?: string;
  onChange: (cat: string) => void;
}

export const CategorySelector = ({ selected, error, onChange }: Props) => (
  <div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">Categories</h3>
    {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
    <div className="flex flex-wrap gap-4">
      {CATEGORY_OPTIONS.map((cat) => (
        <label key={cat} className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(cat)}
            onChange={() => onChange(cat)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600"
          />
          <span className="ml-2 text-sm text-gray-700">{cat}</span>
        </label>
      ))}
    </div>
  </div>
);