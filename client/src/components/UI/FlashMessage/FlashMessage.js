import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

import * as actions from '../../../store/actions';
import FlashMessageContent from './FlashMessageContent';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

// TODO: implement consecutive snackbars
class FlashMessage extends Component {
  state = {
    open: true,
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, variant, message, removeFlash } = this.props;

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
        onExited={removeFlash}
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

FlashMessage = connect(
  null,
  actions
)(FlashMessage);
export default withStyles(styles)(FlashMessage);
