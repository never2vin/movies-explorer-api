const {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_FORBIDDEN,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_CONFLICT,
} = require('http2').constants;

const messages = require('../utils/constants').errorMessages;

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }

  static BadRequestError(route) {
    return new HttpError(HTTP_STATUS_BAD_REQUEST, messages[route][HTTP_STATUS_BAD_REQUEST]);
  }

  static UnauthorizedError(route = '*') {
    return new HttpError(HTTP_STATUS_UNAUTHORIZED, messages[route][HTTP_STATUS_UNAUTHORIZED]);
  }

  static ForbiddenError(route) {
    return new HttpError(HTTP_STATUS_FORBIDDEN, messages[route][HTTP_STATUS_FORBIDDEN]);
  }

  static NotFoundError(route = '*') {
    return new HttpError(HTTP_STATUS_NOT_FOUND, messages[route][HTTP_STATUS_NOT_FOUND]);
  }

  static ConflictError(route) {
    return new HttpError(HTTP_STATUS_CONFLICT, messages[route][HTTP_STATUS_CONFLICT]);
  }
}

module.exports = HttpError;
