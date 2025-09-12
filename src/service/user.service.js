const { update } = require("../controller/users.controller");
const usersDao = require("../dao/users.dao");
const bcrypt = require("bcryptjs");

const userService = {
  get: (userId, callback) => {
    usersDao.get(userId, (error, users) => {
      if (error) return callback(error, undefined);
      if (users) {
        if (userId == undefined) return callback(undefined, users);
        let user = users.filter((user) => user.customer_id == userId)[0];
        console.log(user);
        return callback(undefined, [user]);
      }
    });
  },
  update: (email, userId, first_name, last_name, callback) => {
    usersDao.update(email, userId, first_name, last_name, (error, result) => {
      if (error) return callback(error, undefined);
      if (result) return callback(userId, (undefined, result));
    });
  },

  create: (
    first_name,
    last_name,
    email,
    password,
    address,
    district,
    city,
    postal_code,
    phone,
    callback
  ) => {
    if (!password) return callback(new Error("Password ontbreekt"));
    const cityMap = {
      Utrecht: 1,
      Rotterdam: 2,
      Amsterdam: 3,
      Eindhoven: 4,
      Breda: 5,
    };
    const city_id = cityMap[city] || 2;
    const store_id = Math.floor(Math.random() * 2) + 1;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return callback(err);
      usersDao.create(
        first_name,
        last_name,
        email,
        hash,
        address,
        district,
        city_id,
        postal_code,
        phone,
        store_id,
        (error, result) => {
          if (error) return callback(error);
          return callback(undefined, result);
        }
      );
    });
  },

  delete: (userId, callback) => {
    usersDao.delete(userId, (error, users) => []);
    let user = users.filter((user) => user.customer_id == userId[0]);
    return callback(undefined, [user]);
  },
};

module.exports = userService;
