const express = require("express");
const router = express.Router();
const { User, Cart } = require("../db");

//return all users (/users)
router.get("/", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (error) {
    console.log("Error in GET /api/users :\n\n", error);
    next(error);
  }
});

//create new user
router.post("/signup", async (req, res, next) => {
  try {
    const myVar = await User.create(req.body);
    res.send(myVar);
  } catch (error) {
    console.log("Error creating User:", error.message);
    next(error);
  }
});

//log in one user
router.post("/login", async (req, res, next) => {
  try {
    res.send(await User.authenticate(req.body));
  } catch (error) {
    next(error);
  }
});

router.get("/:userId/cart", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: req.params.userId,
      },
    });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

router.post("/:userId/cart", async (req, res, next) => {
  try {
    const cart = await Cart.upsert(
      {
        userId: req.params.userId,
        products: req.body,
      },
      {
        conflictFields: ["userId"],
      }
    );

    res.send(cart);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
