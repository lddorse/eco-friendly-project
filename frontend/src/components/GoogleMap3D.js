/*import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 37.7749, // San Francisco
    lng: -122.4194,
};

const noLabelStyle = [
    {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "administrative",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "water",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
];

const GoogleMap3D = ({ children, start, stops }) => {
    const mapRef = useRef(null);
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);

    useEffect(() => {
        if (window.google && mapRef.current) {
            const service = new window.google.maps.DirectionsService();
            const renderer = new window.google.maps.DirectionsRenderer({ map: mapRef.current });

            setDirectionsService(service);
            setDirectionsRenderer(renderer);
        }
    }, []);

    useEffect(() => {
        if (directionsService && directionsRenderer && start && stops.length > 0) {
            const waypoints = stops.map((stop) => ({
                location: { lat: stop.latitude, lng: stop.longitude },
                stopover: true,
            }));
        
            
           directionsService.route(
                {
                    origin: { lat: start.latitude, lng: start.longitude },
                    destination: {
                        lat: stops[stops.length - 1].latitude,
                        lng: stops[stops.length - 1].longitude,
                    },
                    waypoints,
                    travelMode: window.google.maps.TravelMode.BICYCLING, // Use bike routes
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(result);
                    } else {
                        console.error('Error fetching directions:', status);
                    }
                }
            );
        }
    }, [directionsService, directionsRenderer, start, stops]);

    return (
        <LoadScript googleMapsApiKey="AIzaSyAJFRDeASxwdXdiPMm7Er7rn1jJF-5-SUo">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                options={{
                    mapTypeId: 'hybrid',
                    styles: noLabelStyle,
                    disableDefaultUI: false,
                    zoomControl: true,
                }}
                onLoad={(map) => {
                    mapRef.current = map;
                    if (directionsRenderer) {
                        directionsRenderer.setMap(map); // Attach DirectionsRenderer to the map
                    }
                }}            >
                {children}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMap3D;
*/

import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 37.7749, // San Francisco
    lng: -122.4194,
};

const GoogleMap3D = () => {
    const mapRef = useRef(null);
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);

    useEffect(() => {
        console.log("Checking window.google:", window.google);
        if (window.google && mapRef.current) {
            console.log("Initializing Directions Service and Renderer");
            const service = new window.google.maps.DirectionsService();
            const renderer = new window.google.maps.DirectionsRenderer({ map: mapRef.current });
    
            setDirectionsService(service);
            setDirectionsRenderer(renderer);
        } else {
            console.error("Google Maps API is not loaded properly");
        }
    }, []);
    
    useEffect(() => {
        if (window.google && mapRef.current) {
            console.log("Initializing Directions Service and Renderer");
            const service = new window.google.maps.DirectionsService();
            const renderer = new window.google.maps.DirectionsRenderer({ map: mapRef.current });

            setDirectionsService(service);
            setDirectionsRenderer(renderer);
        }
    }, []);

    useEffect(() => {
        const getBikeRoute = async () => {
            if (directionsService && directionsRenderer) {
                const hardcodedStart = { lat: 37.7749, lng: -122.4194 }; // San Francisco
                const hardcodedStops = [
                    { lat: 37.8044, lng: -122.2711 }, // Oakland
                    { lat: 37.8715, lng: -122.2730 }, // Berkeley
                ];

                console.log("Fetching directions for hardcoded route...");
                console.log("Start:", hardcodedStart);
                console.log("Stops:", hardcodedStops);

                const waypoints = hardcodedStops.map((stop) => ({
                    location: stop,
                    stopover: true,
                }));

                directionsService.route(
                    {
                        origin: hardcodedStart,
                        destination: hardcodedStops[hardcodedStops.length - 1],
                        waypoints,
                        travelMode: window.google.maps.TravelMode.BICYCLING,
                    },
                    (result, status) => {
                        if (status === window.google.maps.DirectionsStatus.OK) {
                            console.log("Directions result:", result);
                            directionsRenderer.setDirections(result);
                        } else {
                            console.error("Error fetching directions:", status);
                        }
                    }
                );
            }
        };

        getBikeRoute();
    }, [directionsService, directionsRenderer]);

    return (
<LoadScript googleMapsApiKey="AIzaSyAJFRDeASxwdXdiPMm7Er7rn1jJF-5-SUo">            
<GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={12}
    onLoad={(map) => {
        console.log("Map loaded successfully");
        mapRef.current = map;
    }}
>
    <div style={{ backgroundColor: "red", height: "20px", width: "20px" }}></div>
</GoogleMap>

        </LoadScript>
    );
};

export default GoogleMap3D;

        
     