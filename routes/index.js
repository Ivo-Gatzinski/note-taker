const express = require("express");
const router = express.Router();

const apiRouter = require("./api");
const htmlRouter = require("./html");

router.use(htmlRouter);
router.use(apiRouter);

const app = express();

app.use("/html", htmlRouter);
app.use("/api", apiRouter);

module.exports = app;
module.exports = router;
