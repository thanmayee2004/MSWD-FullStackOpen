const userRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

userRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", { title: 1 });

  response.status(200).json(users);
});

userRouter.post("/", async (request, response) => {
  const { name, username, password } = request.body;

  if (!username || !password) {
    return response.status(401).json({ error: "Username or Password missing" });
  }

  if (username.length < 3 || password.length < 3) {
    return response
      .status(401)
      .json({ error: "Username or Password too short" });
  }

  const alreadyExists = await User.findOne({ username });

  if (alreadyExists) {
    return response.status(401).json({ error: "Username already exists" });
  }

  const saltRounds = 10;

  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({ name, username, passwordHash });

  const returnedUser = await newUser.save();

  response.status(201).json(returnedUser);
});

module.exports = userRouter;
