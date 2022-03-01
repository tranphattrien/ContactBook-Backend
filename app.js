const express = require("express");
const cors = require("cors");
const app = express();
const setupContactRoutes = require("./app/routes/contact.routes");
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ express: true }));

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});
setupContactRoutes(app);

module.exports = app;
