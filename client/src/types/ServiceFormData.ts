// src/types/ServiceTypes.ts

// TYPE 1: For the Onboarding Form (What the user submits)
export interface ServiceFormData {
  centerName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude: string;
  longitude: string;
  categories: string[];
  imagePaths: File[]; // The form handles raw Files
}

// TYPE 2: For the Dashboard (What the API returns)
// This is the one with `id` and `createdAt`
export interface ServiceCenterResponse {
  id: number; // From the database
  createdAt: string; // From the database
  centerName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude: string;
  longitude: string;
  categories: string[];
  imagePaths: string[]; // The API returns string URLs
}

// Helper type for form errors
export interface FormErrors {
  [key: string]: string | undefined;
}
export const CATEGORY_OPTIONS = ["Mechanic", "AC", "Electrician"];