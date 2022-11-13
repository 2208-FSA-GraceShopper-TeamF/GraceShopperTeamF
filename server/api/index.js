const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All routes in here start with API");
});

//***SPECIFIC ROUTES ***//
router.use("/products", require("./products"));

router.use("/users", require("./users.js"));

//If route is not set up properly the this error will trigger
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
