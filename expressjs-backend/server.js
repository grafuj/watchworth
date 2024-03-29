// load .env data into process.env
require('dotenv').config();

// Web server config
// const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
// const cookieSession =require('cookie-session')
// const bodyParses = require('body-parser');

const PORT = 8080;
const app = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1asdfasdf', 'extragoodgarbage123d', 'wfeoidvpuierwfksdfhk']
// }));

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(
//   '/styles',
//   sassMiddleware({
//     source: __dirname + '/styles',
//     destination: __dirname + '/public/styles',
//     isSass: false, // false => scss, true => sass
//   })
// );

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const filmApiRoutes = require('./routes/films-api');
const userApiRoutes = require('./routes/users-api');
const reviewApiRoutes = require('./routes/reviews-api');
// const login = require('./routes/login')
// const logout = require('./routes/logout')

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/films', filmApiRoutes);
app.use('/api/reviews', reviewApiRoutes);
app.use('/api/users', userApiRoutes);
// app.use('/login', login);
// app.use('/logout', logout);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  console.log("here: testing where this appears")
  res.render("index");
});

// app.use('*', passwordApiRoutes);

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });

// Listen on `port` and 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Example app listening on port ${PORT}`);
});