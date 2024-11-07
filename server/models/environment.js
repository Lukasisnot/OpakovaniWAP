const mongoose = require("mongoose");

const schema = mongoose.Schema({
    biom: { type: String, required: true },
    species: { type: String, required: true },
});

module.exports = mongoose.model("Environment", schema);