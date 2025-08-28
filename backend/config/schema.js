    const mongoose = require("mongoose");

    const {Schema, model} = mongoose;

    const movement = new Schema({

        newValue: Number,
        newMovement: String
    });

    const FinalSchema = model('FinalSchema', movement);

    module.exports = FinalSchema;