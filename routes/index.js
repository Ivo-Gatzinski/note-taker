const express = require("express");
const router = express.Router();
const api = require("./routes/index.js");

const apiRouter = require("./api");
const htmlRouter = require("./html");

router.use(htmlRouter);
router.use(apiRouter);

const app = express();

app.use("/api", api);

module.exports = app;
module.exports = router;
