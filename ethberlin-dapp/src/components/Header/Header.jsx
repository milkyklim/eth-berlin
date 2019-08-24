import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Header = () => (
  <Grid container direction="row" alignItems="center" spacing={64}>
    <Grid item>
      <Typography variant="title">
        The Graph ETHBerlin dApp – Easy Cheezy Explorer
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
