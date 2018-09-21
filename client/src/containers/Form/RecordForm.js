import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import * as actions from '../../store/actions';
import Aux from '../../hoc/Auxiliary';
import FormField from '../../components/Form/FormField';
import SubmitButton from '../../components/Form/SubmitButton';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  inline: {
    display: 'inline-block',
    marginRight: theme.spacing.unit,
  },
  controls: {
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
});

class RecordForm extends Component {
  renderDateField = () => {
    const options = {
      disableFuture: true,
      label: 'Date',
    };
    return (
      <Field
        name="date"
        type="date"
        component={FormField}
        pickerOptions={options}
      />
    );
  };

  renderFormSlider = () => {
    const options = {
      step: 1,
      min: 0,
      max: 24,
    };
    return (
      <Field
        name="hoursCoded"
        type="range"
        sliderOptions={options}
        component={FormField}
        parse={value => +value}
      />
    );
  };

  renderHoursDisplay = () => {
    const { classes, formValues } = this.props;
    return (
      <Aux>
        {formValues && (
          <Typography
            variant="display4"
            component="span"
            className={classes.inline}
            id="hoursCoded"
          >
            {formValues.hoursCoded}
          </Typography>
        )}
        <Typography
          variant="body1"
          component="span"
          gutterBottom
          className={classes.inline}
        >
          hrs
        </Typography>
      </Aux>
    );
  };

  submitForm = (values, dispatch) => {
    dispatch(actions.addRecord(values));
  };

  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    return (
      <Paper
        component="form"
        onSubmit={handleSubmit(this.submitForm)}
        className={classes.root}
      >
        <Typography variant="headline" component="h3" gutterBottom>
          Hours spent smashing the keyboard:
        </Typography>
        <Grid container spacing={16}>
          <Grid
            item
            sm={5}
            xs={12}
            container
            wrap="nowrap"
            alignItems="baseline"
          >
            {this.renderHoursDisplay()}
          </Grid>
          <Grid
            item
            sm={7}
            xs={12}
            container
            direction="column"
            spacing={16}
            className={classes.controls}
          >
            <Grid item xs>
              {this.renderDateField()}
            </Grid>
            <Grid item xs>
              {this.renderFormSlider()}
            </Grid>
          </Grid>
        </Grid>
        <SubmitButton text="Record it!" disabled={invalid || submitting} />
      </Paper>
    );
  }
}

const validate = ({ date, hoursCoded }) => {
  const errors = {};

  if (!moment(date).toDate()) errors.date = 'Invalid date';

  if (hoursCoded < 0)
    errors.hoursCoded = 'Negative productivity?! I refuse to believe it!';
  if (hoursCoded > 24)
    errors.hoursCoded =
      'Definition of hard worker -- work more hours than there are in a day! *applauds*';
  if (!hoursCoded) errors.hoursCoded = 'Cannot be empty.';

  return errors;
};

RecordForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ form }) => ({
  formValues: form.record ? form.record.values || null : null,
});

RecordForm = reduxForm({
  form: 'record',
  initialValues: {
    hoursCoded: 0,
    date: new Date(),
  },
  validate,
  onSubmitSuccess: (result, dispatch, props) => props.history.push('/'),
})(RecordForm);

RecordForm = withRouter(
  connect(
    mapStateToProps,
    actions
  )(RecordForm)
);
export default withStyles(styles)(RecordForm);
