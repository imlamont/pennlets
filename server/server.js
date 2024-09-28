const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// Allows for communication from front and backend
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "*",
    allowedHeaders: "*",
};

const app = express();
const port = 3001;
require('dotenv').config();

app.use(cors(corsOptions));

// Initialize the Database (Supabase)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in .env');
}
const supabase = createClient(supabaseUrl, supabaseKey);


// Test db connection
app.get('/data', async (req, res) => {
    const { data, error } = await supabase
        .from('test')
        .select('*');

    if (error) {
        console.error(error);
        return res.status(500).send('Error fetching data');
    }

    res.json(data);
});



// Test route to ensure connection
app.get('/api/test', (req, res) => {
    res.json({
        message: "test route from express"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
