import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import 'yet-another-react-lightbox/styles.css';

const Photos = () => {
  const history = useHistory();

  const [index, setIndex] = React.useState(-1);

  const photos = [
    { src: 'photos/DSCF1051.jpeg', width: 854, height: 1280 },
    { src: 'photos/DSCF0340.jpeg', width: 854, height: 1280 },
    { src: 'photos/DSCF0855.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF1015.jpeg', width: 854, height: 1280 },
    { src: 'photos/DSCF0575.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF0594.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF0611.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF0782.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF0784.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF0420.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF0341.jpeg', width: 1280, height: 854 },
    { src: 'photos/DSCF0130.jpeg', width: 854, height: 1280 },
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
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </Grid>
  );
};

export default Photos;
