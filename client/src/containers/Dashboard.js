import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';

import * as actions from '../store/actions';
import Spinner from '../components/UI/Spinner';
import Aux from '../hoc/Auxiliary';
import GoalForm from './Form/GoalForm';
import ChartContainer from '../components/Charts/ChartContainer';
import DonutPieChart from '../components/Charts/DonutPieChart';
import TrendChart from '../components/Charts/TrendChart';
import RecordsTable from '../components/Charts/RecordsTable';

const styles = theme => ({
  grid: {
    [theme.breakpoints.up('md')]: {
      width: 1140,
      margin: '0 auto',
    },
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
      records: { hoursCoded },
    } = this.props;
    return Object.keys(hoursCoded).map((key, i) => ({
      name: key,
      value: hoursCoded[key],
      goal: dailyGoal * MULTIPLIERS[key],
      label: LABELS[i],
    }));
  };

  renderContent = () => {
    const {
      records,
      auth: { dailyGoal },
    } = this.props;
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
          <Aux>
            <ChartContainer title="Progress Overview">
              <Grid container>{this.renderPieCharts()}</Grid>
            </ChartContainer>
            <ChartContainer title="Trend Analysis">
              <TrendChart data={records.data} />
            </ChartContainer>
            <RecordsTable data={records.data} dailyGoal={dailyGoal} />
          </Aux>
        );
      default:
        return null;
    }
  };

  // TODO: implement carousel for mobile view (mobile stepper?)
  renderPieCharts = () => {
    const { classes } = this.props;
    return this.getHoursCoded().map(obj => (
      <Grid
        item
        xs={12}
        sm={4}
        key={obj.name}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <DonutPieChart data={obj} />
        <Typography
          variant="subheading"
          component="span"
          align="center"
          className={classes.label}
        >
          {obj.label}
        </Typography>
      </Grid>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column" className={classes.grid}>
        <Grid item xs>
          <GoalForm />
        </Grid>
        <Grid item xs>
          {this.renderContent()}
        </Grid>
      </Grid>
    );
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
