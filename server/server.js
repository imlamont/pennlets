const express = require('express');
const cors = require('cors');
const session = require('express-session');

const passport = require("./middleware/passport");

const auth_router = require("./routes/auth");
const data_router = require("./routes/data");

require('dotenv').config();

// Allows for communication from front and backend
const corsOptions = {
    origin: 'http://127.0.0.1:4173/',
    methods: "*",
    allowedHeaders: "*",
};

const port = process.env.SERVER_PORT;

const app = express();
app.use(cors(corsOptions));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use("/data", data_router);
app.use("/auth", auth_router);

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


// Test route to ensure connection
app.get('/api/test', (req, res) => {
    res.json({
        message: "test route from express"
    });
});


app.get('/', (req, res) => {
    res.redirect("/auth")
});

app.get('/error', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});