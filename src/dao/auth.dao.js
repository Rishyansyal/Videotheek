const db = require("../db/sql/connection");

const userDao = {
  findByUsername: (username, callback) => {
    db.query("SELECT * FROM customer WHERE email = ?", [username], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]); // één user of undefined
    });
  }
};

module.exports = userDao;