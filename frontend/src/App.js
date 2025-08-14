import React, { useState } from 'react';
import GoogleMap3D from './components/GoogleMap3D';
import MarkersLayer from './components/MarkersLayer';
import PointsDisplay from './components/PointsDisplay';
import Challenges from './components/Challenges';
import Badges from './components/Badges';
import RouteDisplay from './components/RouteDisplay';

const initialLocations = [
    // Parks
    { id: 1, name: 'Golden Gate Park', description: 'A large urban park known for its eco-friendly initiatives.', latitude: 37.7694, longitude: -122.4862, category: 'Parks', score: 9 },
    { id: 2, name: 'Alamo Square Park', description: 'Famous for the Painted Ladies and sustainable landscaping.', latitude: 37.7764, longitude: -122.4346, category: 'Parks', score: 8 },
    { id: 3, name: 'Dolores Park', description: 'A vibrant park with a focus on community and green space.', latitude: 37.7596, longitude: -122.4269, category: 'Parks', score: 7 },
    
    // Farmers Markets
    { id: 4, name: 'Ferry Plaza Farmers Market', description: 'A vibrant farmers market supporting sustainable agriculture.', latitude: 37.7955, longitude: -122.3937, category: 'Farmers Markets', score: 10 },
    { id: 5, name: 'Heart of the City Farmers Market', description: 'A community-run market offering local produce.', latitude: 37.7813, longitude: -122.4110, category: 'Farmers Markets', score: 8 },
    { id: 6, name: 'Alemany Farmers Market', description: 'The oldest farmers market in California, promoting local farmers.', latitude: 37.7416, longitude: -122.4110, category: 'Farmers Markets', score: 9 },
    
    // Recycling Centers
    { id: 7, name: 'Recology San Francisco', description: 'A recycling and composting center.', latitude: 37.7521, longitude: -122.4058, category: 'Recycling Centers', score: 8 },
    { id: 8, name: 'SF Transfer Station', description: 'A facility for recycling and waste disposal.', latitude: 37.7437, longitude: -122.3880, category: 'Recycling Centers', score: 7 },
    { id: 9, name: 'Sunset Scavenger Recycling Center', description: 'Offers recycling services for various materials.', latitude: 37.7285, longitude: -122.3708, category: 'Recycling Centers', score: 9 },
    
    // Green Buildings
    { id: 10, name: 'California Academy of Sciences', description: 'A LEED Platinum-certified building with a living roof.', latitude: 37.7699, longitude: -122.4661, category: 'Green Buildings', score: 10 },
    { id: 11, name: 'San Francisco Public Utilities Commission Building', description: 'A sustainable building with solar panels and wind turbines.', latitude: 37.7750, longitude: -122.4183, category: 'Green Buildings', score: 9 },
    { id: 12, name: 'Exploratorium at Pier 15', description: 'A net-zero energy museum with innovative sustainable design.', latitude: 37.8014, longitude: -122.3977, category: 'Green Buildings', score: 10 },
    
    // Community Gardens
    { id: 13, name: 'Potrero del Sol Community Garden', description: 'A community space for urban agriculture.', latitude: 37.7502, longitude: -122.4068, category: 'Community Gardens', score: 8 },
    { id: 14, name: 'Fort Mason Community Garden', description: 'A garden promoting local food production.', latitude: 37.8061, longitude: -122.4310, category: 'Community Gardens', score: 9 },
    { id: 15, name: 'Alemany Farm', description: 'An organic farm fostering community engagement.', latitude: 37.7385, longitude: -122.4110, category: 'Community Gardens', score: 10 },
    
    // Eco-Friendly Restaurants
    { id: 16, name: 'Greens Restaurant', description: 'A vegetarian restaurant focusing on organic ingredients.', latitude: 37.8060, longitude: -122.4329, category: 'Rest', score: 9 },
    { id: 17, name: 'The Plant Cafe Organic', description: 'Offers organic and locally sourced meals.', latitude: 37.7955, longitude: -122.3937, category: 'Rest', score: 8 },
    { id: 18, name: 'Gracias Madre', description: 'A vegan restaurant emphasizing sustainability.', latitude: 37.7616, longitude: -122.4210, category: 'Rest', score: 7 },
    
    // Bike Sharing Stations
    { id: 19, name: 'Bay Wheels Station - Market at 10th', description: 'A bike-sharing station promoting sustainable transportation.', latitude: 37.7763, longitude: -122.4170, category: 'Bike', score: 8 },
    { id: 20, name: 'Bay Wheels Station - Embarcadero at Sansome', description: 'Provides access to shared bikes for eco-friendly commuting.', latitude: 37.8055, longitude: -122.4030, category: 'Bike', score: 9 },
    { id: 21, name: 'Bay Wheels Station - Townsend at 7th', description: 'A convenient location for bike sharing near Caltrain.', latitude: 37.7766, longitude: -122.3960, category: 'Bike', score: 7 },
    
    // Solar Installations
    { id: 22, name: 'Sunrun Headquarters', description: 'A company specializing in residential solar installations.', latitude: 37.7890, longitude: -122.3900, category: 'Solar Installations', score: 8 },
    { id: 23, name: 'Pacific Energy Center', description: 'Offers resources for energy efficiency and solar power.', latitude: 37.7880, longitude: -122.4010, category: 'Solar Installations', score: 9 },
    { id: 24, name: 'Sunset Reservoir Solar Array', description: 'One of the largest municipal solar projects in the U.S.', latitude: 37.7470, longitude: -122.4860, category: 'Solar Installations', score: 10 },
    
    // Environmental Organizations
    { id: 25, name: 'Sierra Club San Francisco Bay Chapter', description: 'Advocates for environmental conservation and sustainability.', latitude: 37.8054, longitude: -122.4324, category: 'Environmental Organizations', score: 9 },
    { id: 26, name: '350 Bay Area', description: 'Focuses on grassroots solutions for climate change.', latitude: 37.8086, longitude: -122.4098, category: 'Environmental Organizations', score: 10 },
    { id: 27, name: 'Friends of the Urban Forest', description: 'Promotes tree planting and urban greening initiatives.', latitude: 37.7749, longitude: -122.4194, category: 'Environmental Organizations', score: 9 },
    
    // Electric Vehicle Charging Stations
    { id: 28, name: 'EVgo Charging Station - Mission Bay', description: 'Provides fast-charging options for electric vehicles.', latitude: 37.7671, longitude: -122.3921, category: 'EV Charging Stations', score: 8 },
    { id: 29, name: 'ChargePoint - Financial District', description: 'Offers EV charging near key business areas.', latitude: 37.7936, longitude: -122.3967, category: 'EV Charging Stations', score: 9 },
    { id: 30, name: 'Tesla Supercharger - Marina District', description: 'Fast charging for Tesla vehicles.', latitude: 37.8055, longitude: -122.4321, category: 'EV Charging Stations', score: 10 },
    
    // Nature Reserves
    { id: 31, name: 'Presidio of San Francisco', description: 'A historic park with native habitat restoration.', latitude: 37.7989, longitude: -122.4662, category: 'Nature Reserves', score: 9 },
    { id: 32, name: 'Twin Peaks Natural Area', description: 'A scenic reserve with restored native plants.', latitude: 37.7544, longitude: -122.4477, category: 'Nature Reserves', score: 8 },
    { id: 33, name: 'Fort Funston', description: 'A beachside nature reserve with restored dunes.', latitude: 37.7155, longitude: -122.5011, category: 'Nature Reserves', score: 9 },
    
    // Water Conservation
    { id: 34, name: 'Hetch Hetchy Regional Water System', description: 'Manages water conservation and sustainability for the city.', latitude: 37.7730, longitude: -122.4194, category: 'Water Conservation', score: 8 },
    { id: 35, name: 'San Francisco Public Utilities Water Conservation Garden', description: 'A garden showcasing drought-tolerant landscaping.', latitude: 37.7392, longitude: -122.3978, category: 'Water Conservation', score: 7 },
    { id: 36, name: 'Bayview Hunters Point EcoCenter', description: 'Focuses on environmental justice and sustainable water use.', latitude: 37.7332, longitude: -122.3739, category: 'Water Conservation', score: 8 },
    
    // Bird Watching Areas
    { id: 37, name: 'Heron’s Head Park', description: 'A prime spot for bird watching and wetland restoration.', latitude: 37.7395, longitude: -122.3747, category: 'Bird Watching', score: 8 },
    { id: 38, name: 'Crissy Field Marsh', description: 'A restored tidal marsh hosting diverse bird species.', latitude: 37.8038, longitude: -122.4658, category: 'Bird Watching', score: 9 },
    { id: 39, name: 'Pier 94 Wetlands', description: 'A lesser-known bird-watching location near industrial wetlands.', latitude: 37.7431, longitude: -122.3814, category: 'Bird Watching', score: 7 },
    
    // Fishing Areas
    { id: 40, name: 'Lake Merced', description: 'A popular fishing spot with trails for hunting education.', latitude: 37.7242, longitude: -122.4935, category: 'Fishing Areas', score: 7 },
    { id: 41, name: 'Candlestick Point State Recreation Area', description: 'A fishing and recreational area with restored habitat.', latitude: 37.7117, longitude: -122.3864, category: 'Fishing Areas', score: 8 },
    { id: 42, name: 'China Basin', description: 'A waterfront area for fishing and bird watching.', latitude: 37.7763, longitude: -122.3917, category: 'Fishing Areas', score: 8 },
    
    // Educational Centers
    { id: 43, name: 'The Randall Museum', description: 'An environmental science museum with hands-on exhibits.', latitude: 37.7644, longitude: -122.4385, category: 'Educational Centers', score: 9 },
    { id: 44, name: 'San Francisco Botanical Garden', description: 'An expansive garden showcasing global biodiversity.', latitude: 37.7674, longitude: -122.4722, category: 'Educational Centers', score: 10 },
    { id: 45, name: 'California Native Plant Society', description: 'Promotes conservation and native plant restoration.', latitude: 37.7705, longitude: -122.4269, category: 'Educational Centers', score: 9 },
    
    // Scenic Areas
    { id: 46, name: 'Ocean Beach', description: 'A wide sandy beach with ecological preservation efforts.', latitude: 37.7597, longitude: -122.5107, category: 'Scenic Areas', score: 8 },
    { id: 47, name: 'Battery Spencer', description: 'A scenic overlook with sustainable tourism practices.', latitude: 37.8324, longitude: -122.4783, category: 'Scenic Areas', score: 10 },
    { id: 48, name: 'Mount Davidson', description: 'The highest natural point in San Francisco with hiking trails.', latitude: 37.7389, longitude: -122.4543, category: 'Scenic Areas', score: 8 },
    
    // Miscellaneous
    { id: 49, name: 'Treasure Island Greenway', description: 'A sustainable development area with bike paths and parks.', latitude: 37.8179, longitude: -122.3708, category: 'Miscellaneous', score: 8 },
    { id: 50, name: 'San Francisco Zoo’s Green Initiatives', description: 'Features sustainable practices and green spaces for animals.', latitude: 37.7335, longitude: -122.5022, category: 'Miscellaneous', score: 9 },
];

const App = () => {
    const [locations, setLocations] = useState(initialLocations);
    const [route, setRoute] = useState([]);
    const [points, setPoints] = useState(0);
    const [badges, setBadges] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [startingPoint, setStartingPoint] = useState(null);

    const handleAddToRoute = (location) => {
        if (!route.some((loc) => loc.id === location.id)) {
            if (!startingPoint) {
                setStartingPoint(location);
                alert(`${location.name} set as starting point!`);
            } else {
                setRoute((prev) => [...prev, location]);
                alert(`${location.name} added to your route!`);
            }
        } else {
            alert(`${location.name} is already in your route.`);
        }
    };

    return (
        <div>
            <h1>Eco-Friendly Route Tracker</h1>
            <GoogleMap3D
                start={startingPoint}
                stops={route}
                locations={locations}
                onAddToRoute={handleAddToRoute}
            >
                <MarkersLayer locations={locations} onAddToRoute={handleAddToRoute} />
            </GoogleMap3D>
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9' }}>
                <PointsDisplay points={points} />
                <Challenges challenges={challenges} />
                <Badges badges={badges} />
                <RouteDisplay route={route} startingPoint={startingPoint} />
            </div>
        </div>
    );
};

export default App;