import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faKeybase,
  faTwitter,
  faFacebook,
  faInstagram,
  faStackOverflow,
  faStrava,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const profiles = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/benjovanic',
      icon: faLinkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/benjovanic',
      icon: faGithub,
    },
    {
      name: 'Keybase',
      url: 'https://keybase.io/benjovanic',
      icon: faKeybase,
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/459589/benjovanic',
      icon: faStackOverflow,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/benjovanic',
      icon: faTwitter,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/benjovanic',
      icon: faInstagram,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/benjovanic',
      icon: faFacebook,
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/31998038',
      icon: faStrava,
    },
  ];

  return (
    <Grid id="social-icons" container style={{ margin: 10 }}>
      {profiles.map((profile) => (
        <Grid
          key={profile.name}
          item
          xs={3}
          style={{ textAlign: 'center', margin: '10px 0' }}
        >
          <a href={profile.url}>
            <FontAwesomeIcon
              color="#000"
              icon={profile.icon}
              size="3x"
              title={profile.name}
              data-id="profile-icon"
            />
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialIcons;
