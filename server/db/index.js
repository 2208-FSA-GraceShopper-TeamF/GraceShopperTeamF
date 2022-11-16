const db = require("./database");
const Products = require("./Products");
const User = require("./User");
const Cart = require("./Cart");

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(Products)
Products.hasMany(Cart)



module.exports = {
  db,
  Products,
  User,
  Cart
};
