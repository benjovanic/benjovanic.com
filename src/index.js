import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import App from "./App";
import HttpsRedirect from "react-https-redirect";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </ThemeProvider>,
  document.querySelector("#root")
);
