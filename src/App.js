import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faKeybase,
  faTwitter,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  return (
    <Box m={2} borderRadius="16">
      <Container maxWidth="sm" borderRadius="16">
        <Grid
          container
          style={{
            backgroundColor: blueGrey[100],
            padding: 10,
            borderRadius: 15
          }}
        >
          <Grid item xs={12} style={{ marginTop: 10 }}>
            <Avatar
              alt="Ben Jovanic"
              src="https://s.gravatar.com/avatar/211c7928acd39d8185f6d428d71c88d5?s=180"
              style={{ height: 180, width: 180, margin: "auto" }}
            />
          </Grid>

          <Grid item xs={12} style={{ marginTop: 10 }}>
            <Typography
              align="center"
              variant="h4"
              component="h1"
              gutterTopgutterBottom
            >
              Ben Jovanic
            </Typography>
            <Typography align="center" variant="h6" component="h2" gutterBottom>
              Software Engineer, Vancouver
            </Typography>
          </Grid>

          <Grid container lg={12} style={{ margin: 10 }}>
            <Grid item xs={3} style={{ textAlign: "center", margin: "10px 0" }}>
              <a href="https://www.linkedin.com/in/benjovanic">
                <FontAwesomeIcon color="#000" icon={faLinkedin} size="3x" />
              </a>
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center", margin: "10px 0" }}>
              <a href="https://github.com/benjovanic">
                <FontAwesomeIcon color="#000" icon={faGithub} size="3x" />
              </a>
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center", margin: "10px 0" }}>
              <a href="https://keybase.io/benjovanic">
                <FontAwesomeIcon color="#000" icon={faKeybase} size="3x" />
              </a>
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center", margin: "10px 0" }}>
              <a href="https://twitter.com/benjovanic">
                <FontAwesomeIcon color="#000" icon={faTwitter} size="3x" />
              </a>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ textAlign: "center", margin: "10px 0" }}
            ></Grid>
            <Grid item xs={3} style={{ textAlign: "center", margin: "10px 0" }}>
              <a href="https://www.instagram.com/benjovanic">
                <FontAwesomeIcon color="#000" icon={faInstagram} size="3x" />
              </a>
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center", margin: "10px 0" }}>
              <a href="https://www.facebook.com/benjovanic">
                <FontAwesomeIcon color="#000" icon={faFacebook} size="3x" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
