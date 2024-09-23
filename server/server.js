const express = require('express');
const cors = require('cors');

// allows for communicaiton from front and backend
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "*",
    allowedHeaders: "*",
  };

const app = express();
app.use(cors(corsOptions));
const port = 3001;

// test route to ensure connection
app.get('/api/test', (req, res) => {
    res.json({
        message: "test route from express"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
