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
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Post a Room</h2>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Available:
        <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
      </label>
      <label>
        Cost per Month:
        <input type="number" name="cost_per_month" value={formData.cost_per_month} onChange={handleChange} required />
      </label>
      <label>
        Start Date:
        <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} required />
      </label>
      <label>
        End Date:
        <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} required />
      </label>
      <label>
        Number of Roommates:
        <input type="number" name="number_of_roommates" value={formData.number_of_roommates} onChange={handleChange} />
      </label>
      <button type="submit">Post Room</button>
    </form>
  );
};

export default RoomForm;
