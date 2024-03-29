console.log("Building an Express Application, Assignment / Using Pug Template");
const express = require("express");
const morgan = require("morgan");
// const pug = require("pug");
// const fs = require("fs");

// Setting PORT
const app = express();
const PORT = 3005;

// Static files to import the style file and asset file
app.use(express.static("./style"));
app.use(express.static("./assets"));

// Middleware
app.use(morgan("dev"));

// Creating the view engine
app.set("views", "./views"); // sets the view for the app
app.set("view engine", "pug"); // sets the template for the app from Pug file

// Creating a FIRST route template of a form from /index.pug file
app.get("/", (req, res) => {
  res.render("form");
});

// Creating a SECOND route template of images from /image.pug file
app.get("/images", (req, res) => {
  res.render("images");
});

// Creating a download image route view rendering the page
app.get("/download", (req, res) => {
  res.render("download");
});

app.get("/download-image", (req, res) => {
  res.download("./assets/gold.jpg");
});

//catching all routes to redirect the user wrong endpoint
app.all("*", (req, res) => {
  res.redirect("https://travel.sygic.com/404");
});

// listen and start server
app.listen(PORT, () => {
  console.log("PORT 3005");
});
