const userDao = require("../dao/auth.dao");
const bcrypt = require("bcryptjs");

const authService = {
  authenticate: (username, password, callback) => {
    userDao.findByUsername(username, (err, user) => {
      if (err) return callback(err);
      if (!user) return callback(null, false);

      bcrypt.compare(password, user.password, (err, valid) => {
        if (err) return callback(err);
        if (!valid) return callback(null, false);

        return callback(null, user);
      });
    });
  },
};

module.exports = authService;
