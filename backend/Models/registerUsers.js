const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
    email: {
      type: String,
      unique: true,
      requied: true,
    },
    password: {
      type: String,
      requied: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = mongoose.model("Register", RegisterSchema);