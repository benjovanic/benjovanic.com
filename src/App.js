import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
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
  faStackExchange,
  faStrava
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
    },
    {
      name: "Strava",
      url: "https://www.strava.com/athletes/31998038",
      icon: faStrava
    }
  ];
  return (
    <Box m={2}>
      <Container maxWidth="sm">
        <Grid
          container
          style={{
            backgroundColor: '#101357',
            padding: 10,
            borderRadius: 5,
            color: '#fff'
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
              Software Engineer in Vancouver, Canada
            </Typography>
            <Typography align="center" component="p" gutterBottom>
              Interested in elegant code and beautifully designed software.
            </Typography>
          </Grid>

          <Grid id="social-icons" container style={{ margin: 10 }}>
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
                      color="#fff"
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
