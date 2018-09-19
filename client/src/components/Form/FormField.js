import React, { Component } from 'react';
import { DatePicker } from 'material-ui-pickers';

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
        const { min, max } = this.props;
        return (
          <input
            type="range"
            min={min}
            max={max}
            {...input}
            className={isValid}
          />
        );
      case 'date':
        const { options } = this.props;
        return (
          <DatePicker
            {...input}
            format="MMM DD, YYYY"
            showTodayButton
            {...options}
            className={isValid}
          />
        );
      case 'text':
      default:
        return <input type="text" {...input} />;
    }
  };

  render() {
    const {
      input,
      label,
      meta: { touched, error },
    } = this.props;

    const errorMessage = touched && error ? error : null;

    return (
      <div className="input-field">
        {this.renderInput()}
        {label && <label htmlFor={input.name}>{label}</label>}
        <span className="helper-text" data-error={errorMessage}>
          &nbsp;
        </span>
      </div>
    );
  }
}

export default FormField;
