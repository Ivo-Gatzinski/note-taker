const express = require("express");
const path = require("path");
const {readAndAppend, readFromFile} = require("../helpers/fsUtils");
const router = express.Router();

router.get("/", (req, res) => {
    readFromFile(path.join(__dirname, "../db/db.json"), "utf-8")
      .then((data) => {
        res.json(JSON.parse(data));
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Unable to read todos." });
      });
  });