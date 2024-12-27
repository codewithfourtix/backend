//framework
// create a server
//app use
//middle ware

// Import dependencies
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// Create an Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies

// Session middleware
app.use(
  session({
    secret: "mySecretKey", // Replace with a secure secret key
    resave: false, // Avoid resaving unchanged sessions
    saveUninitialized: true, // Save uninitialized sessions
    cookie: {
      maxAge: 60000, // Session expiration time in milliseconds
      secure: false, // Set true for HTTPS
    },
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server!");
});

app.get("/set-session", (req, res) => {
  req.session.user = { name: "Ali", role: "developer" };
  res.send("Session data saved!");
});

app.get("/get-session", (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.send("No session data found.");
  }
});

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "Ali", { maxAge: 60000 }); // Set a cookie
  res.send("Cookie has been set!");
});

app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`Cookie retrieved: ${username}`);
  } else {
    res.send("No cookie found.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
