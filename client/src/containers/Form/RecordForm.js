import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import moment from 'moment';

import * as actions from '../../store/actions';
import FormTitle from '../../components/Form/FormTitle';
import FormField from '../../components/Form/FormField';
import SubmitButton from '../../components/Form/SubmitButton';

const Display = styled.p`
  font-size: 7rem;
  font-weight: 100;

  span:first-child {
    display: inline-block;
    margin-right: 0.75rem;
  }

  span:last-child {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

class RecordForm extends Component {
  renderDateField = () => {
    const options = {
      disableFuture: true,
      label: 'Date',
    };
    return (
      <Field name="date" type="date" component={FormField} options={options} />
    );
  };

  renderRangeSlider = () => (
    <Field
      name="hoursCoded"
      type="range"
      min={0}
      max={24}
      component={FormField}
    />
  );

  submitForm = (values, dispatch) => {
    dispatch(actions.addRecord(values));
  };

  render() {
    const { handleSubmit, formValues, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        <FormTitle>Hours spent smashing the keyboard:</FormTitle>
        <div className="row">
          <div className="col s4">
            <Display>
              {formValues && <span>{formValues.hoursCoded}</span>}
              <span>hrs</span>
            </Display>
          </div>
          <div className="col s8">
            <div className="row">
              <div className="col s12">{this.renderDateField()}</div>
            </div>
            <div className="row">
              <div className="col s12">{this.renderRangeSlider()}</div>
            </div>
          </div>
        </div>
        <SubmitButton text="Record it!" disabled={invalid} />
      </form>
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

const mapStateToProps = ({ form }) => ({
  formValues: form.record ? form.record.values || null : null,
});

RecordForm = reduxForm({
  form: 'record',
  initialValues: {
    hoursCoded: '0',
    date: new Date(),
  },
  validate,
  onSubmitSuccess: (result, dispatch, props) => props.history.push('/'),
})(RecordForm);

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(RecordForm)
);
