const express = require('express');
const cors = require("cors");
const colorsController = require("./controllers/colorsController");
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Controllers
app.use("/colors", colorsController);

app.get("/", (req, res) => {
    res.send("Welcome to the colors App!");
})

//404 Page
app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})

module.exports = app;