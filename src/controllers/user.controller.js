const User = require("../models/user.model");

const createUser = (req, res) => {
  const { full_name, email, phone_number, username, password } = req.body;
  res.json({
    message: "Created successfully from controller",
  });
};

module.exports = { createUser };
