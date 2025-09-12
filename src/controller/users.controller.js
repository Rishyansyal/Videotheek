const userService = require("../service/user.service");
const logger = require("../util/logger");
const usersDao = require("../dao/users.dao");

const usersController = {
  get: (req, res, next) => {
    let userId = req.params.userId;
    userService.get(userId, (error, users) => {
      if (error) return next(error);

      if (users) {
        userId === undefined
          ? res.render("users/table", { users: users })
          : res.render("users/details", { user: users[0] });
      }
    });
  },

  update: (req, res, next) => {
    let userId = req.params.userId;
    let email = req.body.email;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;

    if (req.method === "GET") {
      userService.get(userId, (error, users) => {
        if (error) return next(error);
        if (users) return res.render("users/edit", { user: users[0] });
      });
    } else {
      userService.update(
        email,
        userId,
        first_name,
        last_name,
        (error, result) => {
          if (error) return next(error);
          if (result) return res.redirect(301, `/users/${userId}/details`);
        }
      );
    }
  },

  create: (req, res, next) => {
    let customer_id = req.body.customer_id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let address = req.body.address;
    let district = req.body.district;
    let city = req.body.city;
    let postal_code = req.body.postal_code;
    let phone = req.body.phone;

    if (req.method === "GET") {
      userService.get(undefined, (error, users) => {
        if (error) return next(error);
        if (users) return res.render("users/create");
      });
    } else {
      userService.create(first_name, last_name, email, password, address, district, city, postal_code, phone, (error, result) => {
        if (error) return next(error);
        return res.redirect("/users");
      });
    }
  },

  // let active = req.body.active;
  // let create_date = req.body.create_date;
  // let last_update_customer = req.body.last_update;
  // let password = req.body.password;
  // //payment
  // let payment_id = req.body.payment_id;
  // //customerID
  // let staff_id = req.body.staff_id;
  // let rental_id = req.body.rental_id;
  // let amount = req.body.amount;
  // let payment_date = req.body.payment_date;
  // let last_update_payment = req.body.last_update_payment;
  // // store
  // let store_id = req.body.store_id;
  // let manager_staff_id = req.body.manager_staff_id;
  // let address_id = req.body.address_id;
  // let last_update_store = req.body.last_update_store;
  // //address
  // let address = req.body.address;
  // let address2 = req.body.address2;
  // let district = req.body.district;
  // let city_id = req.body.city_id;
  // let postal_code = req.body.postal_code;
  // let phone = req.body.phone;
  // let last_update_address = req.body.last_update_address;
  // let location = req.body.location;

  delete: (req, res, next) => {
    let userId = req.params.userId;
    userService.delete(userId, (error, result) => {
      // if (error) return next(error);
      if (error) {
        return res.status(500).json({
          status: 500,
          message: error,
          data: [],
        });
      }

      if (users) {
        return res.status(200).json({
          status: 200,
          message: "User deleted successfully",
          data: [],
        });
      }

      if (result) {
        userService.get(undefined, (error, users) => {
          if (error) return next(error);
          return res.render("users/users", { users: users });
        });
      }
    });
  },
};

module.exports = usersController;
