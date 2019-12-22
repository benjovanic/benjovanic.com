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
  faInstagram,
  faStackExchange
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  const profiles = [
    {
      url: "https://www.linkedin.com/in/benjovanic",
      icon: faLinkedin
    },
    {
      url: "https://github.com/benjovanic",
      icon: faGithub
    },
    {
      url: "https://keybase.io/benjovanic",
      icon: faKeybase
    },
    {
      url: "https://twitter.com/benjovanic",
      icon: faTwitter
    },
    {
      url: "https://www.instagram.com/benjovanic",
      icon: faInstagram
    },
    {
      url: "https://www.facebook.com/benjovanic",
      icon: faFacebook
    },
    {
      url: "https://stackexchange.com/users/208850/benjovanic",
      icon: faStackExchange
    }
  ];
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
            {profiles.map(profile => {
              return (
                <Grid
                  item
                  xs={3}
                  style={{ textAlign: "center", margin: "10px 0" }}
                >
                  <a href={profile.url}>
                    <FontAwesomeIcon
                      color="#000"
                      icon={profile.icon}
                      size="3x"
                    />
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
