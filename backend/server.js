const express = require("express");
const dotenv = require("dotenv");
const data = require("./config/db.json");
const dbConnect = require ("./config/dbConnect");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

dbConnect();

// questo definisce un endpoint su localhost:3000/data che ritorna una stringa "hello world"
app.get("/", (req, res) => {
  res.send({ message: "ciao mondo!" }).status(200);
});

app.get("/m", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is online on localhost: ${PORT} `);
});
