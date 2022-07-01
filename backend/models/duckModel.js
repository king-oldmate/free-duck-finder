const mongoose = require("mongoose");

// models need to be updated in fdfRoutes.js and duckController.js if modified

// const duckSchema = mongoose.Schema({
//   longitude: {
//     type: String,
//     required: [true, "Please input longitude"],
//   },
//   latitude: {
//     type: String,
//     required: [true, "Please input latitude"],
//   },
// });

const duckSchema = mongoose.Schema({
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

module.exports = mongoose.model("Ducks", duckSchema);
