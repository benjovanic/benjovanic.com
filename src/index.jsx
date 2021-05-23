import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HttpsRedirect from 'react-https-redirect';
import App from './App';

ReactDOM.render(
  <HttpsRedirect>
    <CssBaseline />
    <App />
  </HttpsRedirect>,
  document.querySelector('#root'),
);
