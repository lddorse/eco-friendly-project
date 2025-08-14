import React from 'react';
import { GoogleMap, Marker, LoadScript, GroundOverlay } from '@react-google-maps/api';

import parksIcon from './icons/tree.png';
import recyclingIcon from './icons/recycle.png';
import farmersMarketIcon from './icons/crate.png';
import greenBuildingIcon from './icons/building.png';
import solarPanelIcon from './icons/solar-panel.png';
import envIcon from './icons/env.png';
import evIcon from './icons/ev.png';
import nrIcon from './icons/nr.png';
import wcIcon from './icons/wc.png';
import birdIcon from './icons/bird.png';
import fishIcon from './icons/fish.png';
import saIcon from './icons/sa.png';
import eIcon from './icons/e.png';
import mIcon from './icons/m.png';
import cgIcon from './icons/cg.png';
import bIcon from './icons/b.png';
import rIcon from './icons/r.png';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 37.7749,
    lng: -122.4194, // San Francisco
};

// Icon map
const iconMap = {
    Parks: parksIcon,
    'Recycling Centers': recyclingIcon,
    'Farmers Markets': farmersMarketIcon,
    'Green Buildings': greenBuildingIcon,
    'Solar Installations': solarPanelIcon,
    'Environmental Organizations': envIcon,
    'EV Charging Stations': evIcon,
    'Nature Reserves': nrIcon,
    'Water Conservation': wcIcon,
    'Bird Watching': birdIcon,
    'Fishing Areas': fishIcon,
    'Educational Centers': eIcon,
    'Scenic Areas': saIcon,
    'Miscellaneous': mIcon,
    'Bike': bIcon,
    'Rest': rIcon,
    'Community Gardens': cgIcon,
};

const Map = ({ locations }) => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyAJFRDeASxwdXdiPMm7Er7rn1jJF-5-SUo">
           <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={12}
    options={{
        mapTypeId: 'hybrid', // Options: 'roadmap', 'satellite', 'hybrid', 'terrain'
        disableDefaultUI: false, // Show default UI controls
        zoomControl: true, // Enable zoom controls
    }}
>
    {locations.map((location) => (
        <Marker
            key={location.id}
            position={{ lat: location.latitude, lng: location.longitude }}
            title={location.name}
            icon={{
                url: iconMap[location.category],
                scaledSize: { width: 40, height: 40 },
            }}
        />
    ))}
</GoogleMap>

        </LoadScript>
    );
};

export default Map;
