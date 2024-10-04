const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const session = require('express-session');
const passport = require('passport');


require('./middleware/passport');
require('dotenv').config();

// Allows for communication from front and backend
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "*",
    allowedHeaders: "*",
};

const port = 3001;

const app = express();
app.use(cors(corsOptions));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());


// Initialize the Database (Supabase)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in .env');
}
const supabase = createClient(supabaseUrl, supabaseKey);


// Test db connection
// app.get('/data', async (req, res) => {
//     const { data, error } = await supabase
//         .from('test')
//         .select('*');

//     if (error) {
//         console.error(error);
//         return res.status(500).send('Error fetching data');
//     }

//     res.json(data);
// });


// // Testing authentication
// app.get('/', (req, res) => {
//     res.send(' <a href="auth/google"> Authenticate with google</a>');
// });

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account',
    })
)

app.get(
    '/auth/google/redirect',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    function (req, res) {
        res.send('success')
    }
);


// Test route to ensure connection
app.get('/api/test', (req, res) => {
    res.json({
        message: "test route from express"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
