import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';

const iconMap = {
    Parks: require('../icons/tree.png'),
    'Recycling Centers': require('../icons/recycle.png'),
    'Farmers Markets': require('../icons/crate.png'),
    'Green Buildings': require('../icons/building.png'),
    'Solar Installations': require('../icons/solar-panel.png'),
    'Environmental Organizations': require('../icons/env.png'),
    'EV Charging Stations': require('../icons/ev.png'),
    'Nature Reserves': require('../icons/nr.png'),
    'Water Conservation': require('../icons/wc.png'),
    'Bird Watching': require('../icons/bird.png'),
    'Fishing Areas': require('../icons/fish.png'),
    'Educational Centers': require('../icons/e.png'),
    'Scenic Areas': require('../icons/sa.png'),
    'Miscellaneous': require('../icons/m.png'),
    'Bike': require('../icons/b.png'),
    'Rest': require('../icons/r.png'),
    'Community Gardens': require('../icons/cg.png'),
};

const MarkersLayer = ({ locations, onAddToRoute }) => {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleMarkerClick = (markerId) => {
        setActiveMarker(markerId);
    };

    const handleCloseClick = () => {
        setActiveMarker(null);
    };

    return locations.map((loc) => (
        <div key={loc.id}>
            <Marker
                position={{ lat: loc.latitude, lng: loc.longitude }}
                icon={{
                    url: iconMap[loc.category],
                    scaledSize: { width: 40, height: 40 },
                }}
                onClick={() => handleMarkerClick(loc.id)}
            />
            {activeMarker === loc.id && (
                <InfoWindow
                    position={{ lat: loc.latitude, lng: loc.longitude }}
                    onCloseClick={handleCloseClick}
                >
                    <div>
                        <h3>{loc.name}</h3>
                        <p>{loc.description}</p>
                        <p><strong>Score:</strong> {loc.score} / 10</p>
                        <button onClick={() => onAddToRoute(loc)}>Add to Route</button>
                    </div>
                </InfoWindow>
            )}
        </div>
    ));
};

export default MarkersLayer;
