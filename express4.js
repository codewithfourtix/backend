const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Middleware executed");
  return next();
});

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

app.get("/data-form", (req, res) => {
  console.log(req.query);
  res.send("Data received");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.listen(3000);
