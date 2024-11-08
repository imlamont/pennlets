const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const path = require('path');

const db = require("./database");

dotenv.config({ path: path.resolve(__dirname, '../config/.env') });

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
// const jwtSecret = process.env.JWT_SECRET;
const jwtSecret = "secret";

console.log("jwt secret", jwtSecret);


// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: googleClientId,
//             clientSecret: googleClientSecret,
//             callbackURL: `http://localhost:3001/auth/google/redirect`,
//         },
//         async function (accessToken, refreshToken, profile, done) {
//             try {
//                 const email = profile.emails[0].value;
//                 const username = profile.displayName;
//                 const phone_number = null; // Google OAuth generally doesn't provide phone number

//                 // Check if the user already exists in Supabase
//                 const { data: existingUser, error: selectError } = await db
//                     .from('users')
//                     .select('*')
//                     .eq('email', email)
//                     .single(); // Single ensures we get one record or null

//                 if (selectError && selectError.code !== 'PGRST116') {
//                     return done(selectError);
//                 }

//                 // If user doesn't exist, insert them into the 'users' table
//                 let newUser = existingUser;
//                 if (!existingUser) {
//                     const { data: insertedUser, error: insertError } = await db
//                         .from('users')
//                         .insert({
//                             username,
//                             email,
//                             phone_number,
//                         })
//                         .select()
//                         .single(); // Fetch the inserted record

//                     if (insertError) {
//                         return done(insertError);
//                     }
//                     newUser = insertedUser;
//                 }

//                 return done(null, newUser); // Pass the user to serializeUser
//             } catch (error) {
//                 return done(error);
//             }
//         }
//     )
// );

passport.use(
    new GoogleStrategy(
        {
            clientID: googleClientId,
            clientSecret: googleClientSecret,
            callbackURL: `http://localhost:3001/auth/google/redirect`,
        },
        async function (accessToken, refreshToken, profile, done) {
            try {
                const email = profile.emails[0].value;
                const username = profile.displayName;
                const phone_number = null;

                const { data: existingUser, error: selectError } = await db
                    .from('users')
                    .select('*')
                    .eq('email', email)
                    .single();

                if (selectError && selectError.code !== 'PGRST116') {
                    return done(selectError);
                }

                let newUser = existingUser;
                if (!existingUser) {
                    const { data: insertedUser, error: insertError } = await db
                        .from('users')
                        .insert({
                            username,
                            email,
                            phone_number,
                        })
                        .select()
                        .single();

                    if (insertError) {
                        return done(insertError);
                    }
                    newUser = insertedUser;
                }

                // Create a JWT token
                const token = jwt.sign({ userId: newUser.id }, jwtSecret, { expiresIn: '1h' });

                // Pass the user and token to serializeUser
                return done(null, { user: newUser, token });
            } catch (error) {
                return done(error);
            }
        }
    )
);


// Serialize user into session
passport.serializeUser((result, done) => {
    // Access user from the result object
    done(null, result.user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
    try {
        const { data: user, error } = await db
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (error) return done(error);
        done(null, user);
    } catch (error) {
        done(error);
    }
});


module.exports = passport;