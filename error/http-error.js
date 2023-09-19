const {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_FORBIDDEN,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_CONFLICT,
} = require('http2').constants;

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }

  static BadRequestError(message) {
    return new HttpError(HTTP_STATUS_BAD_REQUEST, message);
  }

  static UnauthorizedError(message = 'Email или пароль неверный') {
    return new HttpError(HTTP_STATUS_UNAUTHORIZED, message);
  }

  static ForbiddenError(message) {
    return new HttpError(HTTP_STATUS_FORBIDDEN, message);
  }

  static NotFoundError(message) {
    return new HttpError(HTTP_STATUS_NOT_FOUND, message);
  }

  static ConflictError(message) {
    return new HttpError(HTTP_STATUS_CONFLICT, message);
  }
}

module.exports = HttpError;
