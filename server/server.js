import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Allows for communication from front and backend
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "*",
    allowedHeaders: "*",
};

const app = express();
const port = 3001;
dotenv.config();

app.use(cors(corsOptions));

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


// Sample route to get data from a table
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
