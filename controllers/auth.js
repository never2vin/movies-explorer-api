const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { HTTP_STATUS_OK, HTTP_STATUS_CREATED } = require('http2').constants;
const { MONGO_DUPLICATE_KEY_ERROR } = require('../utils/constants');
const { JWT_SECRET } = require('../config');

const SALT_ROUNDS = 10;

const HttpError = require('../error/http-error');

const User = require('../models/user');

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, SALT_ROUNDS)
    .then((hash) => User.create({ ...req.body, password: hash }))
    .then((user) => res.status(HTTP_STATUS_CREATED).send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      email: user.email,
      _id: user._id,
    }))
    .catch((error) => {
      if (error.code === MONGO_DUPLICATE_KEY_ERROR) {
        next(HttpError.ConflictError());
        return;
      }

      next(error);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .orFail(HttpError.UnauthorizedError(req.originalUrl))
    .then((user) => Promise.all([user, bcrypt.compare(password, user.password)]))
    .then(([user, isEqual]) => {
      if (!isEqual) {
        throw HttpError.UnauthorizedError(req.originalUrl);
      }

      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
      res.status(HTTP_STATUS_OK).send({ token });
    })
    .catch(next);
};

module.exports = {
  register,
  login,
};
