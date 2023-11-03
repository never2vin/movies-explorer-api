const { HTTP_STATUS_OK, HTTP_STATUS_CREATED } = require('http2').constants;

const Movie = require('../models/movie');

const HttpError = require('../error/http-error');

const getMovies = (req, res, next) => Movie.find({ owner: req.user._id })
  .then((movies) => res.status(HTTP_STATUS_OK).send(movies))
  .catch(next);

const createMovie = (req, res, next) => Movie.create({ owner: req.user._id, ...req.body })
  .then((movie) => res.status(HTTP_STATUS_CREATED).send(movie))
  .catch(next);

const deleteMovie = (req, res, next) => Movie.findById(req.params.movieId)
  .orFail(HttpError.NotFoundError(req.baseUrl))
  .then((movie) => {
    if (movie.owner._id.toString() !== req.user._id) {
      throw HttpError.ForbiddenError(req.baseUrl);
    }

    return movie.deleteOne();
  })
  .then((movie) => res.status(HTTP_STATUS_OK).send(movie))
  .catch(next);

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
