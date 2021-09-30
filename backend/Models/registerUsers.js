const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  }, {timestamp: true});

  module.exports = mongoose.model("Register", RegisterSchema, 'register');