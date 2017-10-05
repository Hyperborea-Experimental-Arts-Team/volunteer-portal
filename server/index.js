/**
 * Main server for the Community Occupancy and Utilization Portal
 * Server both the API and the React front-end
 *
 * @author mtownsend
 * @since Oct 2017
 **/

'use strict';

const express = require('express');
const config = require('config');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const api = require('./api');

const app = express();

// Configure passport for authentication
app.use(session({ secret: 'thisistotallysecure' }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Send all api requests to the api router
app.use('/api', api);

// Send everything else to index.html, so react-router renders the route in the client
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const server = app.listen(config.get('server.port'), function () {
  console.log(`Running on port ${server.address().port}`);
});