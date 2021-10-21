const express = require("express");
const router = express.Router();

module.exports = router;

// Import our modular routers for /tips and /feedback
const apiRouter = require("./api");
const htmlRouter = require("./html");

router.use(htmlRouter);
router.use("./api/notes", apiRouter);

const app = express();

app.use("/tips", tipsRouter);
app.use("/feedback", feedbackRouter);
app.use("/diagnostics", diagnosticsRouter);

module.exports = app;
