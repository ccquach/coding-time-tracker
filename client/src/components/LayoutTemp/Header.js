import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import getTitleFromPath from '../../utils/getTitleFromPath';

const Header = ({
  classes,
  open,
  handleDrawerOpen,
  location: { pathname },
  auth: { name },
}) => {
  return (
    <AppBar
      position="absolute"
      className={classNames(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="title"
          color="inherit"
          className={classes.grow}
          noWrap
        >
          {pathname === '/' ? 'Dashboard' : getTitleFromPath(pathname)}
        </Typography>
        <Typography
          variant="subheading"
          color="inherit"
          className={classes.greeting}
        >
          Hi, {name}!
        </Typography>
        <Button component="a" href="/api/auth/logout" color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default withRouter(connect(mapStateToProps)(Header));
