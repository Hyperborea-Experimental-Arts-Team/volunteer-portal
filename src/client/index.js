import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './containers/Root';
//import * as ServiceWorker from './registerServiceWorker';

render(<Root />, document.getElementById('root'));

// TODO: Uncomment this to re-enable service worker caching
//ServiceWorker.register();
