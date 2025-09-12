const database = require("../db/sql/connection");

const usersDao = {
  get: (userId, callback) => {
    database.query(
      userId == undefined
        ? "SELECT * FROM ??"
        : "SELECT * FROM ?? WHERE ?? = ?",
      userId == undefined ? ["customer"] : ["customer", "customer_id", userId],
      (error, results) => {
        if (error) return callback(error, undefined);
        if (results) return callback(undefined, results);
      }
    );
  },

    delete: (userId, callback) => {
  const sql = `
    DELETE FROM payment WHERE customer_id = ?;
    DELETE FROM rental WHERE customer_id = ?;
    DELETE FROM customer WHERE customer_id = ?;
    DELETE FROM address WHERE address_id NOT IN (
      SELECT address_id FROM customer
      UNION
      SELECT address_id FROM staff
      UNION
      SELECT address_id FROM store
    );
  `;
  database.query(
    sql,
    [userId, userId, userId], // aantal ? in volgorde
    (error, results) => {
      if (error) return callback(error, undefined);
      return callback(undefined, results);
    }
  );
},

  update: (email, userId, first_name, last_name, callback) => {
    database.query(
      "UPDATE ?? SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?", 
      ["customer", "email", email, "first_name", first_name, "last_name", last_name, "customer_id", userId],
      (error, results) => {
        if (error) return callback(error, undefined);
        if (results) return callback(undefined, results);
      }
    );
  },
  create: (first_name, last_name, email, hash, address, district, city_id, postal_code, phone, store_id, callback) => {
// location is currently set to a default value, you can modify it as needed
    const addressSql = `
      INSERT INTO address (address, district, city_id, postal_code, phone,location)
      VALUES (?, ?, ?, ?, ?,ST_GeomFromText('POINT(0 0)'))
    `;
      database.query(addressSql, [address, district, city_id, postal_code, phone], (err, addressResult) => {
      if (err) return callback(err);
      const address_id = addressResult.insertId;

      const customerSql = `
        INSERT INTO customer (store_id, first_name, last_name, email, address_id, password)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      database.query(customerSql, [store_id, first_name, last_name, email, address_id, hash], (err2, customerResult) => {
        if (err2) return callback(err2);
        return callback(undefined, { customer_id: customerResult.insertId, address_id });
      });
    });
  },
};

module.exports = usersDao;
