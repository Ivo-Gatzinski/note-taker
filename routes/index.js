const express = require("express");
const router = express.Router();

module.exports = router;

// Import our modular routers for /api and /html
const apiRouter = require("./api");
const htmlRouter = require("./html");

router.use(htmlRouter);
router.use("./api/notes", apiRouter);

const app = express();

app.use("/html", htmlRouter);
app.use("/api", apiRouter);

module.exports = app;
