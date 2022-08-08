const express = require("express");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //A post request with a form.
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>'
    //If we simply put /add-product in action then it would send the res to /add-product not /admin/add-product
  );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
