const { celebrate, Joi } = require('celebrate');
const messages = require('../utils/constants').validateMessages;

const validateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(messages),
    password: Joi.string().required().messages(messages),
    name: Joi.string().min(2).max(30)
      .messages(messages),
  }),
}, { abortEarly: false });

const validateUserUpdate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages(messages),
    name: Joi.string().required().min(2).max(30)
      .messages(messages),
  }),
}, { abortEarly: false });

module.exports = {
  validateUser,
  validateUserUpdate,
};
