const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./util/path");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public"))); //A built-in way in expressjs to serve the files directly instead of sendFile. These files are readable only for the user.

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "pageNotFound.html"));
});

app.listen(3000, console.log("Server is running at localhost"));
