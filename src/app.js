const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());

app.use("/api/v1/users", userRouter);

module.exports = app;
