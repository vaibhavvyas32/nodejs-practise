const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //In order to go to the next function we have to use next to tell the middleware to go down.
  //It follows top to bottom approach.
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  // ...
});

const server = http.createServer(app);

server.listen(3000, console.log("Server is running at localhost:3000"));
