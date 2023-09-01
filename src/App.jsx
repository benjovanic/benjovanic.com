import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonalSummary from './components/PersonalSummary/PersonalSummary';
import SocialIcons from './components/SocialIcons/SocialIcons';

const App = () => (
  <StylesProvider injectFirst>
    <Box m={2}>
      <Container maxWidth="sm">
        <Grid
          container
          style={{
            backgroundColor: 'rgb(182, 186, 202)',
            padding: 10,
            borderRadius: 5,
            color: '#000',
            boxShadow: '#ccc 0px 0px 10px'
          }}
        >
          <PersonalSummary />
          <SocialIcons />
          {/* <ContactForm /> */}
          <Button
            style={{ 
              backgroundColor: '#ddd', 
              margin: "10px auto 20px",
              textTransform: "none" 
            }}
            variant="contained"
            type="button"
            href="mailto:contact@benjovanic.com?subject=Contact%20Form%20-%20benjovanic.com"
          >
            Send me an email
          </Button>
        </Grid>
      </Container>
    </Box>
  </StylesProvider>
);

export default App;
