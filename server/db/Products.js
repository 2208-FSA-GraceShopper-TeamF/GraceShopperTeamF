const Sequelize = require("sequelize");
const db = require("./database");

const Products = db.define("Products", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0.01,
    },
  },

  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    }
  },
  color: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      "https://c8.alamy.com/comp/2EAK9WN/cartoon-cup-of-tea-with-happy-smiling-face-isolated-on-white-2EAK9WN.jpg",
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Products;
