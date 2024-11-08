
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const RoomDetailsPage = () => {
//   const { roomId } = useParams(); // Extract roomId from URL
//   const [roomDetails, setRoomDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Hook for navigating

//   useEffect(() => {
//     const fetchRoomDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/rooms/${roomId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch room details');
//         }
//         const data = await response.json();
//         setRoomDetails(data.room);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchRoomDetails();
//   }, [roomId]);

//   if (loading) return <p style={{ textAlign: 'center' }}>Loading room details...</p>;
//   if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

//   return (
//     <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
//       <button
//         onClick={() => navigate('/home')}
//         style={{
//           padding: '0.5rem 1rem',
//           backgroundColor: '#4CAF50',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           fontSize: '1rem',
//           cursor: 'pointer',
//           marginBottom: '1rem',
//           display: 'inline-block',
//         }}
//       >
//         &larr; Back to Rooms
//       </button>

//       <div style={{
//         backgroundColor: '#fff',
//         padding: '2rem',
//         borderRadius: '8px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//         border: '1px solid #ddd',
//       }}>
//         <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Room Details</h1>
//         <h2 style={{ fontSize: '1.5rem', color: '#333', fontWeight: 'bold', marginBottom: '1rem' }}>
//           {roomDetails.location}
//         </h2>
//         <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>{roomDetails.description}</p>
//         <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
//           Cost: <strong>${roomDetails.cost_per_month}/month</strong>
//         </p>
//         <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
//           Available: <strong>{roomDetails.available ? 'Yes' : 'No'}</strong>
//         </p>
//         <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
//           Start Date: <strong>{new Date(roomDetails.start_date).toLocaleDateString()}</strong>
//         </p>
//         <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
//           End Date: <strong>{new Date(roomDetails.end_date).toLocaleDateString()}</strong>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RoomDetailsPage;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapComponent from './MapComponent'; // Import the Map component

const RoomDetailsPage = () => {
  const { roomId } = useParams(); // Extract roomId from URL
  const [roomDetails, setRoomDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigating

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/rooms/${roomId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch room details');
        }
        const data = await response.json();
        setRoomDetails(data.room);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading room details...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={() => navigate('/home')}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '1rem',
          display: 'inline-block',
        }}
      >
        &larr; Back to Rooms
      </button>

      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ddd',
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Room Details</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#333', fontWeight: 'bold', marginBottom: '1rem' }}>
          {roomDetails.location}
        </h2>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>{roomDetails.description}</p>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
          Cost: <strong>${roomDetails.cost_per_month}/month</strong>
        </p>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
          Available: <strong>{roomDetails.available ? 'Yes' : 'No'}</strong>
        </p>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
          Start Date: <strong>{new Date(roomDetails.start_date).toLocaleDateString()}</strong>
        </p>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '0.5rem' }}>
          End Date: <strong>{new Date(roomDetails.end_date).toLocaleDateString()}</strong>
        </p>

        {/* Insert MapComponent */}
        <div style={{ marginTop: '2rem' }}>
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
