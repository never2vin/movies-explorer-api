const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

const HttpError = require('../error/http-error');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
  } catch (error) {
    return next(HttpError.UnauthorizedError());
  }

  return next();
};

module.exports = auth;
