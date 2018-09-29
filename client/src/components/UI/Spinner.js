import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  progress: {
    margin: `${theme.spacing.unit * 2}px auto`,
  },
});

const Spinner = ({ classes }) => (
  <Grid container justify="center" alignItems="center">
    <Grid item>
      <CircularProgress className={classes.progress} size={50} />
    </Grid>
  </Grid>
);

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spinner);
