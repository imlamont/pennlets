import React, { useState } from 'react';

const RoomForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    available: true,
    cost_per_month: '',
    start_date: '',
    end_date: '',
    number_of_roommates: '',
    owner_id: '', // Should be set based on the logged-in user
  });

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
      const response = await fetch('http://localhost:3001/api/rooms', {
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
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1.5rem',
      }}>Post a Room</h2>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="cost_per_month">Cost per Month</label>
          <input
            type="number"
            name="cost_per_month"
            value={formData.cost_per_month}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              outline: 'none',
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="start_date">Start Date</label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="end_date">End Date</label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                outline: 'none',
              }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333', marginBottom: '0.5rem' }} htmlFor="number_of_roommates">Number of Roommates</label>
            <input
              type="number"
              name="number_of_roommates"
              value={formData.number_of_roommates}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </div>

      <button type="submit" style={{
        width: '100%',
        padding: '1rem',
        backgroundColor: '#4f46e5',
        color: '#fff',
        fontWeight: '600',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out',
      }}>
        Post Room
      </button>
    </form>
  );
};

export default RoomForm;
