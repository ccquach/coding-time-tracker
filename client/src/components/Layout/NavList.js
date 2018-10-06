import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FlagIcon from '@material-ui/icons/Flag';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: theme.mixins.toolbar,
});

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: <Dashboard /> },
  { name: 'Journal', path: '/journal', icon: <DateRangeIcon /> },
  { name: 'Goals', path: '/goals', icon: <FlagIcon /> },
];

const NavList = ({ classes }) => (
  <div className={classes.root}>
    <List component="nav">
      {NAV_ITEMS.map(({ name, path, icon }) => (
        <ListItem key={name} component={Link} to={path} button>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  </div>
);

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavList);
