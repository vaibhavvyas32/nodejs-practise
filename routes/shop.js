const path = require("path"); //For Defining the path for the html

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  //Default
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
