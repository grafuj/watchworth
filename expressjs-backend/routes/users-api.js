/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/userQueries');

//GET films
router.get('/', (req, res) => {
  console.log("router get request for /users")
  userQueries.getUsers()
    .then(users => {
      res.render('users' , {users});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//GET user/:id
router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  userQueries.getUserById(id)
    .then((user) => {
      res.render('user:', {user});
    });
});

module.exports = router;
