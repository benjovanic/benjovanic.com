import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Home from './components/Home/Home';
import Photography from './components/Photography/Photography';

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
          <Router>
            <Switch>
              <Route default exact path="/" component={Home} />
              <Route exact path="/photography" component={Photography} />
            </Switch>
          </Router>
        </Grid>
      </Container>
    </Box>
  </StylesProvider>
);

export default App;
