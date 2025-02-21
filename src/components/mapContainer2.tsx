import React, { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker,Polyline } from '@react-google-maps/api';
import MarkerYellow from "../icons/markerYellow.svg";

const homeLocation = { lat: 24.350900627240378, lng: 54.610020265546304 };
const schoolLocation = { lat: 24.353892219691456, lng: 54.63600045438338 };
const containerStyle = {
  width: '100%',
  height: '7rem',
  // marginLeft: "5%",
  borderTopLeftRadius: '48px',
  borderTopRightRadius: '48px'
};
const darkModeStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#003B5B"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide all text labels
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off" // Hide text stroke labels
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide country name
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide land parcel text
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide locality (city/town) names
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide POI text
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#003B5B"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide park text
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#003B5B"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off" // Hide road icon labels
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide road text labels
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off" // Hide road text stroke
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3e3e3e"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide highway text
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off" // Hide highway text stroke
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2e2e2e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide local road text
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f2f2f"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide transit text
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off" // Hide transit text stroke
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a3a3a"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "visibility": "off" // Hide water text
      }
    ]
  }
];



const center = homeLocation

const GoogleMapComponent: React.FC = () => {
  const onLoad = useCallback((map: google.maps.Map) => {
    console.log('Map Loaded:', map);
  }, []);

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        options={{
          styles: darkModeStyle,
          mapTypeControl: false,
          scaleControl: false,
          rotateControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          disableDefaultUI: true,
          gestureHandling: 'none'
        }}
      >
        <Marker
          position={homeLocation}
          icon={{
            url: MarkerYellow, // Use an orange marker
            scaledSize: new window.google.maps.Size(20,20)
          }}
        />
        <Marker
          position={schoolLocation}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png", // Use an orange marker
          }}
        />

        {/* Polyline between home and school */}
        <Polyline
          path={[schoolLocation, homeLocation]}
          options={{
            strokeColor: '#FFBF1A', // Set stroke color to #FFBF1A
            strokeOpacity: 1,
            strokeWeight: 2,
          }}
        />

      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
