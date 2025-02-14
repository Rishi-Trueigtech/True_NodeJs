const express = require("express");
const { sequelize } = require("./models");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log("Database Synced"))
  .catch((err) => console.error("Sync Error:", err));

module.exports = app;
