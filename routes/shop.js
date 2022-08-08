const path = require("path"); //For Defining the path for the html

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //Default
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
