import React, { useState } from 'react';

const AddLocationForm = ({ onAddLocation }) => {
    const [newLocation, setNewLocation] = useState({
        name: "",
        description: "",
        latitude: "",
        longitude: "",
        category: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddLocation(newLocation);
        setNewLocation({ name: "", description: "", latitude: "", longitude: "", category: "" });
    };

    return (
        <form onSubmit={handleSubmit} style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '5px'
        }}>
            <h3>Add Location</h3>
            <input type="text" placeholder="Name" value={newLocation.name} onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })} />
            <input type="text" placeholder="Description" value={newLocation.description} onChange={(e) => setNewLocation({ ...newLocation, description: e.target.value })} />
            <input type="number" placeholder="Latitude" value={newLocation.latitude} onChange={(e) => setNewLocation({ ...newLocation, latitude: e.target.value })} />
            <input type="number" placeholder="Longitude" value={newLocation.longitude} onChange={(e) => setNewLocation({ ...newLocation, longitude: e.target.value })} />
            <select value={newLocation.category} onChange={(e) => setNewLocation({ ...newLocation, category: e.target.value })}>
                <option value="">Select Category</option>
                <option value="Parks">Parks</option>
                <option value="Farmers Markets">Farmers Markets</option>
                <option value="Recycling Centers">Recycling Centers</option>
                <option value="Green Buildings">Green Buildings</option>
                {/* Add more categories */}
            </select>
            <button type="submit">Add Location</button>
        </form>
    );
};

export default AddLocationForm;
