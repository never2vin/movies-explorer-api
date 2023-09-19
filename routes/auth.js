const router = require('express').Router();
const { register, login } = require('../controllers/auth');
const { validateUser } = require('../middlewares/request-validator');

router.post('/signup', validateUser, register);
router.post('/signin', validateUser, login);

module.exports = router;
