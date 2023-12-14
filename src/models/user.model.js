const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  phone_number: {
    type: String,
    required: [true, "Please provide your phone number"],
  },
  username: {
    type: String,
    required: [true, "Please provide your username"],
    minlength: [8, "Username must be 8 characters long"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your email"],
    minlength: [6, "Password must be 6 and above letters"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
