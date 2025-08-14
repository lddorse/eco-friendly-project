import React from 'react';

const RouteDisplay = ({ route, startingPoint }) => (
    <div>
        <h3>Your Eco Route</h3>
        {startingPoint ? (
            <p>
                <strong>Starting Point:</strong> {startingPoint.name}
            </p>
        ) : (
            <p>Please select a starting point by clicking on a marker.</p>
        )}
        <ul>
            {route.map((location) => (
                <li key={location.id}>
                    {location.name} - Score: {location.score}
                </li>
            ))}
        </ul>
    </div>
);

export default RouteDisplay;
