import type { ChangeEvent } from "react";
import type { ServiceFormData, FormErrors } from "../../types/ServiceFormData";

interface Props {
  formData: ServiceFormData;
  errors: FormErrors;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const BasicDetails = ({ formData, errors, onChange }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      
      {/* Service Center Name */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700">Service Center Name</label>
        <input
          type="text"
          name="centerName"
          value={formData.centerName}
          onChange={onChange}
          className={`mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.centerName ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="e.g. A1 Auto Repairs"
        />
        {errors.centerName && <p className="mt-1 text-xs text-red-500">{errors.centerName}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          maxLength={10}
          className={`mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="9876543210"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* Email Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className={`mt-1 block w-full rounded-md border p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="contact@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
    </div>
  );
};