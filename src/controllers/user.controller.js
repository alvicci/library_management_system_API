const User = require("../models/user.model");

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

  res.status(201).json({
    status: true,
    message: savedUser,
  });
};

const getUser = async (req, res) => {
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

module.exports = { createUser, getUser, userUpdate };
