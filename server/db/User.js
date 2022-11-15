const Sequelize = require("sequelize");
const { ModuleFilenameHelpers } = require("webpack");
const db = require("./database");

const User = db.define("User", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true,
        }
    }},
);

User.authenticate = async({ username, password })=> {
    try{
        const user = await User.findOne({
            where: {
              username,
              password
            }});
           
        if(user){
            return user; 
          }
    }catch (error){
       console.error(error.message);
    }
  }

module.exports = User;