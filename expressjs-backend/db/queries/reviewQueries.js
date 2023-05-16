const db = require('../connection');

const getReviews = () => {
  return db.query('SELECT * FROM reviews;')
    .then(data => {
      return data.rows;
    });
};
const getReviewById = (id) => {
  return db.query('SELECT * FROM reviews WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};
const getReviewByName = (name) => {
  return db.query('SELECT * FROM reviews WHERE name = $1;', [name])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getReviews, getReviewById, getReviewByName };