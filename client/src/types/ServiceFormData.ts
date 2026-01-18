export interface ServiceFormData {
  centerName: string;
  phone: string;
  email: string;
  city: string; // Added City
  state: string;
  zipCode: string;
  country: string;
  latitude: string;
  longitude: string;
  categories: string[];
  images: File[];
}
export interface FormErrors {
  centerName?: string;
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  location?: string;
  categories?: string;
  images?: string;
}
export const CATEGORY_OPTIONS = ["Mechanic", "AC", "Electrician"];