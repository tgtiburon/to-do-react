// Import the sequelize constructor
const Sequelize = require('sequelize');

let sequelize;
//hide credentials
require('dotenv').config();

//TODO: For heroku
if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    // If local use
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    });
    console.log('Connected to DB on port 5432');
};

module.exports= sequelize;