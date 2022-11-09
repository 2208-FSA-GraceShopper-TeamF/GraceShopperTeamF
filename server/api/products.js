const express = require("express");
const router = express.Router();
const { Products } = require("../db");

// All routes in here start with /api/Products go here

//returns all Productss from the db
router.get("/", async (req, res, next) => {
  try {
    res.send(await Products.findAll());
  } catch (error) {
    console.log("Error in GET /api/products :\n\n", error);
    next(error);
  }
});

//gets a single Products from the db
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await Products.findByPk(req.params.id));
  } catch (error) {
    console.log("Error in GET /api/Products/:id :\n\n", error);
    next(error);
  }
});

//edits a single Products from the db
router.put("/:id", async (req, res, next) => {
  try {
    const edit = await Products.findByPk(req.params.id);
    res.send(await edit.update(req.body));
  } catch (error) {
    console.log("Edit request error", error);
    next(error);
  }
});

//deletes a single Products from the db
router.delete("/:id", async (req, res, next) => {
  try {
    const removeProducts = await Products.findByPk(req.params.id);
    await removeProducts.destroy();
    res.send(removeProducts);
  } catch (error) {
    console.log("Delete request error", error);
    next(error);
  }
});

module.exports = router;
