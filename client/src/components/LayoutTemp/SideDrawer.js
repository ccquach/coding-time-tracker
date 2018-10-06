import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import NavList from './NavList';

const SideDrawer = ({ classes, theme, open, handleDrawerClose }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
    }}
    open={open}
  >
    <div className={classes.toolbar}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
    <NavList />
  </Drawer>
);

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default SideDrawer;
