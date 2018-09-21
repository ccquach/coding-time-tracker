import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

import Aux from '../../hoc/Auxiliary';
import SlideUp from './Transitions/SlideUp';
import BackgroundImage from '../../images/modal-bg.jpg';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  modal: {
    minWidth: 330,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing.unit * 2,
  },
  title: {
    color: grey[100],
  },
});

class Modal extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, children, title, buttonText, buttonIcon } = this.props;
    return (
      <Aux>
        <Button
          onClick={this.handleClickOpen}
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
        >
          {buttonText}
          {buttonIcon}
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={SlideUp}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          classes={{ paper: classes.modal }}
        >
          <DialogTitle
            id="alert-dialog-slide-title"
            disableTypography
            className={classes.title}
          >
            <Typography variant="title" color="inherit" align="center">
              {title}
            </Typography>
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
        </Dialog>
      </Aux>
    );
  }
}

export default withStyles(styles)(Modal);
