const express = require("express");
const api = require("./routes/index");
const { clog } = require("./middleware/clog");
const PORT = process.env.port || 3001;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(api);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
