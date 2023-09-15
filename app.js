const express = require('express');
const mongoose = require('mongoose');

const helmet = require('helmet');
const cors = require('cors');

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

app.use(helmet());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
