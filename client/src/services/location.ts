

export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });
    }
  });
};

export const reverseGeocode = async (lat: string, lng: string) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1&accept-language=en`,
    {
      headers: { "User-Agent": "ServiceOnboardApp/1.0" },
    }
  );
  const data = await response.json();
  
  if (!data || !data.address) throw new Error("Address not found");

  const addr = data.address;
  return {
    city: addr.city || addr.state_district || addr.county || addr.town || addr.suburb || addr.village || "",
    state: addr.state || "",
    zipCode: addr.postcode || "",
    country: "India",
  };
};