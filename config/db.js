const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/express4").then(() => {
  console.log("Connected to database");
});

module.exports = db;
