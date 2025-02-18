const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database");
const routes = require('./routes/auth');

const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());


app.use("/",routes);

// sequelize.sync({ force: false }).then(() => console.log("DB Synced"));

app.listen(3000, () => console.log("Server running on port 3000"));
