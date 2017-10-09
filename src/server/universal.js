import path from 'path';
import fs from 'fs';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Root from '../client/containers/Root';

export default (request, response) => {

  console.log('Universal rendering started...');

  // This will only work in production mode
  const filePath = path.resolve(__dirname, '..', '..', 'client', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Cannot read page template', err);
      return response.status(404).end();
    }

    const markup = renderToString(
      <Root />
    );

    /* Dunno about this stuff, but I'm sure I will soon
    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      res.redirect(301, context.url)
    } else {
      // we're good, send the response
      const RenderedApp = htmlData.replace('{{SSR}}', markup)
      res.send(RenderedApp)
    } */

    console.log(`TESTING:: ${markup} ::TESTING`);

    const RenderedApp = htmlData.replace('{{SSR}}', markup);
    response.send(RenderedApp)
  });
};