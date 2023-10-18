const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: false,
    },
    flag: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
); //associated timestamp information indicating when it was created or last updated

module.exports = mongoose.model("user", userSchema);