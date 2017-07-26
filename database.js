const pgp = require('pg-promise')();
const connectionString = "postgres://douglaslubaway@localhost:5432/users";

const db = pgp(connectionString);

function insertUsers(email, password, callback) {
  return db.none((`
    INSERT INTO users (email, password)
    VALUES ($1, $2);
  `), [email, password], callback);
}

function checkUsers(email, callback) {
  return db.oneOrNone((`
    SELECT email, password FROM users
    WHERE email=$1;
  `), [email], callback);
}

module.exports = {
  insertUsers,
  checkUsers,
  db
};
