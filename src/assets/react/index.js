import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './Core/app';

import registerServiceWorker from './registerServiceWorker';

if (document.getElementById('root') !== null) {
    ReactDOM.render(<App/>, document.getElementById('root'));
    registerServiceWorker();
}