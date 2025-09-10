const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rishyan1!',
  database: 'sakila'
});

// Kies een standaard wachtwoord
const plainPassword = 'WelkomStaff123!';

connection.query('SELECT email FROM staff', async (err, results) => {
  if (err) throw err;

  // 1 hash hergebruiken is sneller (zelfde wachtwoord voor iedereen)
  const hash = await bcrypt.hash(plainPassword, 10);

  let updated = 0;
  for (const row of results) {
    await new Promise((resolve, reject) => {
      connection.query(
        'UPDATE staff SET password = ? WHERE email = ?',
        [hash, row.email],
        (err2, result) => {
          if (err2) return reject(err2);
          updated += result.affectedRows;
          resolve();
        }
      );
    });
  }

  console.log(`Staff-wachtwoorden gezet. Aangepaste rijen: ${updated}`);
  connection.end();
});