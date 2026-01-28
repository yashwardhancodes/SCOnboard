import type { ServiceFormData } from "../types/ServiceFormData";

const API_URL = "https://serviceonboard.onrender.com/api/service-center";

// Optional: type your API response
interface SubmitServiceResponse {
  success: boolean;
  message?: string;
  data?: unknown;
  error?: string;
}

export const submitServiceForm = async (
  formData: ServiceFormData
): Promise<SubmitServiceResponse> => {
  const dataToSend = new FormData();

  // Append basic text fields
  (Object.keys(formData) as Array<keyof ServiceFormData>).forEach((key) => {
    if (key !== "categories" && key !== "imagePaths") {
      const value = formData[key];

      if (typeof value === "string") {
        dataToSend.append(key, value);
      }
    }
  });

  // Append Categories
  formData.categories.forEach((cat: string) => {
    dataToSend.append("categories", cat);
  });

  // Append Images
  formData.imagePaths.forEach((image: File) => {
    dataToSend.append("images", image);
  });

  const response = await fetch(API_URL, {
    method: "POST",
    body: dataToSend,
  });

  const result: SubmitServiceResponse = await response.json();

  if (!response.ok) {
    throw new Error(result.error ?? "Failed to submit form");
  }

  return result;
};
