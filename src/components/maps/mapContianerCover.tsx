import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map: React.FC = () => {
  const containerStyle = {
    width: '100%',
    height: '100vh', // Full screen height
  };

  const center = { lat: 24.362591023084313, lng: 54.599637484630136 };


  const mapOptions = {
    disableDefaultUI: true, // Disable all default controls (zoom, street view, etc.)
    zoomControl: false, // Disable zoom control
    streetViewControl: false, // Disable street view control
    mapTypeControl: false, // Disable map type control (like satellite, terrain)
    fullscreenControl: false, // Disable fullscreen control
    gestureHandling: 'none', // Disable map gestures like scrolling and dragging
    styles: [ // Custom dark mode and light mode colors
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#003B5B', // Dark background for the map
          },
        ],
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off', // Hide all icons
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#809DAD', // Light color for labels
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#003B5B', // Darker background behind text
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#809DAD', // Light color for locality names
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#003B5B', // Darker points of interest
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#809DAD', // Light gray for points of interest text
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#809DAD', // Light color for roads
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#003B5B', // Dark color for road labels
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#809DAD', // Lighter color for highways
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#003B5B', // Darker transit lines
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#003B5B', // Darker water color
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#809DAD', // Lighter color for water labels
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off', // Hide street names
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off', // Hide street names
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off', // Hide street names
          },
        ],
      },
    ],
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={mapOptions}
      >
        {/* You can add markers here if you want */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
