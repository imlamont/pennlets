const express = require("express");
const passport = require('passport');

require('../middleware/passport');
require('dotenv').config();

const router = express.Router();

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
    console.log("redirecting to home");
    res.redirect('http://localhost:5173/home');
});


router.get(
    '/failure',
    (req,res)=>{
        alert(`There was an issue getting your info from ${req.query.strategy}\nPlease try again`);
        res.redirect("/")
    });

// route for frontend authentication
router.get(
    '/',
    (req,res)=>{

    });

module.exports = router;