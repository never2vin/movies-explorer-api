const router = require('express').Router();
const { register, login } = require('../controllers/auth');
const { validateUser, validateUserAuth } = require('../middlewares/request-validator');

router.post('/signup', validateUser, register);
router.post('/signin', validateUserAuth, login);

module.exports = router;
