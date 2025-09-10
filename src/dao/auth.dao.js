const db = require("../db/sql/connection");

const userDao = {
  findByUsername: (username, callback) => {
    const sql = `
      SELECT staff_id AS id, email, password, 'staff' AS role
      FROM staff
      WHERE email = ?
      UNION ALL
      SELECT customer_id AS id, email, password, 'customer' AS role
      FROM customer
      WHERE email = ?
      LIMIT 1
    `;
    db.query(sql, [username, username, username], (err, results) => {
      if (err) return callback(err);
      return callback(null, results[0] || null);
    });
  }
};

module.exports = userDao;