// import React, { useState, useEffect } from 'react';
// import { supabase } from './supabaseClient';

// const RoomForm = () => {
//   const [formData, setFormData] = useState({
//     location: '',
//     description: '',
//     available: true,
//     cost_per_month: '',
//     start_date: '',
//     end_date: '',
//     number_of_roommates: '',
//     owner_id: '', // Should be set based on the logged-in user
//   });

//   useEffect(() => {
//     const fetchUser = async () => {
//       console.log(await supabase.auth.getSession());
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       const userId = session?.user?.id;
//       console.log("userid:",userId);
//       if (userId) {
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           owner_id: userId,
//         }));
//       }
//     };
//     fetchUser();
//   }, []);


//   // Function to verify the token and fetch user data
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
//       if (userId) {
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           owner_id: data.userId,
//         }));
//       }
//     } catch (error) {
//       console.error('Error fetching user ID:', error);
//       setError('Failed to authenticate user.');
//       navigate('/'); // Redirect to login if authentication fails
//     }
//   };

//   // Fetch rooms and userId when the component loads
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       navigate('/'); // Redirect to login if no token found
//       return;
//     }

//     // Fetch User ID from JWT token
//     fetchUserId(token);

//     // Fetch rooms from the backend
//     const fetchRooms = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/rooms');
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data.rooms);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchRooms();
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
//       const response = await fetch('http://localhost:3001/api/rooms', {
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
//       <h2 style={{
//         fontSize: '1.5rem',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: '1.5rem',
//       }}>Post a Room</h2>

//       <div style={{ display: 'grid', gap: '1.5rem' }}>
//         <div>
//           <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="location">Location</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//             style={{
//               width: '100%',
//               padding: '0.75rem',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               outline: 'none',
//             }}
//           />
//         </div>

//         <div>
//           <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="cost_per_month">Cost per Month</label>
//           <input
//             type="number"
//             name="cost_per_month"
//             value={formData.cost_per_month}
//             onChange={handleChange}
//             required
//             style={{
//               width: '100%',
//               padding: '0.75rem',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               outline: 'none',
//             }}
//           />
//         </div>

//         <div>
//           <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="description">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             style={{
//               width: '100%',
//               padding: '0.75rem',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               outline: 'none',
//             }}
//           />
//         </div>

//         <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr' }}>
//           <div>
//             <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="start_date">Start Date</label>
//             <input
//               type="date"
//               name="start_date"
//               value={formData.start_date}
//               onChange={handleChange}
//               required
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 outline: 'none',
//               }}
//             />
//           </div>

//           <div>
//             <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="end_date">End Date</label>
//             <input
//               type="date"
//               name="end_date"
//               value={formData.end_date}
//               onChange={handleChange}
//               required
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 outline: 'none',
//               }}
//             />
//           </div>
//         </div>

//         <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr' }}>
//           <div>
//             <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="number_of_roommates">Number of Roommates</label>
//             <input
//               type="number"
//               name="number_of_roommates"
//               value={formData.number_of_roommates}
//               onChange={handleChange}
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 outline: 'none',
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       <button type="submit" style={{
//         width: '100%',
//         padding: '1rem',
//         backgroundColor: '#4f46e5',
//         color: '#fff',
//         fontWeight: '600',
//         borderRadius: '6px',
//         border: 'none',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s ease-in-out',
//       }}>
//         Post Room
//       </button>
//     </form>
//   );
// };

// export default RoomForm;



import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
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
    } catch (error) {
      console.error(error);
      alert('Error posting room');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '2rem',
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'grid',
      gap: '1rem',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Post a Room</h2>

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="cost_per_month"
        placeholder="Cost per Month"
        value={formData.cost_per_month}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="date"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="end_date"
        value={formData.end_date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="number_of_roommates"
        placeholder="Number of Roommates"
        value={formData.number_of_roommates}
        onChange={handleChange}
      />

      <button type="submit">Post Room</button>
    </form>
  );
};

export default RoomForm;
