// Constants
const { Model, DataTypes }  = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// Create user model
class User extends Model {
    // this method checks the password with hashed password and then logs the user in
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false

        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]    
            }
        }

    },
    // Table configuration
    {
        // Hooks for the password
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            // setup before lifecycle 'hook' for when user wants to update password
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password,10);
                return updatedUserData;
            }

        },
        // pass the sequelize connection
        sequelize, 
        // don't automatically update timestamp fields
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"

    }
);

module.exports = User;