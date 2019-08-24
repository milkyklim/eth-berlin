import React from 'react';
import {
  Grid,
  Select,
  FormControlLabel,
  MenuItem,
  createStyles,
  withStyles,
} from '@material-ui/core';

const filterStyles = theme =>
  createStyles({
    orderBySelect: {
      marginLeft: theme.spacing.unit,
    },
  });

const Filter = ({ classes, onOrderBy, orderBy }) => (
  <Grid item>
    <Grid container direction="row">
      <FormControlLabel
        control={
          <Select
            className={classes.orderBySelect}
            value={orderBy}
            onChange={event => onOrderBy && onOrderBy(event.target.value)}
          >
            <MenuItem value="tokenId">Token ID</MenuItem>
            <MenuItem value="power">Power</MenuItem>
            <MenuItem value="element">Element</MenuItem>
            <MenuItem value="owner">Owner</MenuItem>
          </Select>
        }
        label="Order By:"
        labelPlacement="start"
      />
    </Grid>
  </Grid>
);

const StyledFilter = withStyles(filterStyles)(Filter);

export default StyledFilter;
