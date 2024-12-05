const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    wifiZasuvky: { type: Number, required: true },
    kolenoOffset: { type: Number, required: true },
});

module.exports = mongoose.model("Vaclav", schema);