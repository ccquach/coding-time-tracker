import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Battery20Icon from '@material-ui/icons/Battery20';
// import Battery30Icon from '@material-ui/icons/Battery30';
// import Battery50Icon from '@material-ui/icons/Battery50';
// import Battery60Icon from '@material-ui/icons/Battery60';
// import Battery80Icon from '@material-ui/icons/Battery80';
// import Battery90Icon from '@material-ui/icons/Battery90';
// import BatteryFullIcon from '@material-ui/icons/BatteryFull';
// import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';

import * as actions from '../../store/actions';

const greyLight = grey[50];

const styles = theme => ({
  formControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50,
  },
  textInput: {
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit,
    textAlign: 'center',
    color: greyLight,
  },
  textUnderline: {
    '&:after': {
      borderBottom: `2px solid ${greyLight}`,
    },
    '&:before': {
      borderBottom: `1px solid ${greyLight}`,
    },
    '&:hover:before': {
      borderBottom: `2px solid ${greyLight}`,
    },
  },
});

class GoalForm extends Component {
  state = {
    dailyGoal: this.props.dailyGoal,
  };

  handleChange = e => {
    this.setState({
      dailyGoal: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setDailyGoal(this.state.dailyGoal);
  };

  getInputIcon = () => {
    // TODO: render icon based on % of daily goal reached
  };

  render() {
    const { dailyGoal } = this.state;
    const { classes } = this.props;
    return (
      <FormControl
        component="form"
        onSubmit={this.handleSubmit}
        className={classes.formControl}
      >
        <Typography
          variant="body2"
          component="label"
          htmlFor="dailyGoal"
          color="inherit"
        >
          Daily goal:
        </Typography>
        <TextField
          id="dailyGoal"
          value={dailyGoal}
          onChange={this.handleChange}
          type="number"
          className={classes.textField}
          margin="normal"
          InputProps={{
            classes: {
              input: classes.textInput,
              underline: classes.textUnderline,
            },
            inputProps: {
              min: 1,
              max: 24,
              onBlur: this.handleSubmit,
            },
          }}
          required
        />
      </FormControl>
    );
  }
}

const mapStateToProps = ({ auth: { dailyGoal } }) => ({
  dailyGoal,
});

GoalForm = connect(
  mapStateToProps,
  actions
)(GoalForm);
export default withStyles(styles)(GoalForm);
