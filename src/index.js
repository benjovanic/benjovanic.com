import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import HttpsRedirect from "react-https-redirect";

ReactDOM.render(
  <HttpsRedirect>
    <CssBaseline />
    <App />
  </HttpsRedirect>,
  document.querySelector("#root")
);
