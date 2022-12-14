const express = require("express");
const path = require("path");

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(express.urlencoded({ extended: false }));
//global variables

//routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

//static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
