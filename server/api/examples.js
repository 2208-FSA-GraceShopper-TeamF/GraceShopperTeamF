const express = require("express");
const router = express.Router();
const { Example } = require("../db");

// All routes in here start with /api/examples go here

//returns all examples from the db
router.get("/", async (req, res, next) => {
  try {
    res.send(await Example.findAll());
  } catch (error) {
    console.log("Error in GET /api/examples :\n\n", error);
  }
});

//gets a single example from the db
router.get("/:id", async (req, res, next) => {
  try {
    res.send(await Example.findByPk(req.params.id));
  } catch (error) {
    console.log("Error in GET /api/examples/:id :\n\n", error);
  }
});

//edits a single example from the db
router.put("/:id", async (req, res, next) => {
  try {
    const edit = await Example.findByPk(req.params.id);
    res.send(await edit.update(req.body));
  } catch (error) {
    console.log("Edit request error", error);
    next(error);
  }
});

//deletes a single example from the db
router.delete("/:id", async (req, res, next) => {
  try {
    const removeExample = await Example.findByPk(req.params.id);
    await removeExample.destroy();
    res.send(removeExample);
  } catch (error) {
    console.log("Delete request error", error);
  }
});

module.exports = router;
