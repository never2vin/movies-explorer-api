const mongoose = require('mongoose');
const validator = require('validator');
const {
  empty, min, max, notEmail,
} = require('../utils/constants').schemaMessages;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, empty],
    validate: {
      validator: (v) => validator.isEmail(v),
      message: notEmail,
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, empty],
    select: false,
  },
  name: {
    type: String,
    required: [true, empty],
    minlength: [2, min],
    maxlength: [30, max],
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
