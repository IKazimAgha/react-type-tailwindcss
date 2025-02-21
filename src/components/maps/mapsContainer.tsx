import React, { useEffect, useRef, useState } from 'react';

const homeLocation = { lat: 24.362591023084313, lng: 54.599637484630136 };
const schoolLocation = { lat: 24.353892219691456, lng: 54.63600045438338 };

const containerStyle = {
  width: '100%',
  height: '7rem',
  // marginLeft: "5%",
  borderTopLeftRadius: '48px',
  borderTopRightRadius: '48px'
};

const center = homeLocation; // Center map on the user's home location

const GoogleMapComponent: React.FC = () => {
  const [googleLoaded, setGoogleLoaded] = useState(false); // Track if google is loaded
  const mapContainerRef = useRef<HTMLDivElement>(null); // Reference to the map container

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${''}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Declare initMap function globally for Google Maps callback
      window.initMap = () => {
        setGoogleLoaded(true);
      };
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (googleLoaded && mapContainerRef.current) {
      const map = new google.maps.Map(mapContainerRef.current, {
        center,
        zoom: 14,
        disableDefaultUI: true,
      });

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      const request: google.maps.DirectionsRequest = {
        origin: homeLocation,
        destination: schoolLocation,
        travelMode: google.maps.TravelMode.DRIVING, // You can use WALKING, BICYCLING, or TRANSIT if needed
      };

      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    }
  }, [googleLoaded]);

  return <div ref={mapContainerRef} style={containerStyle}></div>;
};

export default GoogleMapComponent;
