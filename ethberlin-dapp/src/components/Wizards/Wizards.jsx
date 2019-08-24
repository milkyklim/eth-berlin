import React from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  createStyles,
  withStyles,
} from '@material-ui/core';

const wizardStyles = theme =>
  createStyles({
    actionArea: {
      maxWidth: 300,
    },
    element: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    power: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    tokenId: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    owner: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  });

const Wizard = ({ classes, tokenId, power, element, owner }) => (
  <Grid item>
    <Card>
      <CardActionArea className={classes.actionArea}>
        {/* {element && (
          <CardMedia
            className={classes.element}
            image={element}
            title={power}
          />
        )} */}
        <CardContent>
          <Typography variant="h6" component="h3" className={classes.tokenId}>
            {tokenId || '—'}
          </Typography>
          <Typography color="textSecondary">Power</Typography>
          <Typography component="p" className={classes.power}>
            {power}
          </Typography>
          <Typography color="textSecondary">Owner</Typography>
          <Typography component="p" className={classes.owner}>
            {owner}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

const StyledWizard = withStyles(wizardStyles)(Wizard);

const wizardsStyles = theme =>
  createStyles({
    title: {
      marginTop: theme.spacing.unit * 2,
    },
  });

const Wizards = ({ classes, wizards }) => (
  <Grid container direction="column" spacing={16}>
    <Grid item>
      <Typography variant="title" className={classes.title}>
        {wizards.length} Wizards
      </Typography>
    </Grid>
    <Grid item>
      <Grid container direction="row" spacing={16}>
        {wizards.map(wizard => (
          <StyledWizard key={wizard.tokenId} {...wizard} />
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(wizardsStyles)(Wizards);
