const { celebrate, Joi } = require('celebrate');
const isURL = require('validator/lib/isURL');
const messages = require('../utils/constants').validateMessages;

const url = (value, helpers) => (
  isURL(value)
    ? value
    : helpers.error('string.urlCustomMethod')
);

const validateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(messages),
    password: Joi.string().required().messages(messages),
    name: Joi.string().min(2).max(30)
      .messages(messages),
  }),
}, { abortEarly: false });

const validateUserAuth = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(messages),
    password: Joi.string().required().messages(messages),
  }),
}, { abortEarly: false });

const validateUserUpdate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(messages),
    name: Joi.string().required().min(2).max(30)
      .messages(messages),
  }),
}, { abortEarly: false });

const validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages(messages),
    director: Joi.string().required().messages(messages),
    duration: Joi.number().required().messages(messages),
    year: Joi.string().required().messages(messages),
    description: Joi.string().required().messages(messages),
    image: Joi.string().required().custom(url).messages(messages),
    trailerLink: Joi.string().required().custom(url).messages(messages),
    thumbnail: Joi.string().required().custom(url).messages(messages),
    movieId: Joi.number().required().messages(messages),
    nameRU: Joi.string().required().messages(messages),
    nameEN: Joi.string().required().messages(messages),
  }),
}, { abortEarly: false });

const validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24)
      .messages(messages),
  }),
});

module.exports = {
  validateUser,
  validateUserAuth,
  validateUserUpdate,
  validateMovie,
  validateMovieId,
};
