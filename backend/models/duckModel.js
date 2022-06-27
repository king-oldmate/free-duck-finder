const mongoose = require("mongoose");

const duckSchema = mongoose.Schema({
  location: {
    type: String,
    required: [true, "Please input coordinates"],
  },
});

module.exports = mongoose.model("Ducks", duckSchema);
