import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import Aux from '../../hoc/Auxiliary';
import Header from '../../components/Layout/Header';
import SideDrawer from '../../components/Layout/SideDrawer';
import Footer from '../../components/Layout/Footer';
import ActionButton from '../../components/UI/ActionButton';
import FlashMessage from '../../components/UI/FlashMessage/FlashMessage';

const drawerWidth = 240;
const minDrawerWidth = 72;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    zIndex: 1,
    overflowX: 'hidden',
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
    minWidth: 0, // necessary to allow dashboard table parent to shrink beyond table min width
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
    marginBottom: theme.spacing.unit * 3,
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
  greeting: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
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

  renderFlashMessage = () => {
    const { flash } = this.props;
    if (flash) {
      const { type, message } = flash;
      return <FlashMessage variant={type.toLowerCase()} message={message} />;
    }
    return null;
  };

  render() {
    const { open } = this.state;
    const { children, auth, classes, theme } = this.props;

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
          {children}
          {auth && <ActionButton />}
          {this.renderFlashMessage()}
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

const mapStateToProps = ({ auth, flash }) => ({
  auth,
  flash,
});

Layout = connect(mapStateToProps)(Layout);
export default withStyles(styles, { withTheme: true })(Layout);
