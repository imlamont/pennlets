const express = require('express');

const db = require('../middleware/database');

const router = express.Router();

// Endpoint to create a new request
app.post('/', async (req, res) => {
    const { type, user_id, room_id } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO requests (type, user_id, room_id) VALUES ($1, $2, $3) RETURNING *`,
            [type, user_id, room_id]
        );

        res.status(201).json({ request: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the request.' });
    }
});


module.exports = router;