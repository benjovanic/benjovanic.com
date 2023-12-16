import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <HttpsRedirect>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </HttpsRedirect>,
  document.querySelector('#root'),
);
