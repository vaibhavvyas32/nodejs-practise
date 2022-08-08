const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  //A post request with a form.
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  //When add-product form is executed then it is directed here and redirected to / with res.redirect
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
