const sequelize = require('../config/connection');
const { User } = require('../models');

//require('dotenv').config();
const userData = [
    {
        username: 'Ringo',
        email: 'ringo@test.com',
        password: 'pass1234',
        
    },
    {
        username: 'John',
        email: 'john@test.com',
        password: 'pass1234',
        
    },
    {
        username: 'Paul',
        email: 'paul@test.com',
        password: 'pass1234',
        
    },
    {
        username: 'George',
        email: 'george@test.com',
        password: 'pass1234',
        
    }

];
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;