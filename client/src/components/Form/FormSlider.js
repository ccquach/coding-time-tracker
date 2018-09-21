import React, { Component } from 'react';
import Slider from '@material-ui/lab/Slider';

class FormSlider extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value }, () => {
      this.props.input.onChange(value);
      this.props.input.onBlur(value);
    });
  };

  render() {
    const { value } = this.state;
    const {
      options: { step, min, max },
      input,
    } = this.props;

    return (
      <Slider
        step={step}
        min={min}
        max={max}
        {...input}
        value={value}
        aria-labelledby={input.name}
        onChange={this.handleChange}
      />
    );
  }
}

export default FormSlider;
