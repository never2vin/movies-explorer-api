const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');
const { empty, notURL } = require('../utils/constants').schemaMessages;

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, empty],
  },
  director: {
    type: String,
    required: [true, empty],
  },
  duration: {
    type: Number,
    required: [true, empty],
  },
  year: {
    type: String,
    required: [true, empty],
  },
  description: {
    type: String,
    required: [true, empty],
  },
  image: {
    type: String,
    required: [true, empty],
    validate: {
      validator: (v) => isURL(v),
      message: notURL,
    },
  },
  trailerLink: {
    type: String,
    required: [true, empty],
    validate: {
      validator: (v) => isURL(v),
      message: notURL,
    },
  },
  thumbnail: {
    type: String,
    required: [true, empty],
    validate: {
      validator: (v) => isURL(v),
      message: notURL,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, empty],
  },
  nameRU: {
    type: String,
    required: [true, empty],
  },
  nameEN: {
    type: String,
    required: [true, empty],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
