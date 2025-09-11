const movieService = require("../service/movies.service");
const logger = require("../util/logger");

const moviesController = {
  get: (req, res, next) => {
    movieService.get((error, results) => {
      if (error) return next(error);
      const movies = Array.isArray(results) ? results : [];
      return res.render("movies/movie", { movies });
    });
  },
};


module.exports = moviesController;