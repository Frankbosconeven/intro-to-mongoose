const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  middlename: String,
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: String,
});

module.exports = require(user, userSchema);
