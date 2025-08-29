    const mongoose = require("mongoose");
    const {Schema, model} = mongoose;

    const movement = new Schema({

        newValue: Number,
        newMovement: String
    });

    const FinalSchema = model('database', movement);

    module.exports = FinalSchema;