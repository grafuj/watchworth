/*
 * All routes for Review Data are defined here
 * Since this file is loaded in server.js into api/reviews,
 *   these routes are mounted onto /api/reviews
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const reviewQueries = require('../db/queries/reviewQueries');

//GET films
router.get('/', (req, res) => {
  console.log("router get request for /reviews")
  reviewQueries.getreviews()
    .then(reviews => {
      res.render('reviews' , {reviews});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//GET review/:id
router.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  reviewQueries.getreviewById(id)
    .then((review) => {
      res.render('review:', {review});
    });
});

module.exports = router;
