import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const PersonalSummary = () => (
  <>
    <Grid item xs={12} style={{ marginTop: 10 }}>
      <a href="/">
        <Avatar
          alt="Ben Jovanic"
          src="ben-jovanic.jpg?v=2"
          style={{
            height: 180,
            width: 180,
            margin: 'auto',
            border: '1px solid #666',
          }}
        />
      </a>
    </Grid>

    <Grid item xs={12} style={{ marginTop: 10 }}>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Ben Jovanic
      </Typography>
      <Typography align="center" component="p" gutterBottom>
        Based in Vancouver, Canada
      </Typography>
    </Grid>
  </>
);

export default PersonalSummary;
