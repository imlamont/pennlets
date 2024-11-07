const express = require('express');

const db = require('../middleware/database');

const router = express.Router();


// Endpoint to create a new room
app.post('/', async (req, res) => {
    const {
        location,
        description,
        available,
        cost_per_month,
        start_date,
        end_date,
        number_of_roommates,
        owner_id,
    } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO rooms (location, description, available, cost_per_month, start_date, end_date, number_of_roommates, owner_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [location, description, available, cost_per_month, start_date, end_date, number_of_roommates, owner_id]
        );

        res.status(201).json({ room: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while posting the room.' });
    }
});


// module.exports = { rooms_router: router };
module.exports = router;