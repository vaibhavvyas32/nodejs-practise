const http = require("http");
const bodyParser = require("body-parser"); //body parser library. To install do npm install --save body-parser

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //Has to be defined on the top for the parsing to work.

app.use("/add-product", (req, res, next) => {
  //A post request with a form.
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  //When add-product form is executed then it is directed here and redirected to / with res.redirect
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //Default
  res.send("<h1>Hello from expressjs</h1>");
});

app.listen(3000, console.log("Server is running at localhost"));
