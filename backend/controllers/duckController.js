const asyncHandler = require("express-async-handler");

const Duck = require("../models/duckModel");

// @desc    get ducks
// @route   GET /api/ducks
// @access  Public

const getDucks = asyncHandler(async (req, res) => {
  const ducks = await Duck.find();
  res.status(200).json(ducks);
});

// @desc    set duck
// @route   POST /api/ducks
// @access  Public
const setDuck = asyncHandler(async (req, res) => {
  if (!req.body.longitude || !req.body.latitude) {
    res.status(400);
    throw new Error("Please specify a location ");
  }
  const duck = await Duck.create({
    lng: req.body.longitude,
    lat: req.body.latitude,
  });
  res.status(200).json(duck);
});

// const setDuck = asyncHandler(async (req, res) => {
//   if (!req.body.longitude || !req.body.latitude) {
//     res.status(400);
//     throw new Error("Please specify a location ");
//   }
//   console.log(req.body.longitude);
//   console.log(req.body.latitude);
//   const duck = await Duck.create({
//     location: {
//       type: "Point",
//       coordinates: [req.body.longitude, req.body.latitude],
//     },
//   });
//   res.status(200).json(duck);
// });

// @desc    set duck
// @route   PUT /api/ducks/:id
// @access  Public
const updateDuck = asyncHandler(async (req, res) => {
  const duck = await Duck.findById(req.params.id);

  if (!duck) {
    res.status(400);
    throw new Error("Ducks not found");
  }
  const updatedDuck = await Duck.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedDuck);
});

// @desc    get duck
// @route   GET /api/ducks/:id
// @access  Public
//OVERLAPS WITH GET /api/ducks AT THE MOMENT
const getDuck = asyncHandler(async (req, res) => {
  //   const duck = await Duck.findById(req.params.id);
  //   if (!duck) {
  //     res.status(400);
  //     throw new Error("Duck not found");
  //   }
  //   const oneDuck = await Duck.findById(req.params.id, req.body);
  //   res.status(200).json(oneDuck);
});

module.exports = {
  getDucks,
  getDuck,
  setDuck,
  updateDuck,
};
