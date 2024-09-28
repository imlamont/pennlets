const { pgTable, serial, text, boolean, integer, decimal, uuid } = require('drizzle-orm/pg-core');

// Users table
const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    username: text('username').notNull(),
    email: text('email').notNull(),
    phone_number: text('phone_number'),
});

// Rooms table
const rooms = pgTable('rooms', {
    id: uuid('id').defaultRandom().primaryKey(),
    location: text('location').notNull(),
    description: text('description'),
    available: boolean('available').default(true),
    cost_per_month: decimal('cost_per_month', 10, 2).notNull(),
    start_date: text('start_date').notNull(),
    end_date: text('end_date').notNull(),
    number_of_roommates: integer('number_of_roommates'),
    owner_id: uuid('owner_id').references(() => users.id),
});

// Requests table
const requests = pgTable('requests', {
    id: uuid('id').defaultRandom().primaryKey(),
    type: text('type').notNull(),
    user_id: uuid('user_id').references(() => users.id),
    room_id: uuid('room_id').references(() => rooms.id),
});

module.exports = { users, rooms, requests };
