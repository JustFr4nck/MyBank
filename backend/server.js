const express = require("express");
const dotenv = require("dotenv");
const schema = require("./config/schema");
const mongoose = require("mongoose");
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
mongoose.connect(process.env.DB);


const example = new schema({

    newValue: 100,
    newMovement: "spesa"
});

example.save();


// questo definisce un endpoint su localhost:3000/data che ritorna una stringa "hello world"
app.get("/", (req, res) => {
  res.send({ message: "ciao mondo!" });
});


app.listen(PORT, () => {
  console.log(`Server is online on localhost: ${PORT} `);
});
