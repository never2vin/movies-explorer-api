const { HTTP_STATUS_OK } = require('http2').constants;

const HttpError = require('../error/http-error');

const User = require('../models/user');

const getCurrentUser = (req, res, next) => User.findById(req.user._id)
  .orFail(HttpError.NotFoundError(req.baseUrl))
  .then((user) => res.status(HTTP_STATUS_OK).send(user))
  .catch(next);

const updateUser = (req, res, next) => User.findByIdAndUpdate(
  req.user._id,
  req.body,
  { new: true, runValidators: true },
)
  .then((user) => res.status(HTTP_STATUS_OK).send(user))
  .catch(next);

module.exports = {
  getCurrentUser,
  updateUser,
};
