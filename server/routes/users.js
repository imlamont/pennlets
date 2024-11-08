const express = require('express');
const db = require('../middleware/database');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        // Get all rooms from the database
        const { data, error } = await db
            .from('users')
            .select('*');

        // Handle error if any occurs
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while fetching the users.' });
        }

        // Return the fetched users
        res.status(200).json({ users: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the users.' });
    }
});


module.exports = router;
