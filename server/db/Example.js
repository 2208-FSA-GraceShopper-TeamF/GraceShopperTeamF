const { appendFileSync } = require("fs");
const Sequelize = require("sequelize");
const db = require("./database");

//Here is some starter code for defining your database table!

module.exports = db.define("Example", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  price: {
    type: Sequelize.FLOAT,
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://c8.alamy.com/comp/2EAK9WN/cartoon-cup-of-tea-with-happy-smiling-face-isolated-on-white-2EAK9WN.jpg",
  },
});
