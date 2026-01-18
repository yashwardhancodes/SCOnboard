import type { ServiceFormData } from "../types/ServiceFormData";

const API_URL = "https://serviceonboard.onrender.com/api/service-center";

export const submitServiceForm = async (formData: ServiceFormData) => {
  const dataToSend = new FormData();

  // Append basic text fields
  (Object.keys(formData) as Array<keyof ServiceFormData>).forEach((key) => {
    if (key !== "categories" && key !== "images") {
      dataToSend.append(key, formData[key] as string);
    }
  });

  // Append Categories
  formData.categories.forEach((cat) => dataToSend.append("categories", cat));

  // Append Images
  formData.images.forEach((image) => dataToSend.append("images", image));

  const response = await fetch(API_URL, {
    method: "POST",
    body: dataToSend,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to submit form");
  }

  return result;
};