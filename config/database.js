const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure this is called to load .env variables

const sequelize = new Sequelize(
    process.env.DB_NAME,     // Database name
    process.env.DB_USER,     // Database user
    process.env.DB_PASS,     // Database password
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT || 5432,
        logging: console.log, // Optional, logs all SQL queries to console
    }
);

module.exports = sequelize;
