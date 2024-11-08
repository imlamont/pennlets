// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RoomForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     location: '',
//     description: '',
//     available: true,
//     cost_per_month: '',
//     start_date: '',
//     end_date: '',
//     number_of_roommates: '',
//     owner_id: '', // Will be set based on the logged-in user
//   });
//   const [error, setError] = useState('');

//   // Function to fetch the user ID using token
//   const fetchUserId = async (token) => {
//     try {
//       const response = await fetch('http://localhost:3001/auth/getUserId', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch user ID');
//       }
//       const data = await response.json();
//       console.log('User ID:', data.userId);

//       // Update the formData state with owner ID
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         owner_id: data.userId,
//       }));
//     } catch (error) {
//       console.error('Error fetching user ID:', error);
//       setError('Failed to authenticate user.');
//       navigate('/'); // Redirect to login if authentication fails
//     }
//   };

//   // Fetch user ID and set form data when component loads
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       navigate('/'); // Redirect to login if no token found
//       return;
//     }

//     // Fetch the user ID using the token
//     fetchUserId(token);
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await fetch('http://localhost:3001/api/rooms/create', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) throw new Error('Failed to create room');

//       alert('Room posted successfully');
//       setFormData({
//         location: '',
//         description: '',
//         available: true,
//         cost_per_month: '',
//         start_date: '',
//         end_date: '',
//         number_of_roommates: '',
//         owner_id: '',
//       });
//     } catch (error) {
//       console.error(error);
//       alert('Error posting room');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{
//       maxWidth: '600px',
//       margin: '0 auto',
//       padding: '2rem',
//       background: '#fff',
//       borderRadius: '8px',
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//       display: 'grid',
//       gap: '1rem',
//     }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Post a Room</h2>

//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={formData.location}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="cost_per_month"
//         placeholder="Cost per Month"
//         value={formData.cost_per_month}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="description"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleChange}
//       />
//       <input
//         type="date"
//         name="start_date"
//         value={formData.start_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="end_date"
//         value={formData.end_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="number_of_roommates"
//         placeholder="Number of Roommates"
//         value={formData.number_of_roommates}
//         onChange={handleChange}
//       />

//       <button type="submit">Post Room</button>
//     </form>
//   );
// };

// export default RoomForm;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    available: true,
    cost_per_month: '',
    start_date: '',
    end_date: '',
    number_of_roommates: '',
    owner_id: '', // Will be set based on the logged-in user
  });
  const [error, setError] = useState('');

  // Function to fetch the user ID using token
  const fetchUserId = async (token) => {
    try {
      const response = await fetch('http://localhost:3001/auth/getUserId', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user ID');
      }
      const data = await response.json();
      console.log('User ID:', data.userId);

      // Update the formData state with owner ID
      setFormData((prevFormData) => ({
        ...prevFormData,
        owner_id: data.userId,
      }));
    } catch (error) {
      console.error('Error fetching user ID:', error);
      setError('Failed to authenticate user.');
      navigate('/'); // Redirect to login if authentication fails
    }
  };

  // Fetch user ID and set form data when component loads
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/'); // Redirect to login if no token found
      return;
    }

    // Fetch the user ID using the token
    fetchUserId(token);
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('http://localhost:3001/api/rooms/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to create room');

      alert('Room posted successfully');
      setFormData({
        location: '',
        description: '',
        available: true,
        cost_per_month: '',
        start_date: '',
        end_date: '',
        number_of_roommates: '',
        owner_id: '',
      });
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('Error posting room');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'grid',
        gap: '1rem',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#333',
          fontSize: '1.5rem',
        }}
      >
        Post a Room
      </h2>

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />
      <input
        type="number"
        name="cost_per_month"
        placeholder="Cost per Month"
        value={formData.cost_per_month}
        onChange={handleChange}
        required
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none',
          resize: 'vertical',
          minHeight: '100px',
        }}
      />
      <input
        type="date"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
        required
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />
      <input
        type="date"
        name="end_date"
        value={formData.end_date}
        onChange={handleChange}
        required
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />
      <input
        type="number"
        name="number_of_roommates"
        placeholder="Number of Roommates"
        value={formData.number_of_roommates}
        onChange={handleChange}
        style={{
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />

      <button
        type="submit"
        style={{
          padding: '1rem',
          fontSize: '1rem',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
      >
        Post Room
      </button>
    </form>
  );
};

export default RoomForm;
