const db = require('./db');
const { migrate } = require('drizzle-orm/postgres-js/migrator');

async function runMigrations() {
    await migrate(db, {
        migrationsFolder: './migrations',
    });
}

runMigrations()
    .then(() => {
        console.log('Migrations successfully applied!');
    })
    .catch((error) => {
        console.error('Error applying migrations:', error);
    });

