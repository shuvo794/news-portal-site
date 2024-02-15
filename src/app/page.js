import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <h2>Latest News</h2>
        </Grid>
        <Grid item xs={4}>
          <h2>Sidebar</h2>
        </Grid>
       </Grid>
    </>
  );
};

export default HomePage;