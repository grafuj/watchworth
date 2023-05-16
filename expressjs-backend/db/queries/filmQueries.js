const db = require('../connection');

const getFilms = () => {
  return db.query('SELECT * FROM films;')
    .then(data => {
      return data.rows;
    });
};
const getFilmById = (id) => {
  return db.query('SELECT * FROM films WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};
const getFilmByName = (name) => {
  return db.query('SELECT * FROM films WHERE name = $1;', [name])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getFilms, getFilmById, getFilmByName };