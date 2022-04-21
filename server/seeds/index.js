const seedUsers = require("./user-seeds");
const seedTasks = require("./task-seeds");


require('dotenv').config();

const sequelize = require("../config/connection");


const seedAll = async() => {
 
    await sequelize.sync({ force:true });
 
    console.log('----------------------------');
    await seedUsers();
    console.log('----------------------------');
    await seedTasks();

    console.log('----------------------------');
    console.log('DB fully seeded!');
    process.exit(0);
}


seedAll();