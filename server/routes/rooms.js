const express = require('express');
const db = require('../middleware/database');

const router = express.Router();


// Function to fetch latitude and longitude from address
const fetchCoordinates = async (address) => {
    const apiKey = ''; // put the api key for mapgl here
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return { latitude: location.lat, longitude: location.lng };
        } else {
            throw new Error('Failed to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Geocoding API Error');
    }
};




// Endpoint to create a new room
router.post('/create', async (req, res) => {
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
    console.log("creating a room");
    console.log(req.body);

    try {
        // Insert room data using Supabase client
        const { data, error } = await db
            .from('rooms') // Table name
            .insert([
                {
                    location,
                    description,
                    available,
                    cost_per_month,
                    start_date,
                    end_date,
                    number_of_roommates,
                    owner_id
                }
            ])
            .select('*');

        // Handle error if any occurs
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while posting the room.' });
        }

        // Return the inserted room data
        res.status(201).json({ room: data[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while posting the room.' });
    }
});

router.get('/', async (req, res) => {
    try {
        // Get all rooms from the database
        const { data, error } = await db
            .from('rooms')
            .select('*');

        // Handle error if any occurs
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while fetching the rooms.' });
        }

        // Return the fetched rooms
        res.status(200).json({ rooms: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the rooms.' });
    }
});

// Endpoint to get a specific room by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Get the room with the specified ID from the database
        const { data, error } = await db
            .from('rooms')
            .select('*')
            .eq('id', id);

        // Handle error if any occurs
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while fetching the room.' });
        }

        // Return the fetched room
        res.status(200).json({ room: data[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the room.' });
    }
});

module.exports = router;
