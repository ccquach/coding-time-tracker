import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 3,
  },
});

const SubmitButton = ({ classes, text, disabled }) => (
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    type="submit"
    disabled={disabled}
  >
    {text}
  </Button>
);

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);
