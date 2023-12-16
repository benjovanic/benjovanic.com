import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';

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
            boxShadow: '#ccc 0px 0px 10px',
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/photography" component={Photos} />
          </Switch>
        </Grid>
      </Container>
    </Box>
  </StylesProvider>
);

export default App;
