const express = require('express');
const db = require('../middleware/database');
const router = express.Router();

// Endpoint to create a new request
router.post('/', async (req, res) => {
    const { type, user_id, room_id } = req.body;

    try {
        // Insert data using Supabase client
        const { data, error } = await db
            .from('requests') // Table name
            .insert([
                {
                    type: type,
                    user_id: user_id,
                    room_id: room_id
                }
            ])
        // Handle error if any occurs
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while creating the request.' });
        }

        // Return the inserted data
        res.status(201).json({ request: data[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the request.' });
    }
});

module.exports = router;
