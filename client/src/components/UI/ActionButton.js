import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import MyLocationIcon from '@material-ui/icons/MyLocation';

const styles = theme => ({
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

const ACTIONS = [
  { icon: <MyLocationIcon />, name: 'Goal', form: 'goal' },
  { icon: <EditIcon />, name: 'TIL', form: 'journal' },
  { icon: <AccessTimeIcon />, name: 'Hours', form: 'record' },
];

// FIXME: tooltip causing Failed prop type error
class ActionButton extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderButtons = () =>
    ACTIONS.map(({ icon, name, form }) => (
      <SpeedDialAction
        key={name}
        icon={icon}
        tooltipTitle={name}
        onClick={() => this.handleRedirect(form)}
      />
    ));

  handleRedirect = form => {
    debugger;
    this.handleClick();
    this.props.history.push(`/new/${form}`);
  };

  // FIXME: onClick doesn't fire
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <SpeedDial
          ariaLabel="SpeedDial"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
        >
          {this.renderButtons()}
        </SpeedDial>
      </div>
    );
  }
}

ActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

ActionButton = withRouter(ActionButton);
export default withStyles(styles)(ActionButton);
