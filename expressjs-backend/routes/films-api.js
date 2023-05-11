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
  console.log("router get request for /films")
  filmQueries.getFilms()
    .then(films => {
      res.render('films' , {films});
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
  filmQueries.getFilmById()
    .then((film) => {
      res.render('film:', {film});
    });
});

module.exports = router;
