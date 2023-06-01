const db = require('../connection');

//this will be the sql code that calculates the average based on the eight scores and adds it to the `overall_score` column.
const computerOverallScore = function(val) {
  return db.query(`
  INSERT INTO reviews (username, url, email, password, category)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *`, [val.username, val.url, val.email, val.password, val.category])
  .then((res) => {
    return res.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { computerOverallScore };
