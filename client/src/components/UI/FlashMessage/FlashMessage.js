import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

import FlashMessageContent from './FlashMessageContent';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class FlashMessage extends Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, variant, message } = this.props;

    return (
      <Snackbar
        className={classes.size}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <FlashMessageContent
          variant={variant}
          className={classes.margin}
          message={message}
          onClose={this.handleClose}
        />
      </Snackbar>
    );
  }
}

FlashMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(FlashMessage);
