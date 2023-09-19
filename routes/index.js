const router = require('express').Router();

const authRouter = require('./auth');

const HttpError = require('../error/http-error');

router.use('/', authRouter);

router.use('*', (req, res, next) => {
  next(HttpError.NotFoundError('Ресурс не найден. Проверьте URL и метод запроса'));
});

module.exports = router;
