const { drizzle } = require('drizzle-orm/postgres-js');
const path = require('path');
const postgres = require('postgres');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });

const client = postgres(process.env.SUPABASE_DB_URL);
const db = drizzle(client);

module.exports = db;