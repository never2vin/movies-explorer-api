const router = require('express').Router();

const authRouter = require('./auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

const auth = require('../middlewares/auth');

const HttpError = require('../error/http-error');

router.use('/', authRouter);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('*', (req, res, next) => {
  next(HttpError.NotFoundError());
});

module.exports = router;
