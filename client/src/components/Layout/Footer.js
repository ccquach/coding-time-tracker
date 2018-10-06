import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Footer = ({ classes, open, auth }) => {
  return (
    <footer
      className={classnames(
        classes.footer,
        !open && auth && classes.footerShift,
        open && auth && classes.appBarShift
      )}
    >
      <div className={classes.toolbar} />
      <Typography variant="caption" color="inherit" align="center">
        &copy; 2018 Cynthia Quach
      </Typography>
    </footer>
  );
};

Footer.proptypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withRouter(Footer);
