import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import PersonalSummary from '../PersonalSummary/PersonalSummary';
import SocialIcons from '../SocialIcons/SocialIcons';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <PersonalSummary />
      <SocialIcons />
      <Button
        style={{
          backgroundColor: '#ddd',
          margin: '10px auto 20px',
          textTransform: 'none',
        }}
        variant="contained"
        type="button"
        href="mailto:contact@benjovanic.com?subject=Contact%20Form%20-%20benjovanic.com"
      >
        Send me an email
      </Button>
      <Button
        style={{
          backgroundColor: '#ddd',
          margin: '10px auto 20px',
          textTransform: 'none',
        }}
        variant="contained"
        type="button"
        onClick={() => (history.push('/photography'))}
      >
        View Photography
      </Button>
    </>
  );
};

export default Home;
