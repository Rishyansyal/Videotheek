const  movieDao = require("../dao/movies.dao");
const moviesService = {
    get:(movieId,callback)=>{
        movieDao.get(movieId,(error,movies)=>{
            if(error) return callback(error,undefined);
            if(movies) return callback(undefined,movies);
        });
    }
}

module.exports = moviesService;