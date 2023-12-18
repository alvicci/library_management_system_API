const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
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
    required: [true, "Please provide your password"],
    minlength: [6, "Password must be 6 and above letters"],
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
