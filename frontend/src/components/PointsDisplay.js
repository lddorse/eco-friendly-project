import React from 'react';

const PointsDisplay = ({ points }) => (
    <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '5px'
    }}>
        <h3>Points: {points}</h3>
    </div>
);

export default PointsDisplay;
