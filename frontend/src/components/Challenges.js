import React from 'react';

const Challenges = ({ challenges }) => (
    <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '5px'
    }}>
        <h3>Challenges</h3>
        <ul>
            {challenges.map((challenge) => (
                <li key={challenge.id}>
                    {challenge.name} - {challenge.completed ? "✔ Completed!" : `${challenge.progress}/${challenge.goal}`}
                </li>
            ))}
        </ul>
    </div>
);

export default Challenges;
