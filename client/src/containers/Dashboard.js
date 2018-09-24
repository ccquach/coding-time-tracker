import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Paper from '@material-ui/core/Paper';

import * as actions from '../store/actions';
import Spinner from '../components/UI/Spinner';
import DonutPieChart from '../components/Charts/DonutPieChart';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '0 auto',
  },
  grid: {
    [theme.breakpoints.up('lg')]: {
      width: 1140,
    },
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textTransform: 'uppercase',
    color: blueGrey[200],
  },
});

const MULTIPLIERS = {
  today: 1,
  week: 7,
  month: moment(new Date())
    .endOf('month')
    .date(),
};

const LABELS = ['today', 'this week', 'this month'];

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.fetchHoursRecords();
  };

  getHoursCoded = () => {
    const {
      auth: { dailyGoal },
      records,
    } = this.props;
    return Object.keys(records).map((key, i) => ({
      name: key,
      value: records[key],
      goal: dailyGoal * MULTIPLIERS[key],
      label: LABELS[i],
    }));
  };

  renderContent = () => {
    const { classes, records } = this.props;
    switch (records) {
      case null:
        return <Spinner />;
      case false:
        return (
          <Typography variant="body2" align="center">
            Unable to fetch data.
          </Typography>
        );
      case records:
        return (
          <Paper className={classes.root} elevation={2}>
            <Typography variant="title" component="h3">
              Progress Overview
            </Typography>
            <Grid container className={classes.grid}>
              {this.renderPieCharts()}
            </Grid>
          </Paper>
        );
      default:
        return null;
    }
  };

  renderPieCharts = () => {
    return this.getHoursCoded().map(obj => (
      <Grid
        item
        xs={12}
        md={4}
        key={obj.name}
        className={this.props.classes.item}
        container
        direction="column"
      >
        <DonutPieChart data={obj} />
        <Typography
          variant="subheading"
          component="span"
          align="center"
          className={this.props.classes.label}
        >
          {obj.label}
        </Typography>
      </Grid>
    ));
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ auth, records }) => ({
  auth,
  records,
});

Dashboard = connect(
  mapStateToProps,
  actions
)(Dashboard);

export default withStyles(styles)(Dashboard);
