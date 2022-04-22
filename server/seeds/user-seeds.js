const sequelize = require('../config/connection');
const { User } = require('../models');


const userData = [
    {
        id: 1,
        username: 'Ringo',
        email: 'ringo@test.com',
        password: 'pass1234',
        
    },
    {
        id:2,
        username: 'John',
        email: 'john@test.com',
        password: 'pass1234',
        
    },
    {
        id:3,
        username: 'Paul',
        email: 'paul@test.com',
        password: 'pass1234',
        
    },
    {
        id:4,
        username: 'George',
        email: 'george@test.com',
        password: 'pass1234',
        
    }

];
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;