import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

import SnackbarContentWrapper from '../../components/UI/SnackbarContentWrapper';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class ErrorSnackbar extends Component {
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
    const { classes, error } = this.props;

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
        <SnackbarContentWrapper
          variant="error"
          className={classes.margin}
          message={error.message}
          onClose={this.handleClose}
        />
      </Snackbar>
    );
  }
}

ErrorSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ error }) => ({
  error,
});

ErrorSnackbar = connect(mapStateToProps)(ErrorSnackbar);
export default withStyles(styles)(ErrorSnackbar);
