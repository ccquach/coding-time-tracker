import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Hero from '../images/hero.jpg';
import Login from './Login';
import Modal from './UI/Modal';

const styles = theme => ({
  header: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${Hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    color: theme.palette.grey[200],
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 300,
  },
  subheading: {
    fontWeight: 400,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const Landing = ({ classes }) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    component="header"
    className={classes.header}
  >
    <Typography
      component="h1"
      variant="h3"
      gutterBottom
      color="inherit"
      align="center"
      className={classes.heading}
    >
      Coding Time Tracker
    </Typography>
    <Typography
      component="h2"
      variant="h6"
      gutterBottom
      color="inherit"
      align="center"
      className={classes.subheading}
    >
      Set goals. Track progress. Commit to Learning.
    </Typography>
    <Modal
      title="Login to start tracking"
      buttonText="Start tracking now"
      buttonIcon={<ChevronRightIcon className={classes.rightIcon} />}
    >
      <Login />
    </Modal>
  </Grid>
);

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
