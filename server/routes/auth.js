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

router.get(
    '/google/redirect',
    passport.authenticate('google', {
        failureRedirect: '/failure?strategy=google'
    }), (req, res) =>{
        res.redirect('/')
    }
);

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