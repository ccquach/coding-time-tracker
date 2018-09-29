import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import * as actions from '../../store/actions';

const styles = theme => ({
  formControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
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
    fontSize: 24,
    color: theme.palette.secondary.main,
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

  render() {
    const { dailyGoal } = this.state;
    const { classes } = this.props;
    return (
      <FormControl
        component="form"
        onSubmit={this.handleSubmit}
        className={classes.formControl}
      >
        <Typography variant="headline" component="label" htmlFor="dailyGoal">
          <span role="img" aria-label="rocket ship icon">
            &#128640;
          </span>{' '}
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
