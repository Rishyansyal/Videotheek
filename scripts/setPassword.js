const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

// Pas deze gegevens aan naar jouw databaseconfiguratie
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rishyan1!',
  database: 'sakila'
});

// Bestaande gebruiker
const plainPassword = 'Welkom123!';

connection.query('SELECT email FROM customer', async (err, results) => {
  if (err) throw err;
  for (const row of results) {
    const hash = await bcrypt.hash(plainPassword, 10);
    await new Promise((resolve, reject) => {
      connection.query(
        'UPDATE customer SET password = ? WHERE email = ?',
        [hash, row.email],
        (err, result) => {
          if (err) return reject(err);
          console.log(`Wachtwoord ingesteld voor: ${row.email}`);
          resolve();
        }
      );
    });
  }
  console.log('Alle wachtwoorden ingesteld!');
  connection.end();
});