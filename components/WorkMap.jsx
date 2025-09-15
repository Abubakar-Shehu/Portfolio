'use client';

import { useEffect, useRef, useState } from 'react';

export default function WorkMap() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const locations = [
    { city: 'Lagos, Nigeria', lat: 6.5244, lng: 3.3792, role: 'My Home' },
    { city: 'Nottingham, UK', lat: 52.9548, lng: -1.1581, role: 'Undergraduate' },
    { city: 'Leeds, UK', lat: 53.8008, lng: -1.5491, role: 'Accountant / Software Engineer / Cybersecurity Analyst' },
    { city: 'Edmonton, Canada', lat: 53.5461, lng: -113.4938, role: 'Software Engineer' }
  ];

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      try {
        // Calculate bounds to include all locations
        const bounds = new window.google.maps.LatLngBounds();
        locations.forEach(location => {
          bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
        });

        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 2, // Zoom out more to show all markers
          center: { lat: 0, lng: 0 },  
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#c9c9c9' }]
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'administrative',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ],
          disableDefaultUI: true,
          zoomControl: true,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_BOTTOM
          }
        });

        // Add markers for each location
        locations.forEach((location, index) => {
          const marker = new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: `${location.city} - ${location.role}`,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#667eea',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2
            },
            animation: window.google.maps.Animation.DROP
          });

          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                <h4 style="margin: 0 0 4px 0; color: #2c3e50; font-size: 14px;">${location.city}</h4>
                <p style="margin: 0; color: #666; font-size: 12px;">${location.role}</p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        // Fit map to show all markers
        map.fitBounds(bounds);
        
        // Add some padding to the bounds
        const listener = window.google.maps.event.addListener(map, 'idle', () => {
          if (map.getZoom() > 4) map.setZoom(4); // Limit maximum zoom
          window.google.maps.event.removeListener(listener);
        });

        setMapLoaded(true);
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError(true);
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => setMapError(true);
      document.head.appendChild(script);
    } else {
      initMap();
    }
    
    // Cleanup resize listener
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (mapError) {
    return (
      <div className="work-map-container">
        <h3>My Work Journey</h3>
        <div className="map-error">
          <p>Unable to load map. Please check your Google Maps API key.</p>
        </div>
        <div className="location-details">
          {locations.map((location, index) => (
            <div key={index} className="location-item">
              <div className="location-marker-small"></div>
              <div className="location-info">
                <span className="location-city">{location.city}</span>
                <span className="location-role">{location.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="work-map-container">
      <h3>My Work Journey</h3>
      <div className="map-wrapper">
        <div 
          ref={mapRef} 
          className="google-map"
          style={{ 
            width: '100%', 
            height: isMobile ? '300px' : '500px',
            borderRadius: '8px',
            opacity: mapLoaded ? 1 : 0.7
          }}
        />
        {!mapLoaded && !mapError && (
          <div className="map-loading">
            <p>Loading map...</p>
          </div>
        )}
      </div>
      
      {/* Location details */}
      <div className="location-details">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <div className="location-marker-small"></div>
            <div className="location-info">
              <span className="location-city">{location.city}</span>
              <span className="location-role">{location.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
