import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PersonalSummary from './components/PersonalSummary/PersonalSummary';
import SocialIcons from './components/SocialIcons/SocialIcons';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => (
  <StylesProvider injectFirst>
    <Box m={2}>
      <Container maxWidth="sm">
        <Grid
          container
          style={{
            backgroundColor: '#101357',
            padding: 10,
            borderRadius: 5,
            color: '#fff',
          }}
        >
          <PersonalSummary />
          <SocialIcons />
          <ContactForm />
        </Grid>
      </Container>
    </Box>
  </StylesProvider>
);

export default App;
