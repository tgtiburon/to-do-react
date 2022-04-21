const User = require("./User");
const Task = require("./Task");

// Create associations

// User can have many tasks
User.hasMany(Task, {
    foreignKey: "user_id",
    onDelete: "cascade",
});

// task can only belong to one user
Task.belongsTo(User, {
    foreignKey: "user_id",
});


module.exports = { User, Task };
