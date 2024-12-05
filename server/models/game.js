const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    sales: { type: Number, required: true },
});

module.exports = mongoose.model("Game", schema);