const seedUsers = require("./user-seeds");
const seedTasks = require("./task-seeds");


require('dotenv').config();
console.log("1");
const sequelize = require("../config/connection");
console.log("2");

const seedAll = async() => {
    console.log("3");
    await sequelize.sync({ force:true });
    console.log("4");
    console.log('----------------------------');
    await seedUsers();
    console.log('----------------------------');
   // await seedTasks();

    console.log('----------------------------');
    console.log('DB fully seeded!');
    process.exit(0);
}


seedAll();