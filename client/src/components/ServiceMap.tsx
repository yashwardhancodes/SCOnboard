import React, { useState, useCallback, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
// 1. IMPORT THE CORRECT TYPE
import type { ServiceCenterResponse } from '../types/ServiceFormData';


const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '12px'
};

const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629
};

// 2. UPDATE THE PROPS INTERFACE
interface ServiceMapProps {
  locations: ServiceCenterResponse[];
}

const ServiceMap: React.FC<ServiceMapProps> = ({ locations }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string
  });
// @ts-ignore
  const [map, setMap] = useState<google.maps.Map | null>(null);
  // 3. UPDATE THE STATE TYPE
  const [selectedCenter, setSelectedCenter] = useState<ServiceCenterResponse | null>(null);

  // Filter out invalid locations (this logic is still correct)
  const validLocations = useMemo(() => {
    return locations.filter(loc => loc.latitude && loc.longitude);
  }, [locations]);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    
    if (validLocations.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      validLocations.forEach((loc) => {
        bounds.extend({ 
          lat: parseFloat(loc.latitude), 
          lng: parseFloat(loc.longitude) 
        });
      });
      mapInstance.fitBounds(bounds);
    }
  }, [validLocations]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) return <div className="h-125 bg-slate-100 animate-pulse rounded-xl flex items-center justify-center text-slate-400">Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {validLocations.map((center) => (
        <Marker
          // 4. `center.id` is now VALID
          key={center.id}
          position={{ 
            lat: parseFloat(center.latitude), 
            lng: parseFloat(center.longitude) 
          }}
          onClick={() => setSelectedCenter(center)}
        />
      ))}

      {selectedCenter && (
        <InfoWindow
          position={{ 
            lat: parseFloat(selectedCenter.latitude), 
            lng: parseFloat(selectedCenter.longitude) 
          }}
          onCloseClick={() => setSelectedCenter(null)}
        >
          <div className="p-1 min-w-50">
            <h3 className="font-bold text-slate-800 text-sm">{selectedCenter.centerName}</h3>
            <p className="text-xs text-slate-600">{selectedCenter.city}, {selectedCenter.state}</p>
            <p className="text-xs text-blue-600 mt-1 font-medium">{selectedCenter.phone}</p>
            {selectedCenter.imagePaths && selectedCenter.imagePaths.length > 0 && (
              <img 
                // 5. `selectedCenter.imagePaths[0]` is now a string (URL) and VALID
                src={selectedCenter.imagePaths[0]} 
                alt="Center" 
                className="w-full h-24 object-cover mt-2 rounded-md border border-slate-200" 
              />
            )}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default ServiceMap;