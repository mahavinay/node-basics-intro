require("dotenv").config(); // allows to read values from .env file

const express = require("express");
const peopleRouter = require("../routes/peopleRouter");

const app = express();

app.use(express.json());
app.use("/api/people", peopleRouter);

module.exports = app;
