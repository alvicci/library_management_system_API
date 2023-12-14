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

const testUser = new User({
  full_name: "Aisha Mohammed",
  email: "aisha.mohammed@example.com",
  phone_number: "08160123456",
  username: "aisha_m",
  password: "kaduna2023",
});

testUser.save();
