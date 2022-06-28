const mongoose = require("mongoose");

const duckSchema = mongoose.Schema({
  longitude: {
    type: String,
    required: [true, "Please input longitude"],
  },
  latitude: {
    type: String,
    required: [true, "Please input latitude"],
  },
});

module.exports = mongoose.model("Ducks", duckSchema);
