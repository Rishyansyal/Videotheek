const userDao = require("../dao/auth.dao");
const bcrypt = require("bcryptjs");

const authService = {
  authenticate: (username, password, callback) => {
    userDao.findByUsername(username, async (err, user) => {
      if (err) return callback(err);
      if (!user) return callback(null, false);
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return callback(null, false);
      callback(null, user);
    });
  }
};

module.exports = authService;