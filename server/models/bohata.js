const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    knee: { type: Boolean, required: true },
});

module.exports = mongoose.model("RichMan", schema);