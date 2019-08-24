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
      backgroundColor: '#FFC0CB', // pink
    },
    image: {
      height: 350,
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

const PREFIX =
  'https://storage.googleapis.com/cheeze-wizards-production/0xec2203e38116f09e21bc27443e063b623b01345a/';

const Wizard = ({ classes, tokenId, power, element, owner }) => (
  <Grid item>
    <Card>
      <CardActionArea className={classes.actionArea}>
        {PREFIX + tokenId + '.svg' && (
          <CardMedia
            className={classes.image}
            image={PREFIX + tokenId + '.svg'}
            title={tokenId}
          />
        )}
        <CardContent>
          <Typography variant="h6" component="h3" className={classes.tokenId}>
            {'Token ID: ' + tokenId}
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
