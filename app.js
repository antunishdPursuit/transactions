// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
const transactionsController = require("./controllers/transactionsController.js");

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());
app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
  });
  
// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to transactions App");
});

app.use("/transactions", transactionsController);

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

// EXPORT
module.exports = app;