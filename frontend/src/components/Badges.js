import React from 'react';

const Badges = ({ badges }) => (
    <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '5px'
    }}>
        <h3>Badges</h3>
        <ul>
            {badges.map((badge, index) => (
                <li key={index}>{badge}</li>
            ))}
        </ul>
    </div>
);

export default Badges;
