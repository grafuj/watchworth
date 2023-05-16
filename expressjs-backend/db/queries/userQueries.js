const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};
const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};
const getUserByName = (name) => {
  return db.query('SELECT * FROM users WHERE name = $1;', [name])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUsers, getUserById, getUserByName };