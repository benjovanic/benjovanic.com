import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const Photography = () => {
  const history = useHistory();

  const [index, setIndex] = React.useState(-1);

  const photos = [
    {
      src: 'photos/DSCF1997.jpeg',
      width: 1280,
      height: 854,
      title: 'Buttle Lake, Strathcona Park',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1803.jpeg',
      width: 1280,
      height: 854,
      title: 'Abandoned bridge near Ucluelet',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1783.jpeg',
      width: 1280,
      height: 854,
      title: 'Kennedy River, Vancouver Island',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1334.jpeg',
      width: 1280,
      height: 854,
      title: 'Ruby Lake, Sunshine Coast',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1387.jpeg',
      width: 1280,
      height: 854,
      title: 'Cranes over Vancouver',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1362.jpeg',
      width: 854,
      height: 1280,
      title: 'Crown Imperial, Queen Elizabeth Park, Vancouver',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1150.jpeg',
      width: 1280,
      height: 1280,
      title: 'Under a bridge in Austin',
      description: 'This is a technique called Intentional Camera Movement (ICM).\nShot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1125.jpeg',
      width: 1280,
      height: 854,
      title: 'Our Moon',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/IMG_5934.jpeg',
      width: 1280,
      height: 854,
      title: 'Austin skyline',
      description: 'Shot using iPhone 13 Pro',
    },
    {
      src: 'photos/DSCF1051.jpeg',
      width: 854,
      height: 1280,
      title: 'Lions Gate Bridge, Vancouver',
      description: 'This photo has a 15 second exposure to get the light trails of the cars crossing the bridge.\nShot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0340.jpeg',
      width: 854,
      height: 1280,
      title: 'Kennedy River, Vancouver Island',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0855.jpeg',
      width: 1280,
      height: 854,
      title: 'Seaplane over Vancouver',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF1015.jpeg',
      width: 854,
      height: 1280,
      title: 'Maisie',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0575.jpeg',
      width: 1280,
      height: 854,
      title: 'Mountains',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0611.jpeg',
      width: 1280,
      height: 854,
      title: 'My father',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0782.jpeg',
      width: 1280,
      height: 854,
      title: 'Sunset from Stanley Park, Vancouver',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0784.jpeg',
      width: 1280,
      height: 854,
      title: 'Sunset from Stanley Park, Vancouver',
      description: 'I\'m using a neutral density filter here to increase the exposure to 2 minutes. This gives the sea it\'s smooth look.\nShot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0420.jpeg',
      width: 1280,
      height: 854,
      title: 'Seals near Ucluelet',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0341.jpeg',
      width: 1280,
      height: 854,
      title: 'Mountains',
      description: 'Shot using Fujifilm X-T2',
    },
    {
      src: 'photos/DSCF0130.jpeg',
      width: 854,
      height: 1280,
      title: 'Mystery',
      description: 'Shot using Fujifilm X-T2',
    },
  ];

  return (
    <Grid item xs={12} style={{ textAlign: 'center', margin: '10px 0' }}>
      <Button
        style={{
          backgroundColor: '#ddd',
          margin: '10px auto 20px',
          textTransform: 'none',
        }}
        variant="contained"
        type="button"
        onClick={() => (history.push('/'))}
      >
        Home
      </Button>
      <Typography align="center" variant="h4" component="h1" gutterBottom>
        Photography
      </Typography>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        plugins={[Captions]}
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </Grid>
  );
};

export default Photography;
