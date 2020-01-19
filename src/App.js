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

function App() {
  const profiles = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/benjovanic",
      icon: faLinkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/benjovanic",
      icon: faGithub
    },
    {
      name: "Keybase",
      url: "https://keybase.io/benjovanic",
      icon: faKeybase
    },
    {
      name: "StackExchange",
      url: "https://stackexchange.com/users/208850/benjovanic",
      icon: faStackExchange
    },
    {
      name: "Twitter",
      url: "https://twitter.com/benjovanic",
      icon: faTwitter
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/benjovanic",
      icon: faInstagram
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/benjovanic",
      icon: faFacebook
    }
  ];
  return (
    <Box m={2}>
      <Container maxWidth="sm">
        <Grid
          container
          style={{
            backgroundColor: blueGrey[100],
            padding: 10,
            borderRadius: 15
          }}
        >
          <Grid item xs={12} style={{ marginTop: 10 }}>
            <a href="/">
              <Avatar
                alt="Ben Jovanic"
                src="ben-jovanic.jpg"
                style={{ height: 180, width: 180, margin: "auto" }}
              />
            </a>
          </Grid>

          <Grid item xs={12} style={{ marginTop: 10 }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
              Ben Jovanic
            </Typography>
            <Typography align="center" variant="h6" component="h2" gutterBottom>
              Software Engineer, Vancouver
            </Typography>
          </Grid>

          <Grid container style={{ margin: 10 }}>
            {profiles.map(profile => {
              return (
                <Grid
                  key={profile.name}
                  item
                  xs={3}
                  style={{ textAlign: "center", margin: "10px 0" }}
                >
                  <a href={profile.url}>
                    <FontAwesomeIcon
                      color="#000"
                      icon={profile.icon}
                      size="3x"
                      title={profile.name}
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
