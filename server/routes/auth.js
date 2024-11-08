const express = require("express");
const passport = require('passport');

require('../middleware/passport');
require('dotenv').config();

const router = express.Router();
const jwt = require('jsonwebtoken');

const jwtSecret = 'secret';

const client_port = process.env.CLIENT_PORT;

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account',
    })
)

router.get('/google/redirect', passport.authenticate('google', {
    failureRedirect: '/',
}), (req, res) => {
    // After successful login, redirect to the frontend home page
    const token = req.user.token;
    // res.redirect('http://localhost:5173/home');
    console.log("reidirecting after succcesfful login")
    console.log("token:", token)
    res.redirect(`http://localhost:${client_port}/home?token=${token}`);
});


router.get(
    '/failure',
    (req,res)=>{
        alert(`There was an issue getting your info from ${req.query.strategy}\nPlease try again`);
        res.redirect("/")
    });


// route for frontend authentication
router.get('/', (req,res)=>{});


// route to get the user id from a jwt token
router.get('/getUserId', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Token missing' });

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Token invalid' });

        const userId = decoded.userId;
        res.json({ userId });
    });
});

module.exports = router;