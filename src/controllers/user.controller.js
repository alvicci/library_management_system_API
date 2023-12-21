const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const createUser = async (req, res) => {
  const { full_name, email, phone_number, username, password } = req.body;

  const user = new User({
    full_name,
    email,
    phone_number,
    username,
    password,
  });

  const savedUser = await user.save();

  console.log(savedUser._id);

  const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_SAUCE, {
    expiresIn: process.env.EXPIRES,
  });

  res.status(201).json({
    status: true,
    token,
    message: "User created successfully!!! 😎",
  });
};

const getUser = async (req, res) => {
  console.log(req.decode);
  const existUser = await User.findOne({ _id: req.decode.id });
  if (!existUser) {
    res.status(401).json({
      status: false,
      message: "You must register or login to see this user details",
    });
    return;
  }
  const foundUser = await User.findOne({ _id: req.params.id });
  if (!foundUser) {
    res
      .status(404)
      .json({ status: false, message: "User doesn't exist. Reconfirm ID!" });
    return;
  }
  res.status(200).json({ status: true, message: foundUser });
};

const userUpdate = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
  res.status(201).json({
    status: true,
    updatedUser,
  });
};

const protectUser = async function (req, res, next) {
  const authorization = req.headers.authorization;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }
  if (!token) {
    res.status(401).json({
      status: false,
      message: "Bruh, why are you peeping? Login or register to continue!",
    });
    return;
  }
  const decode = await promisify(jwt.verify)(token, process.env.SECRET_SAUCE);
  req.decode = decode;
  next();
};

module.exports = { createUser, getUser, userUpdate, protectUser };
