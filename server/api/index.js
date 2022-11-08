"use strict";
const express = require("express");
const router = express.Router();

//THIS IS YOUR ROUTER! SET UP YOUR ROUTES!//

//If no routes input dv view will display this message
router.get("/", (req, res) => {
  res.send("All routes in here start with API");
});

//***SPECIFIC ROUTES ***//
router.use("/examples", require("./examples"));

//If route is not set up properly the this error will trigger
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
