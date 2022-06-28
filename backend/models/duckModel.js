const mongoose = require("mongoose");

const duckSchema = mongoose.Schema({
  longitude: {
    type: Number,
    required: [true, "Please input longitude"],
  },
  latitude: {
    type: Number,
    required: [true, "Please input latitude"],
  },
});

module.exports = mongoose.model("Ducks", duckSchema);
