const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const {readAndAppend, readFromFile} = require("../helpers/fsUtils");
const router = express.Router();

const api = () => {

router.get("/api/notes", (req, res) => {
    readFromFile(path.join(__dirname, "../db/db.json"), "utf-8")
      .then((data) => {
        res.json(JSON.parse(data));
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Unable to read todos." });
      });
  });

  router.post("/api/notes", (req, res) => {
    // Destructuring assignment for the items in req.body
    const { id, title, text } = req.body;
  
    // If all the required properties are present
    if (id && title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, "./db/db.json");
  
      const response = {
        status: "success",
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json("Error in posting note");
    }
  });
}
  module.exports = api;