// Constants
const { Model, DataTypes }  = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// Create user model
class Task extends Model {
    // this method checks the password with hashed password and then logs the user in
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true

        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },

        description: {
            type: DataTypes.STRING, 
            allowNull: false
        },

        due_date: {
            type: DataTypes.DATE,

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },

        task_tag: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        }


       

    },
    // Table configuration
    // TODO If I had time would format time better
    {
       
        sequelize, 
        // don't automatically update timestamp fields
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "task"

    }
);

module.exports = Task;