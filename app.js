const express = require('express');
const mongoose = require('mongoose');

const helmet = require('helmet');
const cors = require('cors');

const { errors } = require('celebrate');
const rateLimit = require('./middlewares/rate-limit');
const errorHandler = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const router = require('./routes');

const {
  PORT,
  MONGODB_URL,
  CLIENT_URL,
} = require('./config');

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
})
  .then(() => { console.log('Connected to db'); })
  .catch((err) => console.log(err));

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
  }),
);

app.use(requestLogger);
app.use(rateLimit);
app.use(helmet());
app.use(express.json());

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
