import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

const redDark = red[600];
const redLight = red[500];
const greyDark = grey[800];
const greyLight = grey[700];
const blueDark = lightBlue[900];
const blueLight = lightBlue[800];

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5,
    color: grey[100],
  },
  text: {
    marginLeft: theme.spacing.unit * 2,
  },
  google: {
    backgroundColor: redDark,
    '&:hover': {
      backgroundColor: redLight,
      '@media (hover: none)': {
        backgroundColor: redLight,
      },
    },
  },
  github: {
    backgroundColor: greyDark,
    '&:hover': {
      backgroundColor: greyLight,
      '@media (hover: none)': {
        backgroundColor: greyLight,
      },
    },
  },
  facebook: {
    backgroundColor: blueDark,
    '&:hover': {
      backgroundColor: blueLight,
      '@media (hover: none)': {
        backgroundColor: blueLight,
      },
    },
  },
});

// TODO: update Github and Facebook paths
const PROVIDERS = [
  {
    name: 'Google',
    path: '/api/auth/google',
    icon: 'google-plus',
  },
  {
    name: 'Github',
    // path: '/api/auth/github',
    path: '',
    icon: 'github',
  },
  {
    name: 'Facebook',
    // path: '/api/auth/facebook',
    path: '',
    icon: 'facebook-square',
  },
];

const Login = ({ classes }) => (
  <Grid container direction="column">
    {PROVIDERS.map(({ name, path, icon }) => (
      <Grid item key={name}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          href={path}
          className={classes.button}
          classes={{ containedPrimary: classes[name.toLowerCase()] }}
        >
          <Grid container justify="flex-start" alignItems="center">
            <Typography variant="title" component="span" color="inherit">
              <i className={`fab fa-${icon}`} aria-hidden="true" />
            </Typography>
            <Typography
              variant="subheading"
              color="inherit"
              className={classes.text}
            >
              Sign in with {name}
            </Typography>
          </Grid>
        </Button>
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(Login);
