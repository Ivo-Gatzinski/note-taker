const express = require("express");
const path = require("path");
const router = express.Router();

const html = () => {
// GET Route for homepage
router.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for feedback page
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

}

module.exports = html;