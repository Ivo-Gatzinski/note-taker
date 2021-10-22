const express = require("express");
const app = express.Router();

const apiRouter = require("./api");
const htmlRouter = require("./html");

app.use(htmlRouter);
app.use(apiRouter);

module.exports = app;
