const { HTTP_STATUS_OK } = require('http2').constants;
const { MONGO_DUPLICATE_KEY_ERROR } = require('../utils/constants');

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
  .orFail(HttpError.NotFoundError(req.baseUrl))
  .then((user) => res.status(HTTP_STATUS_OK).send(user))
  .catch((error) => {
    if (error.code === MONGO_DUPLICATE_KEY_ERROR) {
      next(HttpError.ConflictError());
      return;
    }

    next(error);
  });

module.exports = {
  getCurrentUser,
  updateUser,
};
