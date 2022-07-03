const cors = require("cors");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

console.log(`Hello Joe`.blue.bold);

connectDB();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/ducks", require("./routes/fdfRoutes"));

app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}`.bgGreen));
