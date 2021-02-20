const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "Enter your first name.",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Enter your last name.",
  },
  email: {
    type: String,
    trim: true,
    required: "Enter an email address.",
  },
  password: {
    type: String,
    trim: true,
  },
});
userSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;