const mongoose = require("mongoose");

// models need to be updated in fdfRoutes.js and duckController.js if modified

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
