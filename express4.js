const express = require("express");
const morgan = require("morgan"); // every detail of the request will be logged
const app = express(); // create an express app
const userModel = require("./models/user"); // import the user model
const db = require("./config/db"); // import the database connection

app.set("view engine", "ejs"); // set the view engine to ejs

app.use(morgan("dev")); // use morgan middleware
app.use(express.json()); // use express.json middleware
app.use(express.urlencoded({ extended: true })); // use express.urlencoded middleware
app.use(express.static("public")); // use express.static middleware to serve static files from the public folder

//example of a middleware
app.use((req, res, next) => {
  console.log("Middleware executed");
  return next();
});
//example of middle ware for a specific route
app.get(
  "/",
  (req, res, next) => {
    console.log("Middleware executed for / route");
    next();
  },
  (req, res) => {
    res.render("index");
  }
);

// app.get("/data-form", (req, res) => {
//   console.log(req.query);
//   res.send("Data received");
// });

app.post("/data-form", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.listen(3000);
