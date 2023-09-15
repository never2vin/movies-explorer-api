require('dotenv').config();

const {
  PORT = 3000,
  MONGODB_URL,
  CLIENT_URL,
  JWT_SECRET,
  NODE_ENV,
} = process.env;

module.exports = {
  PORT,
  MONGODB_URL: NODE_ENV === 'production' ? MONGODB_URL : 'mongodb://127.0.0.1:27017/filmsdb',
  CLIENT_URL: NODE_ENV === 'production' ? CLIENT_URL : 'http://localhost:3001',
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'SECRET_KEY',
};
