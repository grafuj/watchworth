/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const filmQueries = require('../db/queries/filmQueries');

//GET films
router.get('/films', (req, res) => {
  filmQueries.getFilms()
    .then(users => {
      res.render('users' , {users});

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//GET film/:id
router.get('/films/:id', (req, res) => {
  const id = req.params.id;
  client.query('SELECT * FROM films  WHERE id = $1', [id])
    .then((response) => {
      res.json(response.rows[0]);
    });
});

module.exports = router;
