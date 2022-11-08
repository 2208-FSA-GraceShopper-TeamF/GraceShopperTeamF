const Sequelize = require("sequelize");
const db = require("./database");

const Cart = db.define("Cart", {
    cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    productsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
});

module.exports = Cart;