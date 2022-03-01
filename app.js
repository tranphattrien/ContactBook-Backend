const express = require("express");
const { BadRequestError, errorHandler } = require("./app/errors");
const cors = require("cors");
const app = express();

const setupContactRoutes = require("./app/routes/contact.routes");
app.use(cors());

app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});
setupContactRoutes(app);

// handle 404 response
app.use((req, res, next) => {
  /* code o day se chay khi khong co route duoc dinh nghia nao khop voi yeu cau. Goi next() de chuyen sang middleware xu ly loi*/
  next(new BadRequestError(404, "Resource not found"));
});

// define error-handling middleware last, after ther app.use() and routes calls
app.use((err, req, res, next) => {
  /*middeware xu ly loi tap trung. Trong cac oan code xu ly o cac route, goi next (error) se chuyen ve middleware xu ly loi nay */
  errorHandler.handlerError(error, res);
});
module.exports = app;
