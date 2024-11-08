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
    street: '',
    city: '',
    state: '',
    zip_code: '',
    owner_id: '',
  });
  const [error, setError] = useState('');

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
      setFormData((prevFormData) => ({
        ...prevFormData,
        owner_id: data.userId,
      }));
    } catch (error) {
      console.error('Error fetching user ID:', error);
      setError('Failed to authenticate user.');
      navigate('/');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/');
      return;
    }
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
        street: '',
        city: '',
        state: '',
        zip_code: '',
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
        margin: '2rem auto',
        padding: '2rem',
        background: '#f7f9fc',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        display: 'grid',
        gap: '1.5rem',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#333',
          fontSize: '1.8rem',
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
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      />

      <h3
        style={{
          fontSize: '1.2rem',
          color: '#555',
          marginBottom: '0.5rem',
        }}
      >
        Street Address
      </h3>
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
        required
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        required
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      />
      <input
        type="text"
        name="zip_code"
        placeholder="Zip Code"
        value={formData.zip_code}
        onChange={handleChange}
        required
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
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
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
          resize: 'vertical',
          height: '120px',
        }}
      />

      <input
        type="date"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
        required
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      />

      <input
        type="date"
        name="end_date"
        value={formData.end_date}
        onChange={handleChange}
        required
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      />

      <input
        type="number"
        name="number_of_roommates"
        placeholder="Number of Roommates"
        value={formData.number_of_roommates}
        onChange={handleChange}
        style={{
          padding: '0.85rem',
          borderRadius: '10px',
          border: '1px solid #ddd',
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
          borderRadius: '12px',
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
