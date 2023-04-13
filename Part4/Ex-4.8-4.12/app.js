const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const { info, error } = require("./utils/logger");
const { MONGODB_URI } = require("./utils/config");
const blogRouter = require("./controller/blogs");
const userRouter = require("./controller/users");
const loginRouter = require("./controller/login");

const User = require("./models/user");

mongoose.connect(MONGODB_URI).then((result) => {
  if (result) {
    info("Connected to database");
  } else {
    error("Error connecting to database");
  }
});

app.use(cors());
app.use(express.json());

const tokenExtractor = (request, response, next) => {
  if (!request.headers["authorization"]) return next();

  const authorization = request.get("Authorization");
  const token = authorization.substring(7);
  request.token = token;

  next();
};

const userExtractor = async (request, response, next) => {
  const token = request.token;
  if (!token) return next();

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({ error: "Invalid token" });
  }

  const tokenUserId = decodedToken.id;

  const user = await User.findById(tokenUserId);

  request.user = user;

  // console.log(user);

  next();
};

app.use(tokenExtractor);
// app.use(userExtractor);

app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);
app.use("/api/blogs", userExtractor, blogRouter);

module.exports = app;
