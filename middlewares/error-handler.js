const {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
} = require('http2').constants;

const MongooseError = require('mongoose').Error;
const HttpError = require('../error/http-error');

const messages = require('../utils/constants').errorMessages;

const errorHandler = (err, req, res, next) => {
  console.log(err);

  const { status, message } = err;

  if (err instanceof HttpError) {
    res.status(status).send({ message });
    return next();
  }

  if (err instanceof MongooseError.CastError) {
    res
      .status(HTTP_STATUS_BAD_REQUEST)
      .send({ message: messages['*'][HTTP_STATUS_BAD_REQUEST] });
    return next();
  }

  if (err instanceof MongooseError.ValidationError) {
    res
      .status(HTTP_STATUS_BAD_REQUEST)
      .send({ message: `${Object.values(err.errors).map((error) => error.message).join('. ')}` });
    return next();
  }

  res
    .status(HTTP_STATUS_INTERNAL_SERVER_ERROR)
    .send({ message: messages['*'][HTTP_STATUS_INTERNAL_SERVER_ERROR] });
  return next();
};

module.exports = errorHandler;
