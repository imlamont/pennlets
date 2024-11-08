import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate to redirect after sign out

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize navigate function

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/rooms');
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const data = await response.json();
        setRooms(data.rooms);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Function to handle sign-out
  const handleSignOut = () => {
    localStorage.removeItem('authToken');  // Remove the auth token from localStorage
    navigate('/');  // Redirect to the login page
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/* Sign Out Button */}
      <button
        onClick={handleSignOut}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#ff6347',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '1rem',
          alignSelf: 'flex-end',
        }}
      >
        Sign Out
      </button>

      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>Available Rooms</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1rem',
          marginTop: '2rem',
        }}>
          {rooms.map(room => (
            <div key={room.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333' }}>{room.location}</h2>
              <p style={{ fontSize: '1rem', color: '#555' }}>{room.description}</p>
              <p style={{ fontSize: '1rem', color: '#333' }}>Cost: ${room.cost_per_month}/month</p>
              <p style={{ fontSize: '1rem', color: '#333' }}>
                Available: {room.available ? 'Yes' : 'No'}
              </p>
              <p style={{ fontSize: '1rem', color: '#333' }}>
                Start Date: {new Date(room.start_date).toLocaleDateString()}
              </p>
              <p style={{ fontSize: '1rem', color: '#333' }}>
                End Date: {new Date(room.end_date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
