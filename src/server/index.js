/**
 * Main server for the Community Occupancy and Utilization Portal
 * Server both the API and the React front-end
 *
 * @author mtownsend
 * @since Oct 2017
 **/

'use strict';

import express from 'express';
import config from 'config';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import api from './api';

const app = express();

// Configure passport for authentication
app.use(session({ secret: 'thisistotallysecure' }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'client')));

// Send all api requests to the api router
app.use('/api', api);

// Send everything else to index.html, so react-router renders the route in the client
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

const server = app.listen(config.get('server.port'), function () {
  console.log(`Running on port ${server.address().port}`);
});