import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';

import Aux from '../../hoc/Auxiliary';
import Header from '../../components/Layout/Header';
import SideDrawer from '../../components/Layout/SideDrawer';
import Footer from '../../components/Layout/Footer';
import ActionButton from '../../components/UI/ActionButton';
import ErrorSnackbar from '../UI/ErrorSnackbar';

const drawerWidth = 240;
const minDrawerWidth = 72;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    margin: '10px 0',
    width: '100%',
    color: grey[500],
  },
  footerShift: {
    marginLeft: minDrawerWidth,
    width: `calc(100% - ${minDrawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

class Layout extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { children, auth, error, classes, theme } = this.props;

    return (
      <div className={classes.root}>
        {auth && (
          <Aux>
            <Header
              classes={classes}
              open={open}
              handleDrawerOpen={this.handleDrawerOpen}
            />
            <SideDrawer
              classes={classes}
              theme={theme}
              open={open}
              handleDrawerClose={this.handleDrawerClose}
            />
          </Aux>
        )}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container>{children}</Grid>
          {auth && <ActionButton />}
          {error.message ? <ErrorSnackbar /> : null}
        </main>
        <Footer auth={auth} classes={classes} open={open} />
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth, error }) => ({
  auth,
  error,
});

Layout = connect(mapStateToProps)(Layout);
export default withStyles(styles, { withTheme: true })(Layout);
