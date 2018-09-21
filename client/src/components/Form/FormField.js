import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import FormSlider from './FormSlider';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class FormField extends Component {
  renderInput = () => {
    const {
      input,
      type,
      meta: { touched, error },
    } = this.props;

    const isValid = touched && error ? 'invalid' : null;

    switch (type) {
      case 'range':
        const { sliderOptions } = this.props;
        return (
          <FormSlider
            className={isValid}
            options={sliderOptions}
            input={input}
          />
        );
      case 'date':
        const { pickerOptions } = this.props;
        return (
          <DatePicker
            {...input}
            format="MMM DD, YYYY"
            showTodayButton
            {...pickerOptions}
            className={isValid}
          />
        );
      case 'text':
      default:
        return <Input type="text" {...input} />;
    }
  };

  render() {
    const {
      classes,
      input,
      label,
      meta: { touched, error },
    } = this.props;

    const errorMessage = touched && error ? error : null;

    return (
      <FormControl
        fullWidth
        className={classes.formControl}
        aria-describedby="error-text"
        error={touched && error}
      >
        {label && <InputLabel htmlFor={input.name}>{label}</InputLabel>}
        {this.renderInput()}
        <FormHelperText id="error-text">{errorMessage}</FormHelperText>
      </FormControl>
    );
  }
}

FormField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormField);
