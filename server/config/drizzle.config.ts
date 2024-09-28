const { defineConfig } = require('drizzle-kit');


export default defineConfig({
  schema: '../models/schema.js',
  out: '../models/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
});
