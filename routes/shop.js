const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //Default
  res.send("<h1>Hello from expressjs</h1>");
});

module.exports = router;
