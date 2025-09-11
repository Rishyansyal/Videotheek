const database = require("../db/sql/connection");

const moviesDao = {
  get: (callback) => {
    database.query("SELECT * FROM film", (error, results) => {
      if (error) return callback(error);
      return callback(undefined, results);
    });
  },
};
module.exports = moviesDao;
