const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const path = require('path');

const db = require("./database");

dotenv.config({ path: path.resolve(__dirname, '../config/.env') });

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
    new GoogleStrategy(
        // passed to google
        {
            clientID: googleClientId,
            clientSecret: googleClientSecret,
            callbackURL: `http://localhost:3001/auth/google/redirect`
        },
        // verify function
        function (accessToken, refreshToken, profile, done) {
            const email = profile.emails[0].value;
            const id = profile.id;

            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});