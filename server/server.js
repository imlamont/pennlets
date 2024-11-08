const express = require('express');
const cors = require('cors');
const session = require('express-session');
const { createClient } = require('@supabase/supabase-js');
const passport = require("./middleware/passport");

const auth_router = require("./routes/auth");
const rooms_router = require('./routes/rooms');
const requests_router = require('./routes/requests');
const users_router = require('./routes/users');

require('dotenv').config();

// Allows for communication from front and backend
// const corsOptions = {
//     origin: 'http://127.0.0.1:5173/',
//     methods: "*",
//     allowedHeaders: "*",
// };


const port = process.env.SERVER_PORT;

const app = express();
// app.use(cors(corsOptions));
app.use(cors({ origin: '*' }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth_router);
app.use("/api/rooms", rooms_router);
app.use("/api/requests", requests_router);
app.use("/api/users", users_router);


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
        .from('rooms')
        .select('*');

    if (error) {
        console.error(error);
        return res.status(500).send('Error fetching data');
    }

    res.json(data);
});


// // Testing authentication
// app.get('/', (req, res) => {
//     res.send(' <a href="auth/google"> Authenticate with google</a>');
// });



// Test route to ensure connection
app.get('/api/test', (req, res) => {
    res.json({
        message: "test route from express"
    });
});


app.get('/', (req, res) => {
    res.redirect("/auth")
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});