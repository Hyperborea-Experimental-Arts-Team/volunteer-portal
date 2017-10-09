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
import fs from 'fs';
import passport from 'passport';
import session from 'express-session';
import register from 'ignore-styles';
import md5File from 'md5-file';

// Ignore assets when rendering server-side
register(undefined, (mod, filename) => {
  const ext = ['.png', '.jpg', '.svg'].find(f => filename.endsWith(f));
  if (!ext) {
    return;
  }

  if (fs.statSync(filename).size < 10000) {
    const file = fs.readFileSync(filename).toString('base64')
    const mimeType = mimeTypes[ext] || 'image/jpg'
    mod.exports = `data:${mimeType};base64,${file}`
  } else {
    const hash = md5File.sync(filename).slice(0, 8)
    const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`)
    mod.exports = `/static/media/${bn}`;
  }
});

// Routes
import api from './api';
import universalLoader from './universal';

const app = express();

// Configure passport for authentication
app.use(session({ secret: 'thisistotallysecure' }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets
app.use('/static', express.static(path.resolve(__dirname, '..', '..', 'client', 'static')));

// Send all api requests to the api router
app.use('/api', api);

// Send everything else to index.html, so react-router renders the route in the client
app.use('*', universalLoader);

const server = app.listen(config.get('server.port'), function () {
  console.log(`Running on port ${server.address().port}`);
});