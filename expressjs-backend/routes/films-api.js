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
router.get('/', (req, res) => {
  console.log("router get request for /films")
  filmQueries.getFilms()
    .then(films => {
      console.log("films:line 17 on films-api.js", films)
      res.json(films);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//GET film/:id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  filmQueries.getFilmById(id)
    .then((film) => {
      res.json(film);
    });
});

module.exports = router;
