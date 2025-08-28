const mongoose = require("mongoose");
const schema = require("./schema");

mongoose.connect("mongodb://localhost:27017/BankData");


const example = new schema({

    newValue: 100,
    newMovement: "spesa"
});

await example.save();