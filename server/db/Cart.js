const Sequelize = require("sequelize");
const db = require("./database");

const Cart = db.define("Cart", {
  userId: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  products: {
    type: Sequelize.JSONB,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Cart;
